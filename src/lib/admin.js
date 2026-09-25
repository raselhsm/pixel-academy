import { supabase } from './supabase';

const unwrap = ({ data, error }) => {
  if (error) throw error;
  return data;
};

// Orders --------------------------------------------------------------------

export async function fetchOrders({ status, search = '', limit = 200 } = {}) {
  let query = supabase
    .from('orders')
    .select('id, user_id, full_name, phone, payment_method, sender_number, trx_id, amount, status, note, created_at, reviewed_at')
    .order('created_at', { ascending: status === 'pending' })
    .limit(limit);
  if (status) query = query.eq('status', status);
  const term = search.trim().replace(/[%,()]/g, '');
  if (term) query = query.or(`trx_id.ilike.%${term}%,phone.ilike.%${term}%,sender_number.ilike.%${term}%,full_name.ilike.%${term}%`);
  return unwrap(await query);
}

// reviewed_at / reviewed_by are stamped by a database trigger.
export async function reviewOrder(id, status, note = null) {
  return unwrap(await supabase.from('orders').update({ status, note: note?.trim() || null }).eq('id', id));
}

export async function fetchStats() {
  const count = async (build) => {
    const { count: n, error } = await build(supabase.from('orders').select('id', { count: 'exact', head: true }));
    if (error) throw error;
    return n ?? 0;
  };
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const [pending, todayOrders, approvedRows, students] = await Promise.all([
    count((q) => q.eq('status', 'pending')),
    count((q) => q.gte('created_at', startOfToday.toISOString())),
    supabase.from('orders').select('amount').eq('status', 'approved').then(unwrap),
    supabase.from('profiles').select('id', { count: 'exact', head: true }).eq('is_admin', false),
  ]);

  return {
    pending,
    todayOrders,
    buyers: approvedRows.length,
    revenue: approvedRows.reduce((sum, o) => sum + o.amount, 0),
    accounts: students.count ?? 0,
  };
}

// Students ------------------------------------------------------------------

const STATUS_RANK = { approved: 3, pending: 2, rejected: 1 };

// Every registered student with the status of their most relevant order.
export async function fetchStudents() {
  const [profiles, orders] = await Promise.all([
    supabase.from('profiles').select('id, full_name, phone, email, created_at').eq('is_admin', false).order('created_at', { ascending: false }).then(unwrap),
    supabase.from('orders').select('user_id, status, phone, created_at').then(unwrap),
  ]);
  const best = new Map();
  for (const o of orders) {
    const current = best.get(o.user_id);
    if (!current || STATUS_RANK[o.status] > STATUS_RANK[current.status]) best.set(o.user_id, o);
  }
  return profiles.map((p) => {
    const order = best.get(p.id);
    return {
      ...p,
      phone: p.phone || order?.phone || '',
      status: order?.status ?? 'none',
      orderedAt: order?.created_at ?? null,
    };
  });
}

// Gives a student access without a bKash/Nagad payment (e.g. a free pass).
export async function grantAccess(student, note) {
  return unwrap(
    await supabase.from('orders').insert({
      user_id: student.id,
      full_name: student.full_name || student.email || 'শিক্ষার্থী',
      phone: student.phone || '-',
      payment_method: 'manual',
      sender_number: '-',
      trx_id: `MANUAL-${student.id.slice(0, 8)}-${Date.now().toString(36)}`.toUpperCase(),
      amount: 0,
      status: 'approved',
      note,
      reviewed_at: new Date().toISOString(),
    }),
  );
}

// Course content -------------------------------------------------------------

export const addModule = async (title, position) =>
  unwrap(await supabase.from('modules').insert({ title, position }).select().single());

export const updateModule = async (id, changes) => unwrap(await supabase.from('modules').update(changes).eq('id', id));

export const deleteModule = async (id) => unwrap(await supabase.from('modules').delete().eq('id', id));

export const addLesson = async (moduleId, title, position) =>
  unwrap(await supabase.from('lessons').insert({ module_id: moduleId, title, position }).select().single());

export const updateLesson = async (id, changes) => unwrap(await supabase.from('lessons').update(changes).eq('id', id));

export const deleteLesson = async (id) => unwrap(await supabase.from('lessons').delete().eq('id', id));

// Swap the positions of two rows in the same table.
export async function swapPositions(table, a, b) {
  await Promise.all([
    supabase.from(table).update({ position: b.position }).eq('id', a.id).then(unwrap),
    supabase.from(table).update({ position: a.position }).eq('id', b.id).then(unwrap),
  ]);
}

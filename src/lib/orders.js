import { supabase } from './supabase';

// The student's order that decides access: any approved one, otherwise the latest.
export async function fetchMyOrder() {
  const { data } = await supabase
    .from('orders')
    .select('status, trx_id, created_at')
    .order('created_at', { ascending: false });
  const orders = data ?? [];
  return orders.find((o) => o.status === 'approved') ?? orders[0] ?? null;
}

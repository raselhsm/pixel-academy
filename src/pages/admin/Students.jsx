import { useMemo, useState } from 'react';
import { Check, Download, KeyRound, Mail, MessageCircle, Phone, Search } from 'lucide-react';
import { useAsync } from '../../hooks/useAsync';
import { fetchStudents, grantAccess } from '../../lib/admin';
import { toBnDigits, whatsappLink } from '../../lib/format';
import { formatDateTime } from '../../components/admin/orderMeta';
import { EmptyState, ErrorNote, PageHeader, Panel } from '../../components/admin/ui';
import { buttonStyles, inputStyles } from '../../components/admin/styles';
import Spinner from '../../components/ui/Spinner';
import { COURSE } from '../../data/homeContent';

const FILTERS = [
  { key: 'all', label: 'সবাই' },
  { key: 'approved', label: 'কিনেছেন' },
  { key: 'pending', label: 'যাচাই বাকি' },
  { key: 'none', label: 'এখনো কেনেননি' },
];

const STATUS_BADGE = {
  approved: ['কিনেছেন', 'bg-emerald-500/15 text-emerald-300'],
  pending: ['যাচাই বাকি', 'bg-amber-500/15 text-amber-300'],
  rejected: ['বাতিল', 'bg-red-500/15 text-red-300'],
  none: ['কেনেননি', 'bg-slate-700/60 text-slate-300'],
};

function downloadCsv(rows) {
  const header = ['নাম', 'মোবাইল', 'ইমেইল', 'অবস্থা', 'অ্যাকাউন্ট খোলার তারিখ'];
  const escape = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const lines = [header, ...rows.map((s) => [s.full_name, s.phone, s.email, STATUS_BADGE[s.status][0], s.created_at?.slice(0, 10)])];
  // BOM so Excel opens the Bangla text correctly.
  const blob = new Blob(['﻿' + lines.map((l) => l.map(escape).join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: `pixel-academy-students-${new Date().toISOString().slice(0, 10)}.csv` });
  a.click();
  URL.revokeObjectURL(url);
}

// People who signed up but haven't bought are the warmest leads, so they get
// a ready-made WhatsApp nudge.
const nudgeText = (name) =>
  `আসসালামু আলাইকুম ${name || ''}, Pixel Academy-তে অ্যাকাউন্ট খোলার জন্য ধন্যবাদ! "${COURSE.title}" কোর্সটি কিনতে কোনো সমস্যা হলে জানাবেন, আমরা সাহায্য করব। কিনতে: ${window.location.origin}/checkout`;

export default function Students() {
  const { data: students, error, loading, reload } = useAsync(fetchStudents, 'students');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [granting, setGranting] = useState(null);
  const [grantError, setGrantError] = useState(null);

  const grant = async (student) => {
    if (!window.confirm(`${student.full_name || student.email}-কে টাকা ছাড়াই কোর্সের অ্যাক্সেস দেবেন?`)) return;
    setGranting(student.id);
    setGrantError(null);
    try {
      await grantAccess(student, 'অ্যাডমিন অ্যাক্সেস দিয়েছেন');
      reload();
    } catch {
      setGrantError('অ্যাক্সেস দেওয়া যায়নি, আবার চেষ্টা করুন।');
    } finally {
      setGranting(null);
    }
  };

  const counts = useMemo(() => {
    const c = { all: students?.length ?? 0, approved: 0, pending: 0, none: 0 };
    for (const s of students ?? []) if (c[s.status] !== undefined) c[s.status] += 1;
    return c;
  }, [students]);

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return (students ?? []).filter(
      (s) =>
        (filter === 'all' || s.status === filter || (filter === 'none' && s.status === 'rejected')) &&
        (!term || [s.full_name, s.phone, s.email].some((v) => v?.toLowerCase().includes(term))),
    );
  }, [students, filter, search]);

  if (loading && !students) return <Spinner />;

  return (
    <>
      <PageHeader
        title="শিক্ষার্থী"
        subtitle="যারা অ্যাকাউন্ট খুলেছেন। যারা এখনো কেনেননি তাদের হোয়াটসঅ্যাপে মনে করিয়ে দিন।"
        actions={
          <button type="button" onClick={() => downloadCsv(visible)} disabled={!visible.length} className={buttonStyles.secondary}>
            <Download className="size-4" /> CSV ডাউনলোড
          </button>
        }
      />
      {(error || grantError) && <ErrorNote>{grantError ?? 'শিক্ষার্থীদের তালিকা লোড করা যায়নি।'}</ErrorNote>}


      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="শিক্ষার্থী ফিল্টার" className="flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f.key ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800/70 text-slate-300 hover:text-white'
              }`}
            >
              {f.label} <span className="font-sans opacity-70">{toBnDigits(counts[f.key])}</span>
            </button>
          ))}
        </div>
        <label className="relative sm:w-72">
          <span className="sr-only">শিক্ষার্থী খুঁজুন</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="নাম, নম্বর বা ইমেইল" className={`${inputStyles} pl-10`} />
        </label>
      </div>

      <Panel>
        {!visible.length ? (
          <EmptyState>{students?.length ? 'এই ফিল্টারে কেউ নেই।' : 'এখনো কেউ অ্যাকাউন্ট খোলেননি।'}</EmptyState>
        ) : (
          <ul className="divide-y divide-slate-800">
            {visible.map((s) => {
              const [label, badge] = STATUS_BADGE[s.status];
              return (
                <li key={s.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold text-white">{s.full_name || 'নাম নেই'}</p>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${badge}`}>{label}</span>
                    </div>
                    <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                      {s.phone && (
                        <a href={`tel:${s.phone}`} className="inline-flex items-center gap-1 font-sans hover:text-white">
                          <Phone className="size-3" /> {s.phone}
                        </a>
                      )}
                      {s.email && (
                        <a href={`mailto:${s.email}`} className="inline-flex min-w-0 items-center gap-1 font-sans hover:text-white">
                          <Mail className="size-3 shrink-0" /> <span className="truncate">{s.email}</span>
                        </a>
                      )}
                      <span>যোগ দিয়েছেন {formatDateTime(s.created_at)}</span>
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {s.status === 'approved' ? (
                      <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                        <Check className="size-4" /> অ্যাক্সেস আছে
                      </span>
                    ) : (
                      <>
                        {s.phone && (
                          <a
                            href={whatsappLink(s.phone, nudgeText(s.full_name))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${buttonStyles.secondary} border-[#25D366]/50 text-[#5ee08f]`}
                          >
                            <MessageCircle className="size-4" /> মনে করিয়ে দিন
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => grant(s)}
                          disabled={granting === s.id}
                          className={buttonStyles.secondary}
                        >
                          <KeyRound className="size-4" /> অ্যাক্সেস দিন
                        </button>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>
    </>
  );
}

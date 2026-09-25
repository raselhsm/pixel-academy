import { useDeferredValue, useState } from 'react';
import { RefreshCw, Search } from 'lucide-react';
import { useAsync } from '../../hooks/useAsync';
import { fetchOrders, reviewOrder } from '../../lib/admin';
import OrderCard from '../../components/admin/OrderCard';
import { STATUS } from '../../components/admin/orderMeta';
import { EmptyState, ErrorNote, PageHeader, Panel } from '../../components/admin/ui';
import { buttonStyles, inputStyles } from '../../components/admin/styles';
import Spinner from '../../components/ui/Spinner';

const TABS = [...Object.entries(STATUS).map(([key, s]) => ({ key, label: s.label })), { key: '', label: 'সব' }];

export default function Orders() {
  const [status, setStatus] = useState('pending');
  const [search, setSearch] = useState('');
  const term = useDeferredValue(search.trim());
  const [actionError, setActionError] = useState(null);
  const { data: orders, error, loading, reload } = useAsync(() => fetchOrders({ status: status || undefined, search: term }), `${status}|${term}`);

  const review = async (id, next, note) => {
    setActionError(null);
    try {
      await reviewOrder(id, next, note);
      reload();
    } catch {
      setActionError('আপডেট করা যায়নি, আবার চেষ্টা করুন।');
    }
  };

  return (
    <>
      <PageHeader
        title="অর্ডার"
        subtitle="বিকাশ/নগদ অ্যাপে TrxID ও টাকার পরিমাণ মিলিয়ে অনুমোদন দিন। অনুমোদন দিলেই শিক্ষার্থী কোর্স দেখতে পারবে।"
        actions={
          <button type="button" onClick={reload} className={buttonStyles.secondary}>
            <RefreshCw className="size-4" /> রিফ্রেশ
          </button>
        }
      />

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="অর্ডারের অবস্থা" className="flex gap-2 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.key || 'all'}
              type="button"
              role="tab"
              aria-selected={status === t.key}
              onClick={() => setStatus(t.key)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                status === t.key ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800/70 text-slate-300 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <label className="relative sm:w-72">
          <span className="sr-only">অর্ডার খুঁজুন</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="TrxID, নম্বর বা নাম দিয়ে খুঁজুন"
            className={`${inputStyles} pl-10`}
          />
        </label>
      </div>

      {(error || actionError) && <ErrorNote>{actionError ?? 'অর্ডার লোড করা যায়নি।'}</ErrorNote>}

      {loading && !orders ? (
        <Spinner />
      ) : !orders?.length ? (
        <Panel>
          <EmptyState>{term ? 'এই খোঁজে কোনো অর্ডার পাওয়া যায়নি।' : 'এই তালিকায় কোনো অর্ডার নেই।'}</EmptyState>
        </Panel>
      ) : (
        <ul className={`space-y-4 transition-opacity ${loading ? 'opacity-60' : ''}`}>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} onReview={review} />
          ))}
        </ul>
      )}
    </>
  );
}

import { Link } from 'react-router';
import { ArrowRight, CircleCheck, CircleDashed, Clock, GraduationCap, TrendingUp, UserPlus, Wallet } from 'lucide-react';
import { useAsync } from '../../hooks/useAsync';
import { fetchOrders, fetchStats, reviewOrder } from '../../lib/admin';
import { fetchCourseContent } from '../../lib/course';
import { fetchAuthSettings } from '../../lib/authSettings';
import { toBnDigits } from '../../lib/format';
import OrderCard from '../../components/admin/OrderCard';
import { EmptyState, ErrorNote, PageHeader, Panel } from '../../components/admin/ui';
import Spinner from '../../components/ui/Spinner';

const projectRef = new URL(import.meta.env.VITE_SUPABASE_URL ?? 'https://unset.supabase.co').hostname.split('.')[0];
const DASHBOARD = `https://supabase.com/dashboard/project/${projectRef}`;

function StatCard({ Icon, label, value, tone = 'text-white', to }) {
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{label}</span>
        <span className="flex size-9 items-center justify-center rounded-xl bg-slate-800/80">
          <Icon className="size-4 text-emerald-400" aria-hidden="true" />
        </span>
      </div>
      <p className={`mt-3 font-sans text-3xl font-extrabold ${tone}`}>{value}</p>
    </>
  );
  const className = 'block rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition';
  return to ? (
    <Link to={to} className={`${className} hover:border-emerald-500/40`}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

function ChecklistItem({ done, children, href }) {
  const Icon = done ? CircleCheck : CircleDashed;
  return (
    <li className="flex items-start gap-3 px-5 py-3.5">
      <Icon className={`mt-0.5 size-5 shrink-0 ${done ? 'text-emerald-400' : 'text-amber-400'}`} aria-hidden="true" />
      <div className={`text-sm ${done ? 'text-slate-400' : 'text-slate-200'}`}>
        {children}
        {!done && href && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="ml-2 font-semibold text-emerald-400 hover:underline">
            ঠিক করুন →
          </a>
        )}
      </div>
    </li>
  );
}

async function loadOverview() {
  const [stats, pending, modules, auth] = await Promise.all([
    fetchStats(),
    fetchOrders({ status: 'pending', limit: 5 }),
    fetchCourseContent(),
    fetchAuthSettings(),
  ]);
  const lessons = modules.flatMap((m) => m.lessons);
  return { stats, pending, auth, lessonCount: lessons.length, withVideo: lessons.filter((l) => l.video_url).length };
}

export default function Overview() {
  const { data, error, loading, reload } = useAsync(loadOverview, 'overview');

  if (loading && !data) return <Spinner />;
  if (!data) return <ErrorNote>ড্যাশবোর্ড লোড করা যায়নি। পেজটি রিফ্রেশ করুন।</ErrorNote>;

  const { stats, pending, auth, lessonCount, withVideo } = data;
  const review = async (id, status, note) => {
    await reviewOrder(id, status, note);
    reload();
  };

  return (
    <>
      <PageHeader title="ওভারভিউ" subtitle="আপনার কোর্সের বিক্রি ও শিক্ষার্থীদের এক নজরে দেখুন।" />
      {error && <ErrorNote>সর্বশেষ তথ্য আনা যায়নি।</ErrorNote>}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard Icon={Clock} label="যাচাই বাকি" value={toBnDigits(stats.pending)} tone={stats.pending ? 'text-amber-300' : 'text-white'} to="/admin/orders" />
        <StatCard Icon={GraduationCap} label="মোট শিক্ষার্থী (কিনেছেন)" value={toBnDigits(stats.buyers)} to="/admin/students" />
        <StatCard Icon={Wallet} label="মোট আয়" value={`৳${toBnDigits(stats.revenue.toLocaleString('en-IN'))}`} tone="text-emerald-400" />
        <StatCard Icon={TrendingUp} label="আজকের অর্ডার" value={toBnDigits(stats.todayOrders)} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
        <Panel
          title="যাচাইয়ের অপেক্ষায়"
          action={
            <Link to="/admin/orders" className="flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:underline">
              সব অর্ডার <ArrowRight className="size-4" />
            </Link>
          }
        >
          {pending.length === 0 ? (
            <EmptyState>🎉 কোনো অর্ডার যাচাইয়ের অপেক্ষায় নেই।</EmptyState>
          ) : (
            <ul className="space-y-4 p-4">
              {pending.map((order) => (
                <OrderCard key={order.id} order={order} onReview={review} />
              ))}
            </ul>
          )}
        </Panel>

        <div className="space-y-6">
          <Panel title="সেটআপ চেকলিস্ট">
            <ul className="divide-y divide-slate-800">
              <ChecklistItem done={withVideo === lessonCount && lessonCount > 0}>
                লেসনে ভিডিও যোগ হয়েছে: {toBnDigits(withVideo)}/{toBnDigits(lessonCount)}
                {withVideo < lessonCount && (
                  <Link to="/admin/content" className="ml-2 font-semibold text-emerald-400 hover:underline">
                    যোগ করুন →
                  </Link>
                )}
              </ChecklistItem>
              <ChecklistItem done={auth.autoconfirm} href={`${DASHBOARD}/auth/providers`}>
                ইমেইল কনফার্মেশন বন্ধ (শিক্ষার্থীরা সাথে সাথে অর্ডার দিতে পারবে)
              </ChecklistItem>
              <ChecklistItem done={auth.google} href={`${DASHBOARD}/auth/providers`}>
                Google দিয়ে লগইন চালু
              </ChecklistItem>
            </ul>
          </Panel>

          <Panel>
            <div className="flex items-center gap-4 p-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-slate-800/80">
                <UserPlus className="size-5 text-emerald-400" aria-hidden="true" />
              </span>
              <div>
                <p className="font-sans text-2xl font-extrabold text-white">{toBnDigits(stats.accounts)}</p>
                <p className="text-sm text-slate-400">মোট অ্যাকাউন্ট (কিনুক বা না কিনুক)</p>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
}

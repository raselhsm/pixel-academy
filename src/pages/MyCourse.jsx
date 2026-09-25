import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router';
import { ChevronLeft, ChevronRight, CirclePlay, Clock } from 'lucide-react';
import { useAuth } from '../auth/context';
import { supabase } from '../lib/supabase';
import { fetchMyOrder } from '../lib/orders';
import { fetchCourseContent } from '../lib/course';
import { toEmbed } from '../lib/video';
import { toBnDigits } from '../lib/format';
import { COURSE } from '../data/homeContent';
import Spinner from '../components/ui/Spinner';
import SetupNotice from '../components/ui/SetupNotice';
import OrderStatus from '../components/checkout/OrderStatus';

function Player({ lesson }) {
  const embed = toEmbed(lesson?.video_url);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-black">
      {!embed ? (
        <div className="flex size-full flex-col items-center justify-center gap-2 p-6 text-center text-slate-400">
          <Clock className="size-8 text-slate-500" aria-hidden="true" />
          এই লেসনের ভিডিও শীঘ্রই যোগ করা হবে।
        </div>
      ) : embed.type === 'video' ? (
        <video key={embed.src} src={embed.src} controls controlsList="nodownload" playsInline className="size-full" />
      ) : (
        <iframe
          key={embed.src}
          src={embed.src}
          title={lesson.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="size-full"
        />
      )}
    </div>
  );
}

function CoursePlayer({ modules }) {
  // One flat, ordered list for prev/next; each lesson remembers its module number.
  const lessons = useMemo(
    () => modules.flatMap((m, mi) => m.lessons.map((l) => ({ ...l, moduleNo: mi + 1 }))),
    [modules],
  );
  const [currentId, setCurrentId] = useState(lessons[0]?.id);
  const index = Math.max(0, lessons.findIndex((l) => l.id === currentId));
  const lesson = lessons[index];

  if (!lesson) {
    return <p className="px-4 py-16 text-center text-slate-400">কোর্সের লেসনগুলো শীঘ্রই যোগ করা হবে।</p>;
  }

  const go = (i) => {
    setCurrentId(lessons[i].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_360px] lg:py-8">
      <div>
        <Player lesson={lesson} />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-emerald-400">
              মডিউল {toBnDigits(lesson.moduleNo)} • লেসন {toBnDigits(index + 1)}/{toBnDigits(lessons.length)}
            </p>
            <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">{lesson.title}</h1>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => go(index - 1)}
              className="flex items-center gap-1 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 disabled:opacity-40"
            >
              <ChevronLeft className="size-4" /> আগের
            </button>
            <button
              type="button"
              disabled={index === lessons.length - 1}
              onClick={() => go(index + 1)}
              className="flex items-center gap-1 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-40"
            >
              পরের <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <aside className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto">
        <h2 className="border-b border-slate-800 px-5 py-4 font-bold text-white">{COURSE.title}</h2>
        {modules.map((mod, mi) => (
          <div key={mod.id} className="border-b border-slate-800/70 last:border-0">
            <p className="bg-slate-950/40 px-5 py-2.5 text-xs font-semibold text-slate-400">
              মডিউল {toBnDigits(mi + 1)}: {mod.title}
            </p>
            <ul>
              {mod.lessons.map((l) => {
                const active = l.id === lesson.id;
                return (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => setCurrentId(l.id)}
                      aria-current={active ? 'true' : undefined}
                      className={`flex w-full items-start gap-3 px-5 py-3 text-left text-sm transition ${
                        active ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <CirclePlay className={`mt-0.5 size-4 shrink-0 ${active ? 'text-emerald-400' : 'text-slate-500'}`} aria-hidden="true" />
                      <span className="flex-1">{l.title}</span>
                      {l.duration && <span className="shrink-0 font-sans text-xs tabular-nums text-slate-500">{l.duration}</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default function MyCourse() {
  const { user, loading } = useAuth();
  const [result, setResult] = useState(null);
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;
    (async () => {
      const order = await fetchMyOrder();
      const modules = order?.status === 'approved' ? await fetchCourseContent() : [];
      if (!cancelled) setResult({ userId, order, modules });
    })();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (!supabase) return <SetupNotice />;
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login?next=/my-course" replace />;
  if (result?.userId !== userId) return <Spinner label="আপনার কোর্স লোড হচ্ছে…" />;

  const { order, modules } = result;
  if (!order) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">আপনি এখনো কোর্সটি কেনেননি</h1>
        <p className="mt-3 text-sm text-slate-400">বিকাশ বা নগদে পেমেন্ট করে আজই শেখা শুরু করুন।</p>
        <Link to="/checkout" className="mt-6 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-400">
          কোর্সটি কিনুন →
        </Link>
      </div>
    );
  }
  if (order.status !== 'approved') return <OrderStatus order={order} />;

  return <CoursePlayer modules={modules} />;
}

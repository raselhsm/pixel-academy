import { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle2, ChevronDown, Lock, Play } from 'lucide-react';
import { useCourseOutline } from '../hooks/useCourseOutline';
import { moduleLength } from '../lib/outline';
import { toBnDigits } from '../lib/format';
import { useOpenFreePreview } from '../lib/freePreview';
import { FREE_PREVIEW, MODULE_OUTCOMES, PRICE, REQUIREMENTS } from '../data/homeContent';

const pad = (n) => String(n).padStart(2, '0');

function ModuleCard({ module, index, firstLessonNo, open, onToggle, onFreePreview }) {
  const outcome = MODULE_OUTCOMES[index];
  const panelId = `module-${index}`;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-slate-900/80 shadow-lg transition ${
        open ? 'border-emerald-500/40' : 'border-slate-800 hover:border-slate-700'
      }`}
    >
      <button type="button" onClick={onToggle} aria-expanded={open} aria-controls={panelId} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6">
        <span className="flex items-center gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/20 font-sans text-xs font-extrabold text-emerald-400">
            {pad(index + 1)}
          </span>
          <span>
            <span className="block text-base font-bold text-white sm:text-lg">
              Module {index + 1}: {module.title}
            </span>
            <span className="text-xs text-slate-400">
              {toBnDigits(module.lessons.length)}টি লেসন • {moduleLength(module)}
            </span>
          </span>
        </span>
        <span className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
        </span>
      </button>

      {open && (
        <div id={panelId} className="px-5 pb-5 sm:px-6 sm:pb-6">
          {outcome && (
            <p className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3 text-xs leading-relaxed text-emerald-300">
              🎯 <strong className="font-bold text-white">মডিউল আউটকাম:</strong> {outcome}
            </p>
          )}
          <ul className="divide-y divide-slate-800/80 text-sm">
            {module.lessons.map((lesson, i) => {
              const free = lesson.title === FREE_PREVIEW.lessonTitle;
              return (
                <li key={lesson.title} className="flex items-center justify-between gap-3 py-3">
                  <span className="flex min-w-0 items-center gap-3">
                    {free ? (
                      <Play className="size-4 shrink-0 fill-emerald-400 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Lock className="size-4 shrink-0 text-slate-500" aria-label="কেনার পর দেখা যাবে" />
                    )}
                    <span className={free ? 'font-medium text-white' : 'text-slate-300'}>
                      <span className="font-sans">{pad(firstLessonNo + i)}.</span> {lesson.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    {free && (
                      <button
                        type="button"
                        onClick={onFreePreview}
                        className="rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-0.5 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500 hover:text-slate-950"
                      >
                        ▶ ফ্রি ক্লাস
                      </button>
                    )}
                    <span className="font-sans text-xs tabular-nums text-slate-500">{lesson.duration}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const { modules, lessonsLabel, durationLabel } = useCourseOutline();
  const openFreePreview = useOpenFreePreview();
  const [openModules, setOpenModules] = useState(() => new Set([0]));

  const toggle = (i) =>
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  // Lessons are numbered straight through the course (01–13, …).
  const firstLessonNos = modules.reduce((acc, m, i) => [...acc, i === 0 ? 1 : acc[i - 1] + modules[i - 1].lessons.length], []);

  return (
    <section id="curriculum" className="mx-auto max-w-4xl scroll-mt-20 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
          📚 পূর্ণাঙ্গ সিলেবাস • {lessonsLabel} • {durationLabel}
        </span>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">প্র্যাকটিক্যাল কারিকুলাম — জিরো থেকে মার্কেটপ্লেসে কাজ পর্যন্ত</h2>
        <p className="text-base leading-relaxed text-slate-300">
          কোনো অপ্রয়োজনীয় থিওরি নয় — লাইটরুম ইনস্টল থেকে শুরু করে রিয়েল ওয়েডিং প্রজেক্ট আর ফাইভারে গিগ পাবলিশ পর্যন্ত ধাপে ধাপে:
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {modules.map((module, i) => (
          <ModuleCard
            key={module.title}
            module={module}
            index={i}
            firstLessonNo={firstLessonNos[i]}
            open={openModules.has(i)}
            onToggle={() => toggle(i)}
            onFreePreview={openFreePreview}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <Link
          to="/checkout"
          className="flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 px-8 text-lg font-extrabold text-slate-950 shadow-xl shadow-emerald-500/25 transition hover:brightness-110"
        >
          সব লেসন পেতে ভর্তি হন — {PRICE.offer}
        </Link>
        <button type="button" onClick={openFreePreview} className="text-sm font-semibold text-emerald-400 hover:underline">
          আগে একটা ক্লাস ফ্রি দেখে নিন ▶
        </button>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6">
        <h3 className="font-bold text-white">শুরু করতে যা লাগবে</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {REQUIREMENTS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

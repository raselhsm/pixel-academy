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
      className={`overflow-hidden rounded-2xl border transition duration-200 ${
        open
          ? 'border-[#0284C7] bg-[#F0F9FF] shadow-studio-md'
          : 'border-slate-200/80 bg-white hover:border-slate-300 shadow-studio'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span className="flex items-center gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-100 font-sans text-xs font-extrabold text-[#0284C7]">
            {pad(index + 1)}
          </span>
          <span>
            <span className="block text-base font-bold text-[#0F172A] sm:text-lg">
              Module {index + 1}: {module.title}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {toBnDigits(module.lessons.length)}টি লেসন • {moduleLength(module)}
            </span>
          </span>
        </span>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
            open ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
          }`}
        >
          <ChevronDown className="size-4" strokeWidth={2.5} aria-hidden="true" />
        </span>
      </button>

      {open && (
        <div id={panelId} className="border-t border-sky-100/80 bg-white/70 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
          {outcome && (
            <p className="mb-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
              🎯 <strong className="font-bold text-slate-900">মডিউল আউটকাম:</strong> {outcome}
            </p>
          )}
          <ul className="divide-y divide-slate-100 text-sm">
            {module.lessons.map((lesson, i) => {
              const free = lesson.title === FREE_PREVIEW.lessonTitle;
              return (
                <li key={lesson.title} className="flex items-center justify-between gap-3 py-3">
                  <span className="flex min-w-0 items-center gap-3">
                    {free ? (
                      <Play className="size-4 shrink-0 fill-[#0284C7] text-[#0284C7]" aria-hidden="true" />
                    ) : (
                      <Lock className="size-4 shrink-0 text-slate-400" aria-label="কেনার পর দেখা যাবে" />
                    )}
                    <span className={free ? 'font-semibold text-slate-900' : 'text-slate-700'}>
                      <span className="font-sans font-medium text-slate-400">{pad(firstLessonNo + i)}.</span> {lesson.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    {free && (
                      <button
                        type="button"
                        onClick={onFreePreview}
                        className="rounded-full border border-sky-200 bg-sky-50 px-3 py-0.5 text-xs font-bold text-[#0284C7] transition hover:bg-[#0284C7] hover:text-white"
                      >
                        ▶ ফ্রি ক্লাস
                      </button>
                    )}
                    <span className="font-sans text-xs font-medium tabular-nums text-slate-500">{lesson.duration}</span>
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
    <section id="curriculum" className="mx-auto max-w-4xl scroll-mt-20 border-t border-slate-200/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700">
          📚 পূর্ণাঙ্গ সিলেবাস • {lessonsLabel} • {durationLabel}
        </span>
        <h2 className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl">প্র্যাকটিক্যাল কারিকুলাম — জিরো থেকে মার্কেটপ্লেসে কাজ পর্যন্ত</h2>
        <p className="text-base leading-relaxed text-slate-600">
          কোনো অপ্রয়োজনীয় থিওরি নয় — লাইটরুম ইনস্টল থেকে শুরু করে রিয়েল ওয়েডিং প্রজেক্ট আর ফাইভারে গিগ পাবলিশ পর্যন্ত ধাপে ধাপে:
        </p>
      </div>

      <div className="mt-10 space-y-3.5">
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

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <Link
          to="/checkout"
          className="flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-slate-900 px-8 text-lg font-bold text-white shadow-md shadow-slate-900/15 transition hover:bg-slate-800 active:scale-[0.98]"
        >
          সব লেসন পেতে ভর্তি হন — {PRICE.offer}
        </Link>
        <button type="button" onClick={openFreePreview} className="text-sm font-semibold text-[#0284C7] hover:underline">
          আগে একটা ক্লাস ফ্রি দেখে নিন ▶
        </button>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-studio">
        <h3 className="font-bold text-[#0F172A]">শুরু করতে যা লাগবে</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {REQUIREMENTS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

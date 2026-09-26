import { CheckCircle2, CirclePlay } from 'lucide-react';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import { useCourseOutline } from '../hooks/useCourseOutline';
import { toBnDigits } from '../lib/format';
import { useOpenFreePreview } from '../lib/freePreview';
import { FREE_PREVIEW, REQUIREMENTS } from '../data/homeContent';

export default function Curriculum() {
  const { modules, lessonsLabel, durationLabel } = useCourseOutline();
  const openFreePreview = useOpenFreePreview();

  return (
    <section id="curriculum" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Curriculum"
        title="পূর্ণাঙ্গ কোর্স কারিকুলাম"
        subtitle={`লাইটরুম ইনস্টল থেকে ফাইভারে গিগ পাবলিশ পর্যন্ত • ${lessonsLabel} • ${durationLabel}`}
      />
      <Accordion>
        {modules.map((module, i) => (
          <AccordionItem
            key={module.title}
            label={`Module ${String(i + 1).padStart(2, '0')}`}
            title={`${module.title} (${toBnDigits(module.lessons.length)}টি লেসন)`}
            defaultOpen={i === 0}
          >
            <ul className="divide-y divide-slate-800/60">
              {module.lessons.map((lesson) => (
                <li key={lesson.title} className="flex items-center justify-between gap-4 py-2.5">
                  <span className="flex items-center gap-2.5 text-slate-300">
                    <CirclePlay className="size-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    {lesson.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    {lesson.title === FREE_PREVIEW.lessonTitle && (
                      <button
                        type="button"
                        onClick={openFreePreview}
                        className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500/25"
                      >
                        ▶ ফ্রি দেখুন
                      </button>
                    )}
                    <span className="font-sans text-xs tabular-nums text-slate-500">{lesson.duration}</span>
                  </span>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
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

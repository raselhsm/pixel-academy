import { CirclePlay } from 'lucide-react';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import { COURSE, CURRICULUM } from '../data/homeContent';
import { toBnDigits } from '../lib/format';

export default function Curriculum() {
  return (
    <section id="curriculum" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Curriculum"
        title="পূর্ণাঙ্গ কোর্স কারিকুলাম"
        subtitle={`লাইটরুম ইনস্টল থেকে ফাইভারে গিগ পাবলিশ পর্যন্ত • ${COURSE.lessons} • ${COURSE.duration}`}
      />
      <Accordion>
        {CURRICULUM.map((module, i) => (
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
                  <span className="shrink-0 font-sans text-xs tabular-nums text-slate-500">{lesson.duration}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

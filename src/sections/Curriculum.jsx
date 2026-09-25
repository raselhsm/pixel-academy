import Accordion, { AccordionItem } from '../components/ui/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import { CURRICULUM } from '../data/homeContent';

export default function Curriculum() {
  return (
    <section id="curriculum" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Curriculum"
        title="পূর্ণাঙ্গ কোর্স কারিকুলাম"
        subtitle="বেসিক লাইটরুম ইন্টারফেস থেকে আন্তর্জাতিক মার্কেটপ্লেসের গাইডলাইন"
      />
      <Accordion>
        {CURRICULUM.map((module, i) => (
          <AccordionItem
            key={module.title}
            label={`Module ${String(i + 1).padStart(2, '0')}`}
            title={module.title}
            defaultOpen={i === 0}
          >
            <ul className="list-disc space-y-2.5 pl-5 marker:text-emerald-500">
              {module.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

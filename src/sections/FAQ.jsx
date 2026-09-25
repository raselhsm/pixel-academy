import Accordion, { AccordionItem } from '../components/ui/Accordion';
import SectionHeading from '../components/ui/SectionHeading';
import { FAQS } from '../data/homeContent';

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="FAQ" title="সাধারণ কিছু জিজ্ঞাসা" />
      <Accordion>
        {FAQS.map(({ question, answer }) => (
          <AccordionItem key={question} title={question}>
            <p>{answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

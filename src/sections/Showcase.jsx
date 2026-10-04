import { useState } from 'react';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import SectionTitle from '../components/ui/SectionTitle';
import { BEFORE_AFTER } from '../data/homeContent';

export default function Showcase() {
  const [active, setActive] = useState(0);
  const item = BEFORE_AFTER[active];

  return (
    <section id="showcase" className="scroll-mt-28 border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="📸 বিফোর / আফটার"
          title="এক নজরে লাইটরুমের পাওয়ার দেখুন"
          subtitle="কোর্সে দেখানো টেকনিক ব্যবহার করে যেভাবে সাধারণ ছবি হাই-এন্ড প্রফেশনাল লুকে পরিবর্তিত হয়।"
        />

        <div role="tablist" aria-label="এডিটিং স্টাইল" className="mx-auto mb-6 grid max-w-2xl grid-cols-3 gap-1.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-1.5">
          {BEFORE_AFTER.map((tab, i) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`ba-tab-${tab.key}`}
              aria-selected={i === active}
              aria-controls="ba-panel"
              onClick={() => setActive(i)}
              className={`rounded-xl px-2 py-2.5 text-xs font-bold transition sm:text-sm ${
                i === active ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-600/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div id="ba-panel" role="tabpanel" aria-labelledby={`ba-tab-${item.key}`}>
          {/* key remounts the slider so each tab starts at the middle. */}
          <BeforeAfterSlider key={item.key} image={item.image} beforeImage={item.beforeImage} alt={item.title} className="aspect-[4/3] w-full sm:aspect-[16/9]" />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.text}</p>
            <p className="mt-2 text-xs text-slate-500">← স্লাইডার টেনে আগে ও পরে তুলনা করুন →</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/coursesData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#07080c] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Everything you need to know about our Lightroom courses, downloads, and community.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen ? 'bg-[#0d1018] border-emerald-500/30' : 'bg-[#090b10] border-white/5 hover:border-slate-800'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-heading">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-colors ${
                    isOpen ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'text-slate-500 border-transparent'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Have a specific question not covered here?{' '}
          <a href="mailto:support@pixelacademy.photo" className="text-emerald-400 hover:underline font-semibold">
            Chat with Julian & our student support team →
          </a>
        </div>

      </div>
    </section>
  );
}

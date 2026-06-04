'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {title && (
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            {title}
          </h2>
        )}
        <div className="space-y-4 max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-left text-gray-900">
                  {item.question}
                </span>
                <span className="ml-4 text-accent font-bold text-lg flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqItems: FaqItem[];
}

export default function Faq({ faqItems }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div 
          key={index} 
          className="border border-purple-500/20 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 dark:text-white hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-semibold m-0">{item.question}</h3>
            <ChevronDownIcon 
              className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[60vh] md:max-h-96 overflow-y-auto' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 text-gray-700 dark:text-gray-100 border-t border-purple-500/10">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 
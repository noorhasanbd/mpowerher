'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Clock, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const modules = [
  { id: 'anatomy', time: '15 mins', tag: 'Basics' },
  { id: 'hygiene', time: '20 mins', tag: 'Health' },
  { id: 'nutrition', time: '10 mins', tag: 'Wellness' },
];

export default function ModuleShowcase() {
  const t = useTranslations('home.modules');

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-[#C01C5C] px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Learning
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            {t('eyebrow')}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                  <span className="bg-pink-50 text-[#C01C5C] px-2.5 py-1 rounded-md font-semibold">
                    {mod.tag}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {mod.time}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  {t(`items.${mod.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`items.${mod.id}.description`)}
                </p>
              </div>

              <button className="w-full py-2.5 px-4 bg-pink-50 hover:bg-[#C01C5C] text-[#C01C5C] hover:text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 group">
                {t('action')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
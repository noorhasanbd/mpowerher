'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

const testimonialKeys = ['student', 'teacher', 'volunteer'];

export default function ImpactTestimonials() {
  const t = useTranslations('home.testimonials');

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            {t('eyebrow')}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#C01C5C]/40" />
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{t(`items.${key}.quote`)}"
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-heading font-bold text-gray-900 text-base">
                  {t(`items.${key}.author`)}
                </h4>
                <p className="text-xs text-gray-500">
                  {t(`items.${key}.role`)} • {t(`items.${key}.location`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
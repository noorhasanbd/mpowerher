'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Package, Shield, Calendar, HeartHandshake, Sparkles } from 'lucide-react';

const kitItems = [
  { id: 'pads', icon: Shield },
  { id: 'calendar', icon: Calendar },
  { id: 'guide', icon: Package },
  { id: 'hygiene', icon: HeartHandshake },
];

export default function KitContentsSection() {
  const t = useTranslations('home.kit');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-[#C01C5C] px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Physical Support
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            {t('eyebrow')}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#FDF2F8]/40 border border-pink-100 rounded-2xl p-6 space-y-3 hover:border-pink-300 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-[#C01C5C]/10 text-[#C01C5C] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {t(`items.${item.id}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
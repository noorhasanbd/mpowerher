'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, Users, ShieldCheck } from 'lucide-react';

const featuresList = [
  {
    id: 'localizedCurriculum',
    icon: BookOpen,
  },
  {
    id: 'communitySupport',
    icon: Users,
  },
  {
    id: 'privateSecure',
    icon: ShieldCheck,
  },
];

export default function CoreFeatures() {
  const t = useTranslations('home');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
            {t('features.eyebrow')}
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base">
            {t('features.description')}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-8 rounded-2xl bg-[#FDF2F8]/60 border border-pink-100 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-[#C01C5C] text-white flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  {t(`features.${feature.id}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`features.${feature.id}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
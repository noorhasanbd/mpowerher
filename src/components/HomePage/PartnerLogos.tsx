'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Building2 } from 'lucide-react';

export default function PartnerLogos() {
  const t = useTranslations('home.partners');

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {t('eyebrow')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-gray-700 text-lg">
            <Building2 className="w-5 h-5 text-[#C01C5C]" /> School Network A
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-700 text-lg">
            <Building2 className="w-5 h-5 text-[#C01C5C]" /> Global Health NGO
          </div>
          <div className="flex items-center gap-2 font-bold text-gray-700 text-lg">
            <Building2 className="w-5 h-5 text-[#C01C5C]" /> Youth Foundation
          </div>
        </div>
      </div>
    </section>
  );
}
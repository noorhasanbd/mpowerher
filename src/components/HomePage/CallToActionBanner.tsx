'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

export default function CallToActionBanner() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-16 bg-[#FDF2F8] border-y border-pink-100">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <Heart className="w-10 h-10 text-[#C01C5C] mx-auto fill-[#C01C5C]" />
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900">
          {t('title')}
        </h2>
        <p className="font-sans text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          {t('description')}
        </p>
        <div className="pt-2">
          <Link
            href="/register"
            className="btn font-heading bg-[#C01C5C] hover:bg-[#a0164c] text-white rounded-xl px-10 h-12 border-none shadow-md inline-flex items-center justify-center"
          >
            {t('button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
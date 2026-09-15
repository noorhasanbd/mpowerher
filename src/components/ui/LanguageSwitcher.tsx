'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({
  showIcon = true,
  className = '',
}: {
  showIcon?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  const rawPathname = usePathname();
  const router = useRouter();
  const [isPendingLocale, startTransition] = useTransition();

  const handleLanguageSwitch = (newLocale: string) => {
    if (newLocale === locale) return;

    // Remove any leading locale prefix (e.g. /bn or /en) if present
    const cleanPathname = rawPathname.replace(/^\/(en|bn)/, '') || '/';

    startTransition(() => {
      router.replace(cleanPathname, { locale: newLocale });
    });
  };

  return (
    <div className={`flex items-center bg-slate-100/80 p-1 rounded-2xl border border-pink-100 shadow-inner ${className}`}>
      {showIcon && <Globe className="w-4 h-4 ml-2 mr-1 text-slate-500" />}
      <button
        type="button"
        disabled={isPendingLocale}
        onClick={() => handleLanguageSwitch('en')}
        className={`px-3 py-1 text-xs font-bold rounded-xl transition-all duration-200 ${
          locale === 'en' ? 'bg-[#C01C5C] text-white shadow-md scale-105' : 'text-slate-600 hover:text-[#C01C5C]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        disabled={isPendingLocale}
        onClick={() => handleLanguageSwitch('bn')}
        className={`px-3 py-1 text-xs font-bold rounded-xl transition-all duration-200 ${
          locale === 'bn' ? 'bg-[#C01C5C] text-white shadow-md scale-105' : 'text-slate-600 hover:text-[#C01C5C]'
        }`}
      >
        বাংলা
      </button>
    </div>
  );
}
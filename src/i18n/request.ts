import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Await the requestLocale param
  let locale = await requestLocale;

  // 2. Validate and fallback to default locale if undefined/invalid
  if (!locale || !['en', 'bn'].includes(locale)) {
    locale = 'en';
  }

  return {
    locale, // 👈 Required in the returned object
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
import { getRequestConfig } from 'next-intl/server';
import fs from 'fs';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !['en', 'bn'].includes(locale)) {
    locale = 'en';
  }

  // 1. Resolve absolute path to project root / messages / [locale]
  const messagesDir = path.join(process.cwd(), 'messages', locale);
  const messages: Record<string, any> = {};

  // 2. Read all json files and map them to their filename key
  if (fs.existsSync(messagesDir)) {
    const filenames = fs.readdirSync(messagesDir);

    for (const filename of filenames) {
      if (filename.endsWith('.json')) {
        const namespace = filename.replace('.json', '');
        
        // Dynamically import using template string
        const fileContent = await import(`../../messages/${locale}/${filename}`);
        messages[namespace] = fileContent.default;
      }
    }
  }

  return {
    locale,
    messages,
  };
});
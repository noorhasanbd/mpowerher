import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!["en", "bn"].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    // Wrap page content inside a div instead of rendering a second html/body tag
    <div
      lang={locale}
      data-theme="mpowerher"
      className={locale === "bn" ? "font-bengali" : "font-sans"}
    >
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
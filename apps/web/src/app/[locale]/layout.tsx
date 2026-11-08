import type { Metadata, Viewport } from 'next';
import { Cairo, Figtree } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/providers';
import {
  DEFAULT_LOCALE,
  getDirection,
  isLocale,
  type Locale,
} from '@/lib/i18n/locale';
import { getDictionary } from '@/lib/i18n/dictionary';
import '../globals.css';

const heading = Figtree({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const arabic = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#061525' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const activeLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const dictionary = getDictionary(activeLocale);

  return {
    metadataBase: new URL(process.env.WEB_URL ?? 'http://localhost:3000'),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: '/',
      languages: {
        ar: '/?lang=ar',
        en: '/?lang=en',
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      locale: activeLocale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${heading.variable} ${arabic.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

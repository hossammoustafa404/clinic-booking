import type { Metadata, Viewport } from 'next';
import { Figtree, IBM_Plex_Sans_Arabic } from 'next/font/google';
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

const arabic = IBM_Plex_Sans_Arabic({
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
    metadataBase: new URL(process.env.ADMIN_URL ?? 'http://localhost:3001'),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: '/',
      languages: {
        ar: '/?lang=ar',
        en: '/?lang=en',
      },
    },
    robots: { index: false, follow: false },
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

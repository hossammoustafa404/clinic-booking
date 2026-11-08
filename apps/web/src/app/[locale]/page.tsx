import { notFound } from 'next/navigation';
import { LandingView } from '@/features/landing';
import { isLocale } from '@/lib/i18n/locale';

export const dynamic = 'force-dynamic';

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <LandingView locale={locale} />;
}

import { notFound } from 'next/navigation';
import { ConsoleView } from '@/features/console';
import { isLocale } from '@/lib/i18n/locale';

export const dynamic = 'force-dynamic';

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ConsoleView locale={locale} />;
}

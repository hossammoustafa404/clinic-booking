import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';

interface LanguageSwitcherProps {
  locale: Locale;
  dictionary: WebDictionary;
  className?: string;
}

export function LanguageSwitcher({
  locale,
  dictionary,
  className,
}: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label={dictionary.common.languageLabel}
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-card p-0.5 text-xs font-semibold',
        className,
      )}
    >
      <Link
        href="?lang=ar"
        hrefLang="ar"
        lang="ar"
        aria-current={locale === 'ar' ? 'true' : undefined}
        className={cn(
          'rounded-sm px-2.5 py-1.5 transition-colors',
          locale === 'ar'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {dictionary.common.arabic}
      </Link>
      <Link
        href="?lang=en"
        hrefLang="en"
        lang="en"
        aria-current={locale === 'en' ? 'true' : undefined}
        className={cn(
          'rounded-sm px-2.5 py-1.5 transition-colors',
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        {dictionary.common.english}
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@saas-kit/components/ui/button';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

interface SiteHeaderProps {
  locale: Locale;
  dictionary: WebDictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50"
      >
        {dictionary.common.skipToContent}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-base font-bold tracking-tight text-foreground"
        >
          {dictionary.common.brandName}
        </Link>

        <nav
          aria-label={dictionary.nav.home}
          className="ms-auto hidden items-center gap-0.5 md:flex"
        >
          <Link
            href="#how-it-works"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {dictionary.nav.howItWorks}
          </Link>
          <Link
            href="#pricing"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {dictionary.nav.pricing}
          </Link>
          <Link
            href="/sign-in"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {dictionary.nav.signIn}
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <ThemeToggle dictionary={dictionary} />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/sign-up">{dictionary.nav.startFree}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

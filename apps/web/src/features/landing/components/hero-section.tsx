import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@saas-kit/components/ui/button';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';
import { BookingPreview } from './booking-preview';

interface HeroSectionProps {
  locale: Locale;
  dictionary: WebDictionary;
}

export function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const isArabic = locale === 'ar';

  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 start-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[min(100dvh,44rem)] w-full max-w-6xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28 lg:pb-20">
        <div>
          <p className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {dictionary.common.brandName}
          </p>

          <h1 className="mt-5 max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2.15rem] lg:leading-snug">
            {dictionary.hero.title}{' '}
            <span className="text-primary">{dictionary.hero.highlight}</span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dictionary.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-11 px-6">
              <Link href="/sign-up">
                {dictionary.hero.primaryCta}
                <ArrowRight
                  className="size-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-6">
              <Link href="#pricing">{dictionary.hero.secondaryCta}</Link>
            </Button>
          </div>

          <p className="mt-6 max-w-lg text-sm text-muted-foreground">
            {dictionary.hero.bullets.join(isArabic ? ' · ' : ' · ')}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ms-auto">
          <BookingPreview dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
}

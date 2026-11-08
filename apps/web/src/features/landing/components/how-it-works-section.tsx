import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@saas-kit/components/ui/button';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface HowItWorksSectionProps {
  dictionary: WebDictionary;
}

export function HowItWorksSection({ dictionary }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.howItWorks.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {dictionary.howItWorks.description}
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute top-8 start-[16.5%] end-[16.5%] hidden h-px bg-border lg:block"
          />

          {dictionary.howItWorks.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < dictionary.howItWorks.steps.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="absolute start-5 top-10 bottom-[-1.5rem] w-px bg-border lg:hidden"
                />
              ) : null}

              <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-none">
                <span className="relative z-10 grid size-10 place-items-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/sign-up">
              {dictionary.nav.startFree}
              <ArrowRight
                className="size-4 rtl:rotate-180"
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

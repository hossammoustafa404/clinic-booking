import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@saas-kit/components/ui/button';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface ClosingSectionProps {
  dictionary: WebDictionary;
}

export function ClosingSection({ dictionary }: ClosingSectionProps) {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.closing.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {dictionary.closing.description}
          </p>
        </div>
        <Button asChild size="lg" className="h-11 shrink-0 px-6">
          <Link href="/sign-up">
            {dictionary.closing.cta}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

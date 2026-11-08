import Link from 'next/link';
import { Check } from 'lucide-react';
import { Badge } from '@saas-kit/components/ui/badge';
import { Button } from '@saas-kit/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@saas-kit/components/ui/card';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';
import { cn } from '@/lib/utils';

interface PricingSectionProps {
  locale: Locale;
  dictionary: WebDictionary;
}

export function PricingSection({ locale, dictionary }: PricingSectionProps) {
  const currency = locale === 'ar' ? 'ج.م' : 'EGP';

  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.plans.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {dictionary.plans.description}
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {dictionary.plans.items.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'relative h-full shadow-none',
                plan.highlighted
                  ? 'border-primary shadow-[var(--shadow-soft)]'
                  : 'border-border',
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  {plan.highlighted ? (
                    <Badge>{dictionary.plans.popular}</Badge>
                  ) : null}
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4 flex items-end gap-2">
                  <span className="font-heading text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm font-medium text-muted-foreground">
                    {currency} / {dictionary.plans.perMonth}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  asChild
                  variant={plan.highlighted ? 'default' : 'outline'}
                  className="w-full"
                >
                  <Link href="/sign-up">{dictionary.plans.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          {dictionary.plans.vatNote}
        </p>
      </div>
    </section>
  );
}

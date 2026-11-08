import {
  CalendarCheck2,
  Clock3,
  Globe2,
  Languages,
  ReceiptText,
  UsersRound,
} from 'lucide-react';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

const featureIcons = [
  CalendarCheck2,
  Clock3,
  UsersRound,
  Languages,
  Globe2,
  ReceiptText,
];

interface FeaturesSectionProps {
  dictionary: WebDictionary;
}

export function FeaturesSection({ dictionary }: FeaturesSectionProps) {
  return (
    <section id="features" className="bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.features.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {dictionary.features.description}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.features.items.map((feature, index) => {
            const Icon = featureIcons[index] ?? CalendarCheck2;

            return (
              <li
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 shadow-none"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

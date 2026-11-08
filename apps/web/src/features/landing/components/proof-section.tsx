import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface ProofSectionProps {
  dictionary: WebDictionary;
}

export function ProofSection({ dictionary }: ProofSectionProps) {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 md:gap-10">
        {dictionary.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-bold tracking-tight text-primary">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

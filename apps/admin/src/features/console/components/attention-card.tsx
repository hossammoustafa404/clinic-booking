import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@saas-kit/components/ui/card';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface AttentionCardProps {
  dictionary: AdminDictionary;
}

export function AttentionCard({ dictionary }: AttentionCardProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <h2 className="text-sm leading-none font-semibold">
          {dictionary.attention.title}
        </h2>
        <CardDescription>{dictionary.attention.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {dictionary.attention.items.map((item) => (
          <Link
            key={item}
            href="/"
            className="flex items-center justify-between rounded-md border border-border px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted"
          >
            {item}
            <ArrowUpRight
              className="size-3.5 text-muted-foreground"
              aria-hidden="true"
            />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

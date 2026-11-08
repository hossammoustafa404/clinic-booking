import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@saas-kit/components/ui/card';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface QuickActionsProps {
  dictionary: AdminDictionary;
}

export function QuickActions({ dictionary }: QuickActionsProps) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle className="text-sm">
          {dictionary.quickActions.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {dictionary.quickActions.items.map((item) => (
            <li key={item}>
              <Link
                href="/"
                className="flex items-center justify-between rounded-md border border-border px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted"
              >
                {item}
                <ArrowRight
                  className="size-3.5 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

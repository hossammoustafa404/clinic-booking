import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  CalendarCheck2,
  CreditCard,
  UserX,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@saas-kit/components/ui/card';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

const statIcons = [Building2, CalendarCheck2, CreditCard, UserX];

interface StatGridProps {
  dictionary: AdminDictionary;
}

export function StatGrid({ dictionary }: StatGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {dictionary.dashboard.stats.map((stat, index) => {
        const Icon = statIcons[index] ?? Building2;
        const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;

        return (
          <Card key={stat.label} className="shadow-none">
            <CardHeader className="flex flex-row items-center justify-between gap-3 pb-2">
              <CardTitle className="text-xs font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
            </CardHeader>
            <CardContent>
              <p className="font-heading text-2xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                <TrendIcon className="size-3 text-primary" aria-hidden="true" />
                <span className="text-foreground">{stat.change}</span>
                {dictionary.dashboard.last30Days}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

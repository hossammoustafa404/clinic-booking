import Link from 'next/link';
import { CalendarClock, Clock3 } from 'lucide-react';
import { Button } from '@saas-kit/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@saas-kit/components/ui/card';
import { Separator } from '@saas-kit/components/ui/separator';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';

interface ScheduleCardProps {
  locale: Locale;
  dictionary: AdminDictionary;
}

const scheduleRows = {
  ar: [
    { patient: 'نورا أحمد', clinic: 'عيادة النور', time: '10:30' },
    { patient: 'يوسف سمير', clinic: 'مركز الشفاء', time: '11:15' },
    { patient: 'مريم خالد', clinic: 'عيادة النور', time: '12:00' },
  ],
  en: [
    { patient: 'Noura Ahmed', clinic: 'Al Noor Clinic', time: '10:30' },
    { patient: 'Youssef Samir', clinic: 'Al Shifa Center', time: '11:15' },
    { patient: 'Mariam Khaled', clinic: 'Al Noor Clinic', time: '12:00' },
  ],
} as const;

export function ScheduleCard({ locale, dictionary }: ScheduleCardProps) {
  const rows = scheduleRows[locale];

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div>
          <CardTitle className="text-sm">
            {dictionary.dashboard.scheduleTitle}
          </CardTitle>
          <CardDescription className="mt-1">
            {dictionary.dashboard.scheduleDescription}
          </CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/">{dictionary.dashboard.viewCalendar}</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-0 px-0">
        {rows.map((row, index) => (
          <div key={`${row.patient}-${row.time}`}>
            {index > 0 ? <Separator /> : null}
            <div className="flex items-center gap-3 px-6 py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                <CalendarClock className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate text-xs font-semibold">
                  {row.patient}
                </span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {row.clinic}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                <Clock3 className="size-3" aria-hidden="true" />
                {row.time}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

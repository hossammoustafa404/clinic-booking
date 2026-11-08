import Link from 'next/link';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Badge } from '@saas-kit/components/ui/badge';
import { Button } from '@saas-kit/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@saas-kit/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@saas-kit/components/ui/table';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';

interface ClinicsTableProps {
  locale: Locale;
  dictionary: AdminDictionary;
}

const clinicRows = {
  ar: [
    {
      name: 'عيادة النور',
      plan: 'Starter',
      appointments: '412',
      status: 'active',
    },
    {
      name: 'مركز الشفاء',
      plan: 'Pro',
      appointments: '1,208',
      status: 'active',
    },
    { name: 'عيادة الأمل', plan: 'Free', appointments: '38', status: 'trial' },
    {
      name: 'عيادة الحياة',
      plan: 'Starter',
      appointments: '0',
      status: 'paused',
    },
  ],
  en: [
    {
      name: 'Al Noor Clinic',
      plan: 'Starter',
      appointments: '412',
      status: 'active',
    },
    {
      name: 'Al Shifa Center',
      plan: 'Pro',
      appointments: '1,208',
      status: 'active',
    },
    {
      name: 'Al Amal Clinic',
      plan: 'Free',
      appointments: '38',
      status: 'trial',
    },
    {
      name: 'Al Hayah Clinic',
      plan: 'Starter',
      appointments: '0',
      status: 'paused',
    },
  ],
} as const;

export function ClinicsTable({ locale, dictionary }: ClinicsTableProps) {
  const rows = clinicRows[locale];
  const statusLabels = {
    active: dictionary.dashboard.statusActive,
    trial: dictionary.dashboard.statusTrial,
    paused: dictionary.dashboard.statusPaused,
  };

  return (
    <Card className="shadow-none">
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div>
          <CardTitle className="text-sm">
            {dictionary.dashboard.clinicsTitle}
          </CardTitle>
          <CardDescription className="mt-1">
            {dictionary.dashboard.clinicsDescription}
          </CardDescription>
        </div>
        <Button type="button" size="sm">
          <Plus className="size-3.5" aria-hidden="true" />
          {dictionary.dashboard.addClinic}
        </Button>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{dictionary.dashboard.tableClinic}</TableHead>
              <TableHead>{dictionary.dashboard.tablePlan}</TableHead>
              <TableHead>{dictionary.dashboard.tableAppointments}</TableHead>
              <TableHead>{dictionary.dashboard.tableStatus}</TableHead>
              <TableHead>
                <span className="sr-only">{dictionary.common.viewAll}</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.plan}</TableCell>
                <TableCell>{row.appointments}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      row.status === 'paused' ? 'destructive' : 'secondary'
                    }
                  >
                    {statusLabels[row.status]}
                  </Badge>
                </TableCell>
                <TableCell className="text-end">
                  <Button asChild variant="ghost" size="icon-sm">
                    <Link href="/" aria-label={row.name}>
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

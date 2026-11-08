import {
  SidebarInset,
  SidebarProvider,
} from '@saas-kit/components/ui/sidebar';
import { getDictionary } from '@/lib/i18n/dictionary';
import type { Locale } from '@/lib/i18n/locale';
import {
  AttentionCard,
  ClinicsTable,
  ConsoleSidebar,
  ConsoleTopbar,
  QuickActions,
  ScheduleCard,
  StatGrid,
} from '../components';
import { getHealth } from '../services';

interface ConsoleViewProps {
  locale: Locale;
}

export async function ConsoleView({ locale }: ConsoleViewProps) {
  const dictionary = getDictionary(locale);
  // Shared health contract is consumed on the server; status is not shown in the UI.
  await getHealth();

  return (
    <SidebarProvider>
      <ConsoleSidebar dictionary={dictionary} />

      <SidebarInset>
        <a
          href="#main"
          className="sr-only rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50"
        >
          {dictionary.common.skipToContent}
        </a>

        <ConsoleTopbar locale={locale} dictionary={dictionary} />

        <div id="main" className="flex-1 p-4 sm:p-6">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-1">
              <h1 className="font-heading text-2xl font-semibold tracking-tight">
                {dictionary.dashboard.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {dictionary.dashboard.description}
              </p>
            </div>

            <div className="mt-6">
              <StatGrid dictionary={dictionary} />
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_1fr]">
              <ScheduleCard locale={locale} dictionary={dictionary} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <AttentionCard dictionary={dictionary} />
                <QuickActions dictionary={dictionary} />
              </div>
            </div>

            <div className="mt-4">
              <ClinicsTable locale={locale} dictionary={dictionary} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

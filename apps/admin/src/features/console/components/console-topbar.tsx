'use client';

import { Bell, ChevronDown, Search } from 'lucide-react';
import { Button } from '@saas-kit/components/ui/button';
import { Separator } from '@saas-kit/components/ui/separator';
import { SidebarTrigger } from '@saas-kit/components/ui/sidebar';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';
import type { Locale } from '@/lib/i18n/locale';
import { LanguageSwitcher } from './language-switcher';
import { ThemeToggle } from './theme-toggle';

interface ConsoleTopbarProps {
  locale: Locale;
  dictionary: AdminDictionary;
}

export function ConsoleTopbar({ locale, dictionary }: ConsoleTopbarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background px-4 sm:px-6">
      <SidebarTrigger className="-ms-1" />
      <Separator orientation="vertical" className="me-1 hidden h-4 sm:block" />

      <div className="relative hidden max-w-sm flex-1 md:block">
        <Search
          className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder={dictionary.common.searchPlaceholder}
          aria-label={dictionary.common.searchPlaceholder}
          className="h-9 w-full rounded-md border border-input bg-background ps-9 pe-3 text-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>

      <div className="ms-auto flex items-center gap-2">
        <LanguageSwitcher locale={locale} dictionary={dictionary} />
        <ThemeToggle dictionary={dictionary} />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={dictionary.common.notifications}
          className="relative"
        >
          <Bell className="size-4" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute end-2 top-2 size-1.5 rounded-full bg-destructive"
          />
        </Button>

        <Button
          type="button"
          variant="outline"
          className="h-9 gap-2 px-1.5 pe-2"
          aria-label={dictionary.common.signOut}
        >
          <span className="grid size-6 place-items-center rounded-sm bg-primary text-[10px] font-bold text-primary-foreground">
            {dictionary.common.userInitials}
          </span>
          <span className="hidden text-start leading-tight sm:block">
            <span className="block text-xs font-semibold">
              {dictionary.common.userName}
            </span>
            <span className="block text-[10px] font-normal text-muted-foreground">
              {dictionary.common.userRole}
            </span>
          </span>
          <ChevronDown
            className="hidden size-3.5 text-muted-foreground sm:block"
            aria-hidden="true"
          />
        </Button>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import {
  Building2,
  CalendarClock,
  CreditCard,
  LayoutDashboard,
  Settings,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@saas-kit/components/ui/sidebar';
import type { AdminDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface ConsoleSidebarProps {
  dictionary: AdminDictionary;
}

export function ConsoleSidebar({ dictionary }: ConsoleSidebarProps) {
  const items: { label: string; icon: LucideIcon; active: boolean }[] = [
    {
      label: dictionary.nav.dashboard,
      icon: LayoutDashboard,
      active: true,
    },
    { label: dictionary.nav.clinics, icon: Building2, active: false },
    {
      label: dictionary.nav.appointments,
      icon: CalendarClock,
      active: false,
    },
    {
      label: dictionary.nav.practitioners,
      icon: Stethoscope,
      active: false,
    },
    { label: dictionary.nav.billing, icon: CreditCard, active: false },
    { label: dictionary.nav.settings, icon: Settings, active: false },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 flex-row items-center gap-2 px-4">
        <Link
          href="/"
          className="leading-tight group-data-[collapsible=icon]:hidden"
        >
          <p className="font-heading text-sm font-semibold text-sidebar-foreground">
            {dictionary.common.brandName}
          </p>
          <p className="text-[11px] text-muted-foreground">
            {dictionary.common.brandTagline}
          </p>
        </Link>
        <Link
          href="/"
          className="hidden size-8 place-items-center rounded-md bg-sidebar-primary text-xs font-bold text-sidebar-primary-foreground group-data-[collapsible=icon]:grid"
          aria-label={dictionary.common.brandName}
        >
          CB
        </Link>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.active}
                      tooltip={item.label}
                    >
                      <Link
                        href="/"
                        aria-current={item.active ? 'page' : undefined}
                      >
                        <Icon aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

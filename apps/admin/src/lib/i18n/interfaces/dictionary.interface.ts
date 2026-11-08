export interface AdminDictionary {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly common: {
    readonly skipToContent: string;
    readonly brandName: string;
    readonly brandTagline: string;
    readonly languageLabel: string;
    readonly arabic: string;
    readonly english: string;
    readonly themeLabel: string;
    readonly switchToLight: string;
    readonly switchToDark: string;
    readonly searchPlaceholder: string;
    readonly notifications: string;
    readonly viewAll: string;
    readonly signOut: string;
    readonly userName: string;
    readonly userRole: string;
    readonly userInitials: string;
  };
  readonly nav: {
    readonly dashboard: string;
    readonly clinics: string;
    readonly appointments: string;
    readonly practitioners: string;
    readonly billing: string;
    readonly settings: string;
  };
  readonly dashboard: {
    readonly title: string;
    readonly description: string;
    readonly today: string;
    readonly last30Days: string;
    readonly stats: readonly {
      readonly label: string;
      readonly value: string;
      readonly change: string;
      readonly trend: 'up' | 'down';
    }[];
    readonly scheduleTitle: string;
    readonly scheduleDescription: string;
    readonly scheduleEmpty: string;
    readonly viewCalendar: string;
    readonly clinicsTitle: string;
    readonly clinicsDescription: string;
    readonly clinicsEmpty: string;
    readonly addClinic: string;
    readonly tableClinic: string;
    readonly tablePlan: string;
    readonly tableAppointments: string;
    readonly tableStatus: string;
    readonly statusActive: string;
    readonly statusTrial: string;
    readonly statusPaused: string;
  };
  readonly attention: {
    readonly title: string;
    readonly description: string;
    readonly items: readonly string[];
  };
  readonly quickActions: {
    readonly title: string;
    readonly items: readonly string[];
  };
}

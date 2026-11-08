import type { AdminDictionary } from './interfaces/dictionary.interface';
import type { Locale } from './locale';

const arabic: AdminDictionary = {
  meta: {
    title: 'Clinic Booking — لوحة إدارة المنصة',
    description: 'لوحة تحكم لمتابعة العيادات والاشتراكات ونمو المنصة.',
  },
  common: {
    skipToContent: 'انتقل إلى المحتوى',
    brandName: 'Clinic Booking',
    brandTagline: 'إدارة المنصة',
    languageLabel: 'اللغة',
    arabic: 'العربية',
    english: 'English',
    themeLabel: 'المظهر',
    switchToLight: 'التبديل إلى الوضع الفاتح',
    switchToDark: 'التبديل إلى الوضع الداكن',
    searchPlaceholder: 'ابحث عن عيادة أو مشرف…',
    notifications: 'الإشعارات',
    viewAll: 'عرض الكل',
    signOut: 'تسجيل الخروج',
    userName: 'سارة محمود',
    userRole: 'مشرف المنصة',
    userInitials: 'سم',
  },
  nav: {
    dashboard: 'لوحة التحكم',
    clinics: 'العيادات',
    appointments: 'المواعيد',
    practitioners: 'الأطباء',
    billing: 'الفواتير',
    settings: 'الإعدادات',
  },
  dashboard: {
    title: 'نظرة عامة على المنصة',
    description: 'تابع نمو العيادات والاستخدام من مكان واحد.',
    today: 'اليوم',
    last30Days: 'آخر 30 يومًا',
    stats: [
      {
        label: 'العيادات النشطة',
        value: '128',
        change: '+12%',
        trend: 'up',
      },
      {
        label: 'مواعيد هذا الشهر',
        value: '8,420',
        change: '+18%',
        trend: 'up',
      },
      {
        label: 'الاشتراكات المدفوعة',
        value: '74',
        change: '+6%',
        trend: 'up',
      },
      {
        label: 'معدل الغياب',
        value: '4.2%',
        change: '-1.1%',
        trend: 'down',
      },
    ],
    scheduleTitle: 'مواعيد قادمة تحتاج مراجعة',
    scheduleDescription: 'أحدث الحجوزات عبر جميع العيادات.',
    scheduleEmpty: 'لا توجد مواعيد معلقة الآن.',
    viewCalendar: 'فتح التقويم',
    clinicsTitle: 'أحدث العيادات',
    clinicsDescription: 'العيادات التي انضمت حديثًا إلى المنصة.',
    clinicsEmpty: 'لم تنضم أي عيادة بعد.',
    addClinic: 'إضافة عيادة',
    tableClinic: 'العيادة',
    tablePlan: 'الخطة',
    tableAppointments: 'المواعيد',
    tableStatus: 'الحالة',
    statusActive: 'نشطة',
    statusTrial: 'تجريبية',
    statusPaused: 'موقوفة',
  },
  attention: {
    title: 'يحتاج متابعة',
    description: 'أمور قصيرة تحتاج قرارًا اليوم.',
    items: [
      '٣ عيادات قاربت حد الخطة',
      'فاتورتان متأخرتان عن السداد',
      'عيادة واحدة تنتظر التفعيل',
    ],
  },
  quickActions: {
    title: 'إجراءات سريعة',
    items: ['دعوة عيادة', 'مراجعة الفواتير', 'تصدير التقرير الشهري'],
  },
};

const english: AdminDictionary = {
  meta: {
    title: 'Clinic Booking — Platform console',
    description: 'Console for monitoring clinics, subscriptions, and growth.',
  },
  common: {
    skipToContent: 'Skip to content',
    brandName: 'Clinic Booking',
    brandTagline: 'Platform console',
    languageLabel: 'Language',
    arabic: 'العربية',
    english: 'English',
    themeLabel: 'Theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    searchPlaceholder: 'Search clinics or admins…',
    notifications: 'Notifications',
    viewAll: 'View all',
    signOut: 'Sign out',
    userName: 'Sara Mahmoud',
    userRole: 'Platform admin',
    userInitials: 'SM',
  },
  nav: {
    dashboard: 'Dashboard',
    clinics: 'Clinics',
    appointments: 'Appointments',
    practitioners: 'Practitioners',
    billing: 'Billing',
    settings: 'Settings',
  },
  dashboard: {
    title: 'Platform overview',
    description: 'Track clinic growth and usage from a single place.',
    today: 'Today',
    last30Days: 'Last 30 days',
    stats: [
      { label: 'Active clinics', value: '128', change: '+12%', trend: 'up' },
      {
        label: 'Appointments this month',
        value: '8,420',
        change: '+18%',
        trend: 'up',
      },
      { label: 'Paid subscriptions', value: '74', change: '+6%', trend: 'up' },
      { label: 'No-show rate', value: '4.2%', change: '-1.1%', trend: 'down' },
    ],
    scheduleTitle: 'Upcoming appointments to review',
    scheduleDescription: 'The latest bookings across every clinic.',
    scheduleEmpty: 'No pending appointments right now.',
    viewCalendar: 'Open calendar',
    clinicsTitle: 'Recently joined clinics',
    clinicsDescription: 'Clinics that most recently joined the platform.',
    clinicsEmpty: 'No clinics have joined yet.',
    addClinic: 'Add clinic',
    tableClinic: 'Clinic',
    tablePlan: 'Plan',
    tableAppointments: 'Appointments',
    tableStatus: 'Status',
    statusActive: 'Active',
    statusTrial: 'Trial',
    statusPaused: 'Paused',
  },
  attention: {
    title: 'Needs attention',
    description: 'Short items that need a decision today.',
    items: [
      '3 clinics nearing plan limits',
      '2 overdue invoices',
      '1 clinic waiting to go live',
    ],
  },
  quickActions: {
    title: 'Quick actions',
    items: ['Invite a clinic', 'Review invoices', 'Export monthly report'],
  },
};

export const dictionaries: Record<Locale, AdminDictionary> = {
  ar: arabic,
  en: english,
};

export function getDictionary(locale: Locale): AdminDictionary {
  return dictionaries[locale];
}

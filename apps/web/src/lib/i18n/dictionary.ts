import type { WebDictionary } from './interfaces/dictionary.interface';
import type { Locale } from './locale';

const arabic: WebDictionary = {
  meta: {
    title: 'Clinic Booking — حجز مواعيد العيادات بسهولة',
    description:
      'صفحة حجز باسم عيادتك، تقويم واضح للفريق، وتذكيرات تصل للمرضى. بالعربية والإنجليزية ومصممة لمصر.',
  },
  common: {
    skipToContent: 'انتقل إلى المحتوى',
    brandName: 'Clinic Booking',
    brandTagline: 'حجز العيادات',
    languageLabel: 'اللغة',
    arabic: 'العربية',
    english: 'English',
    themeLabel: 'المظهر',
    switchToLight: 'التبديل إلى الوضع الفاتح',
    switchToDark: 'التبديل إلى الوضع الداكن',
  },
  nav: {
    home: 'الرئيسية',
    howItWorks: 'كيف يعمل',
    pricing: 'الخطط',
    signIn: 'تسجيل الدخول',
    startFree: 'ابدأ مجانًا',
  },
  hero: {
    eyebrow: 'منصة الحجز للعيادات في مصر والشرق الأوسط',
    title: 'مواعيد عيادتك،',
    highlight: 'منظمة من أول ضغطة',
    description:
      'صفحة حجز باسم عيادتك، تقويم واضح لفريقك، وتذكيرات تلقائية للمرضى — بالعربية والإنجليزية، وبدون مكالمات ولا دفاتر.',
    primaryCta: 'ابدأ مجانًا',
    secondaryCta: 'استعرض الخطط',
    bullets: [
      'بدون بطاقة ائتمان',
      'عربي وإنجليزي',
      'تذكيرات بالبريد والرسائل',
    ],
    preview: {
      clinicName: 'عيادة النور',
      service: 'استشارة عامة · 30 دقيقة',
      badge: 'متاح اليوم',
      month: 'نوفمبر 2026',
      days: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
      timesLabel: 'اختر وقتًا',
      confirm: 'تأكيد الموعد',
    },
  },
  stats: [
    { value: 'أقل غياب', label: 'تذكيرات تصل قبل الموعد بيوم وبساعتين' },
    { value: 'على مدار الساعة', label: 'مرضاك يحجزون في أي وقت يناسبهم' },
    { value: 'بلا تعارض', label: 'التقويم يمنع حجز نفس الوقت مرتين' },
  ],
  features: {
    title: 'كل ما تحتاجه عيادة صغيرة لتعمل بهدوء',
    description:
      'صُمم Clinic Booking حول يوم العمل الحقيقي في العيادة: استقبال، أطباء، ومرضى يحتاجون موعدًا مؤكدًا.',
    items: [
      {
        title: 'صفحة حجز باسمك',
        description:
          'رابط واحد يوضح خدماتك وأطباءك وأوقات العمل، ويعمل بسلاسة على الهاتف.',
      },
      {
        title: 'تقويم لا يسمح بالتعارض',
        description:
          'حتى لو ضغط مريضان في اللحظة نفسها، لا يُحجز الوقت مرتين.',
      },
      {
        title: 'تذكيرات تقلل الغياب',
        description:
          'تذكير قبل 24 ساعة وقبل ساعتين، بالبريد والرسائل، وبلغة المريض.',
      },
      {
        title: 'عربي وإنجليزي بوضوح',
        description:
          'واجهة عربية كاملة، وأرقام غربية، وتوقيت القاهرة، وأسعار بالجنيه.',
      },
      {
        title: 'صلاحيات واضحة للفريق',
        description:
          'المالك يدير الفريق والفواتير، والاستقبال يدير اليوم، والطبيب يرى مواعيده.',
      },
      {
        title: 'فوترة مناسبة لمصر',
        description:
          'خطط بالجنيه المصري، وضريبة واضحة، وفواتير جاهزة للطباعة.',
      },
    ],
  },
  howItWorks: {
    title: 'من التسجيل إلى أول موعد مؤكد',
    description:
      'ثلاث خطوات فقط، ثم تصبح صفحتك جاهزة للمشاركة مع مرضاك.',
    steps: [
      {
        title: 'أنشئ عيادتك',
        description:
          'سجّل بالبريد، اختر رابط الحجز، وأضف بيانات العيادة والعنوان.',
      },
      {
        title: 'أضف الخدمات والأطباء',
        description:
          'حدد مدة كل خدمة، وأوقات عمل كل طبيب، والإجازات والاستثناءات.',
      },
      {
        title: 'انشر واستقبل الحجوزات',
        description:
          'راجع الصفحة بالعربية والإنجليزية، ثم انشر الرابط وابدأ استقبال المرضى.',
      },
    ],
  },
  plans: {
    title: 'خطط واضحة تنمو مع العيادة',
    description: 'ابدأ مجانًا وبحدود واضحة، ثم ارتقِ عندما تحتاج مساحة أكبر.',
    vatNote: 'الأسعار بالجنيه المصري ولا تشمل ضريبة القيمة المضافة 14%.',
    cta: 'ابدأ الآن',
    popular: 'الأكثر اختيارًا',
    perMonth: 'شهريًا',
    items: [
      {
        name: 'مجانية',
        price: '0',
        description: 'لتجربة المنتج مع مرضى حقيقيين.',
        features: ['طبيب واحد', '50 موعدًا شهريًا', 'تذكيرات بالبريد'],
        highlighted: false,
      },
      {
        name: 'Starter',
        price: '399',
        description: 'لعيادة صغيرة تريد تنظيم يومها.',
        features: [
          '3 أطباء',
          '500 موعد شهريًا',
          '100 رسالة نصية',
          'تقارير أساسية',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: '899',
        description: 'لعيادة متعددة التخصصات تنمو بسرعة.',
        features: [
          '10 أطباء',
          '2000 موعد شهريًا',
          '500 رسالة نصية',
          'تقارير متقدمة',
        ],
        highlighted: false,
      },
    ],
  },
  closing: {
    title: 'اجعل الحجز أسهل لمرضاك، وأهدأ لفريقك',
    description:
      'أنشئ عيادتك اليوم. لا تحتاج بطاقة ائتمان للبدء على الخطة المجانية.',
    cta: 'أنشئ عيادتك مجانًا',
  },
  footer: {
    rights: 'جميع الحقوق محفوظة.',
    product: 'المنتج',
    company: 'الشركة',
    legal: 'قانوني',
    productLinks: ['صفحة الحجز', 'التقويم', 'التذكيرات'],
    companyLinks: ['من نحن', 'تواصل معنا'],
    legalLinks: ['سياسة الخصوصية', 'شروط الاستخدام'],
  },
};

const english: WebDictionary = {
  meta: {
    title: 'Clinic Booking — Calm appointments for busy clinics',
    description:
      'A branded booking page, a clear team calendar, and automatic patient reminders. Arabic and English, built for Egypt.',
  },
  common: {
    skipToContent: 'Skip to content',
    brandName: 'Clinic Booking',
    brandTagline: 'Clinic scheduling',
    languageLabel: 'Language',
    arabic: 'العربية',
    english: 'English',
    themeLabel: 'Theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  nav: {
    home: 'Home',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    signIn: 'Sign in',
    startFree: 'Start free',
  },
  hero: {
    eyebrow: 'Booking for clinics in Egypt and MENA',
    title: 'Your clinic calendar,',
    highlight: 'finally under control',
    description:
      'A booking page with your clinic’s name, a calendar your team can trust, and reminders that reach patients — in Arabic and English, without phone tag or paper books.',
    primaryCta: 'Start free',
    secondaryCta: 'See plans',
    bullets: [
      'No credit card required',
      'Arabic and English',
      'Email and SMS reminders',
    ],
    preview: {
      clinicName: 'Al Noor Clinic',
      service: 'General consult · 30 min',
      badge: 'Open today',
      month: 'November 2026',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      timesLabel: 'Pick a time',
      confirm: 'Confirm appointment',
    },
  },
  stats: [
    { value: 'Fewer no-shows', label: 'Reminders reach patients a day and two hours ahead' },
    { value: 'Book anytime', label: 'Patients reserve a slot that fits their day' },
    { value: 'No double booking', label: 'Your calendar keeps the same time from being taken twice' },
  ],
  features: {
    title: 'Everything a small clinic needs to run calmly',
    description:
      'Clinic Booking is shaped around the real clinic day: reception, practitioners, and patients who need an appointment they can trust.',
    items: [
      {
        title: 'A booking page with your brand',
        description:
          'One link that shows your services, practitioners, and working hours — clear and fast on a phone.',
      },
      {
        title: 'A calendar that cannot double-book',
        description:
          'Even when two patients tap at the same moment, the same slot cannot be taken twice.',
      },
      {
        title: 'Reminders that reduce no-shows',
        description:
          'A reminder 24 hours and 2 hours before the visit, by email and SMS, in the patient’s language.',
      },
      {
        title: 'Arabic and English, done properly',
        description:
          'A full Arabic experience, Western digits, Cairo time, and pricing in Egyptian pounds.',
      },
      {
        title: 'Roles that match the clinic',
        description:
          'Owners manage billing and the team, reception runs the day, and practitioners see their own appointments.',
      },
      {
        title: 'Billing that fits Egypt',
        description:
          'Plans in EGP, clear tax, and invoices your accountant can print or save.',
      },
    ],
  },
  howItWorks: {
    title: 'From sign-up to the first confirmed appointment',
    description:
      'Three steps, then your booking page is ready to share with patients.',
    steps: [
      {
        title: 'Create your clinic',
        description:
          'Sign up by email, choose your booking link, and add your clinic details.',
      },
      {
        title: 'Add services and practitioners',
        description:
          'Set each service duration, weekly working hours, time off, and exceptions.',
      },
      {
        title: 'Publish and take bookings',
        description:
          'Review the Arabic and English pages, publish the link, and welcome patients.',
      },
    ],
  },
  plans: {
    title: 'Clear plans that grow with the clinic',
    description:
      'Start free with honest limits, then upgrade when the clinic needs more room.',
    vatNote: 'Prices are in Egyptian pounds and exclude 14% VAT.',
    cta: 'Choose plan',
    popular: 'Most popular',
    perMonth: 'per month',
    items: [
      {
        name: 'Free',
        price: '0',
        description: 'Try the product with real patients.',
        features: [
          '1 practitioner',
          '50 appointments / month',
          'Email reminders',
        ],
        highlighted: false,
      },
      {
        name: 'Starter',
        price: '399',
        description: 'For a small clinic ready to get organised.',
        features: [
          '3 practitioners',
          '500 appointments / month',
          '100 SMS credits',
          'Core reports',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: '899',
        description: 'For a growing multi-specialty clinic.',
        features: [
          '10 practitioners',
          '2,000 appointments / month',
          '500 SMS credits',
          'Advanced reports',
        ],
        highlighted: false,
      },
    ],
  },
  closing: {
    title: 'Make booking easier for patients, calmer for your team',
    description:
      'Create your clinic today. The Free plan starts without a credit card.',
    cta: 'Create your clinic for free',
  },
  footer: {
    rights: 'All rights reserved.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    productLinks: ['Booking page', 'Calendar', 'Reminders'],
    companyLinks: ['About', 'Contact'],
    legalLinks: ['Privacy policy', 'Terms of service'],
  },
};

export const dictionaries: Record<Locale, WebDictionary> = {
  ar: arabic,
  en: english,
};

export function getDictionary(locale: Locale): WebDictionary {
  return dictionaries[locale];
}

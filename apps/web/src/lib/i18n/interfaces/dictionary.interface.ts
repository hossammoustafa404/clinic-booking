export interface WebDictionary {
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
  };
  readonly nav: {
    readonly home: string;
    readonly howItWorks: string;
    readonly pricing: string;
    readonly signIn: string;
    readonly startFree: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly highlight: string;
    readonly description: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly bullets: readonly string[];
    readonly preview: {
      readonly clinicName: string;
      readonly service: string;
      readonly badge: string;
      readonly month: string;
      readonly days: readonly [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
      ];
      readonly timesLabel: string;
      readonly confirm: string;
    };
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly features: {
    readonly title: string;
    readonly description: string;
    readonly items: readonly {
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly howItWorks: {
    readonly title: string;
    readonly description: string;
    readonly steps: readonly {
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly plans: {
    readonly title: string;
    readonly description: string;
    readonly vatNote: string;
    readonly cta: string;
    readonly popular: string;
    readonly perMonth: string;
    readonly items: readonly {
      readonly name: string;
      readonly price: string;
      readonly description: string;
      readonly features: readonly string[];
      readonly highlighted: boolean;
    }[];
  };
  readonly closing: {
    readonly title: string;
    readonly description: string;
    readonly cta: string;
  };
  readonly footer: {
    readonly rights: string;
    readonly product: string;
    readonly company: string;
    readonly legal: string;
    readonly productLinks: readonly string[];
    readonly companyLinks: readonly string[];
    readonly legalLinks: readonly string[];
  };
}

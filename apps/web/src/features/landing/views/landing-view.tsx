import { getDictionary } from '@/lib/i18n/dictionary';
import type { Locale } from '@/lib/i18n/locale';
import {
  ClosingSection,
  FeaturesSection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProofSection,
  SiteFooter,
  SiteHeader,
} from '../components';
import { getHealth } from '../services';

interface LandingViewProps {
  locale: Locale;
}

export async function LandingView({ locale }: LandingViewProps) {
  const dictionary = getDictionary(locale);
  // Shared health contract is consumed on the server; status is not shown in the UI.
  await getHealth();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main id="main" className="flex-1">
        <HeroSection locale={locale} dictionary={dictionary} />
        <ProofSection dictionary={dictionary} />
        <FeaturesSection dictionary={dictionary} />
        <HowItWorksSection dictionary={dictionary} />
        <PricingSection locale={locale} dictionary={dictionary} />
        <ClosingSection dictionary={dictionary} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}

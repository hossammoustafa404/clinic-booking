import Link from 'next/link';
import { Separator } from '@saas-kit/components/ui/separator';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface SiteFooterProps {
  dictionary: WebDictionary;
}

export function SiteFooter({ dictionary }: SiteFooterProps) {
  const columns = [
    {
      title: dictionary.footer.product,
      links: dictionary.footer.productLinks,
    },
    {
      title: dictionary.footer.company,
      links: dictionary.footer.companyLinks,
    },
    {
      title: dictionary.footer.legal,
      links: dictionary.footer.legalLinks,
    },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-base font-bold tracking-tight"
            >
              {dictionary.common.brandName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {dictionary.meta.description}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold tracking-wide text-foreground uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="mt-10" />

        <div className="pt-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {dictionary.common.brandName}.{' '}
            {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

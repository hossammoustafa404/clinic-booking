# Locale via `?lang` with an internal rewrite

Public URLs use `?lang=ar` or `?lang=en`; middleware persists the choice in a cookie and rewrites to an internal `/[locale]/...` segment. This honors the desired URL shape while keeping `<html lang dir>` server-rendered and avoiding RTL hydration flashes; canonical and `hreflang` tags handle SEO.

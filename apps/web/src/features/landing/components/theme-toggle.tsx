'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@saas-kit/components/ui/button';
import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface ThemeToggleProps {
  dictionary: WebDictionary;
}

export function ThemeToggle({ dictionary }: ThemeToggleProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = isMounted && resolvedTheme === 'dark';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={
        isDark
          ? dictionary.common.switchToLight
          : dictionary.common.switchToDark
      }
      aria-pressed={isDark}
    >
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
    </Button>
  );
}

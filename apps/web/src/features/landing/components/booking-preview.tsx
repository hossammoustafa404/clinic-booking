import type { WebDictionary } from '@/lib/i18n/interfaces/dictionary.interface';

interface BookingPreviewProps {
  dictionary: WebDictionary;
}

const dayKeys = [0, 1, 2, 3, 4, 5, 6] as const;
const slots = ['09:00', '09:30', '10:00', '11:30', '14:00', '16:30'] as const;

export function BookingPreview({ dictionary }: BookingPreviewProps) {
  const preview = dictionary.hero.preview;

  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-border/80 bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {preview.clinicName}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {preview.service}
          </p>
        </div>
        <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-medium text-accent-foreground">
          {preview.badge}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium text-muted-foreground">
          {preview.month}
        </p>
        <div className="mt-3 grid grid-cols-7 gap-1">
          {dayKeys.map((day) => {
            const selected = day === 3;
            return (
              <div
                key={day}
                className={
                  selected
                    ? 'rounded-lg bg-primary px-0.5 py-2 text-center text-[10px] leading-tight font-semibold text-primary-foreground sm:text-[11px]'
                    : 'rounded-lg bg-secondary px-0.5 py-2 text-center text-[10px] leading-tight font-medium text-muted-foreground sm:text-[11px]'
                }
              >
                <span className="block">{preview.days[day]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium text-muted-foreground">
          {preview.timesLabel}
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {slots.map((slot, index) => {
            const selected = index === 2;
            return (
              <div
                key={slot}
                className={
                  selected
                    ? 'rounded-lg border border-primary bg-accent px-2 py-2 text-center text-xs font-semibold text-primary'
                    : 'rounded-lg border border-border bg-background px-2 py-2 text-center text-xs font-medium text-foreground'
                }
              >
                {slot}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground">
        {preview.confirm}
      </div>
    </div>
  );
}

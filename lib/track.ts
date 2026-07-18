// Safe GA4 event wrapper — analytics is best-effort, never breaks the UI.
export function track(event: string, params?: Record<string, string | number | boolean>) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.('event', event, params);
  } catch {
    /* no-op */
  }
}

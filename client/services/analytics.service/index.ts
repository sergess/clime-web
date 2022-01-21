export const trackEvent = (
  action: string,
  params?: string | Record<string, string>
): void => {
  window?.gtag('event', action, params);
};

export default trackEvent;

// lib/gtag.ts

declare global {
    interface Window {
      gtag: (...args: any[]) => void;
    }
  }
  
export const GA_MEASUREMENT_ID = 'G-EK98PWLE96'; // <-- replace with your ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

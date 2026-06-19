import Script from "next/script";
import { GA_ID, IS_GA_DEBUG_MODE } from "@/lib/gtag";

export function GA4Script() {
  if (!GA_ID) return null;

  const configScript = IS_GA_DEBUG_MODE
    ? `gtag('config', '${GA_ID}', { 'debug_mode': true });`
    : `gtag('config', '${GA_ID}');`;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configScript}
        `}
      </Script>
    </>
  );
}

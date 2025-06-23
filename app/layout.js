import { headers } from "next/headers";
import Navigation from "../components/nav";
import CookieConsentBanner from "../components/cookieConsentBanner";
import Footer from "../components/footer";
import Script from "next/script";
import ImagePreloader from "../components/ImagePreloader";
import { CriticalCSS } from "./critical-css";
import BackToTop from "../components/BackToTop";
import CallButton from "../components/CallButton";
import NextTopLoader from "nextjs-toploader";
import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export async function generateMetadata() {
  const host = (await headers()).get("host"); // Get the current domain
  const protocol = host?.includes("localhost") ? "http" : "https"; // Adjust for local dev

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      template: "%s | Застраховка за пътуване",
      default: "Застраховка за пътуване | Онлайн застраховка за пътуване в чужбина",
    },
    description:
      "Онлайн застраховка за пътуване в чужбина на най-добри цени. Сравнете оферти от различни застрахователи и купете застраховка за пътуване лесно и безопасно.",
    keywords: [
      "застраховка за пътуване",
      "пътническа застраховка", 
      "здравна застраховка чужбина",
      "онлайн застраховка",
      "евтина застраховка пътуване",
      "медицинска застраховка пътуване"
    ],
    openGraph: {
      title: "Застраховка за пътуване | Онлайн застраховка за пътуване в чужбина",
      description:
        "Онлайн застраховка за пътуване в чужбина на най-добри цени. Сравнете оферти от различни застрахователи и купете застраховка за пътуване лесно и безопасно.",
      images: "/zastrahova-patuvane.jpg",
      type: "website",
      locale: "bg_BG",
      siteName: "Застраховка за пътуване",
    },
    twitter: {
      card: "summary_large_image",
      title: "Застраховка за пътуване",
      description: "Онлайн застраховка за пътуване в чужбина на най-добри цени",
      images: ["/zastrahova-patuvane.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: {
        bg: "/",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <CriticalCSS />
        <link
          rel="preconnect"
          href="https://zastrahovkazapatuvane.admin-panels.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://zastrahovkazapatuvane.admin-panels.com" />

        {/* Директно използване на preload тагове с правилния синтаксис */}
        <link
          rel="preload"
          as="image"
          href="/zastrahova-patuvane.jpg"
          type="image/jpg"
          media="(max-width: 640px)"
        />

        <link
          rel="preload"
          as="image"
          href="/zastrahova-patuvane.jpg"
          type="image/jpg"
          media="(min-width: 641px)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={roboto.className}>
        <NextTopLoader showSpinner={false} color="#4E6688"/>
        <BackToTop />
        <CallButton />
        <ImagePreloader />
        <Navigation />
        <main>{children}</main>
        <CookieConsentBanner />
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Застраховка за пътуване",
              description:
                "Онлайн платформа за сравняване и закупуване на застраховки за пътуване в чужбина. Предлагаме най-добрите цени от водещи застрахователи.",
              url: "https://zastrahovkazapatuvane.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+359XXXXXXXXX",
                contactType: "customer service",
                availableLanguage: "Bulgarian"
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Пример 123",
                addressLocality: "София",
                postalCode: "1000",
                addressCountry: "BG",
              },
              areaServed: {
                "@type": "Country",
                name: "Bulgaria"
              },
              serviceType: [
                "Застраховка за пътуване в чужбина",
                "Медицинска застраховка за пътуване", 
                "Пътническа застраховка",
                "Спортна застраховка"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

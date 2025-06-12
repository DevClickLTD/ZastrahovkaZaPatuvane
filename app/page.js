import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";

// Динамично зареждане на компоненти с lazy loading
const Incentives = dynamic(() => import("../components/incentives"), {
  ssr: true,
});
const CTA = dynamic(() => import("../components/cta"), { ssr: true });
const Clients = dynamic(() => import("../components/clients"), { ssr: true });
const Lastestposts = dynamic(() => import("../components/latestposts"), {
  ssr: true,
});

// Добавяне на ISR ревалидиране на всеки час
export const revalidate = 3600;

// Добавяне на метаданни за главната страница
export const metadata = {
  title: "NextLevel Services - Професионални бизнес услуги",
  description:
    "Открийте нашите висококачествени бизнес услуги, които ще изведат вашия бизнес на следващо ниво. Консултирайте се с нашите експерти днес.",
  keywords: [
    "бизнес услуги",
    "консултации",
    "професионални услуги",
    "NextLevel",
  ],
  openGraph: {
    title: "NextLevel Services - Професионални бизнес услуги",
    description: "Открийте нашите висококачествени бизнес услуги",
    images: [
      {
        url: "/zastrahova-patuvane.jpg",
        width: 1200,
        height: 630,
        alt: "NextLevel Services",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextLevel Services - Професионални бизнес услуги",
    description: "Открийте нашите висококачествени бизнес услуги",
    images: ["/zastrahova-patuvane.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebVitals />
      <HeroSection />
      <Incentives />
      <CTA />
      <Clients />
      <Lastestposts />
    </>
  );
}

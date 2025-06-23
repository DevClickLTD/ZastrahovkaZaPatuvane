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
  title: "Онлайн застраховка за пътуване в чужбина | Най-добри цени",
  description:
    "Сравнете и купете застраховка за пътуване онлайн. Предлагаме най-добрите цени за здравна застраховка в чужбина от водещи застрахователи в България.",
  keywords: [
    "застраховка за пътуване",
    "пътническа застраховка",
    "здравна застраховка чужбина",
    "онлайн застраховка пътуване",
    "евтина застраховка",
    "медицинска застраховка пътуване",
    "застраховка виза",
    "застраховка Шенген"
  ],
  openGraph: {
    title: "Онлайн застраховка за пътуване в чужбина | Най-добри цени",
    description: "Сравнете и купете застраховка за пътуване онлайн от водещи застрахователи",
    images: [
      {
        url: "/zastrahova-patuvane.jpg",
        width: 1200,
        height: 630,
        alt: "Застраховка за пътуване в чужбина",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн застраховка за пътуване в чужбина | Най-добри цени", 
    description: "Сравнете и купете застраховка за пътуване онлайн от водещи застрахователи",
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

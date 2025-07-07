import Image from "next/image";
import Link from "next/link";
import { getServices } from "../../services/services";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

// Динамично зареждане на компонента със списъка с услуги
const ServicesList = dynamic(() => import("../../components/ServicesList"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
  ),
});

// Добавяне на ISR ревалидиране на всеки час
export const revalidate = 3600;

export const metadata = {
  title: "Застрахователни услуги за пътуване | Видове застраховки",
  description:
    "Разгледайте всички наши застрахователни услуги за пътуване в чужбина. Медицинска застраховка, багажна застраховка, застраховка за анулиране и много други.",
  keywords: [
    "застрахователни услуги",
    "видове застраховки пътуване", 
    "медицинска застраховка",
    "багажна застраховка",
    "застраховка анулиране",
    "спортна застраховка",
    "бизнес пътуване застраховка"
  ],
  openGraph: {
    title: "Застрахователни услуги за пътуване | Видове застраховки",
    description: "Разгледайте всички наши застрахователни услуги за пътуване в чужбина",
    images: [
      {
        url: "/zastrahova-patuvane.jpg",
        width: 1200,
        height: 630,
        alt: "Застрахователни услуги за пътуване",
      },
    ],
  },
};

export default async function Services() {
  try {
    const services = await getServices();

    if (!services || services.length === 0) {
      return (
        <p className="text-gray-600 text-center mt-10">
          В момента няма налични услуги!
        </p>
      );
    }

    // Подготвяме структурирани данни за Schema.org
    const servicesSchemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title.rendered,
          url: `https://zastrahovkazapatuvane.com/services/${service.slug}`,
          description:
            service.content.rendered.replace(/<[^>]+>/g, "").substring(0, 150) +
            "...",
          provider: {
            "@type": "InsuranceAgency",
            name: "Застраховка за пътуване",
            url: "https://zastrahovkazapatuvane.com",
          },
          serviceType: "Застрахователни услуги за пътуване"
        },
      })),
    };

    return (
      <>
        <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchemaData),
          }}
        />
        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Открийте нашите застрахователни решения за вашето пътуване
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                Ние предлагаме разнообразие от туристически застраховки, създадени да осигурят 
                пълна защита, независимо от вашата дестинация и продължителност на пътуването.
              </p>

              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#4E6688" />
                    <stop offset={1} stopColor="#4E6688" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Основни типове застраховки */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Основни видове застраховки
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Изберете най-подходящото покритие за вашето пътуване
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Застраховка Мултитрип */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#4E6688] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Застраховка Мултитрип</h3>
                  <p className="text-sm text-gray-500 mt-2">Идеална за честите пътешественици</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 text-sm">
                    Пътувате често? Застраховка Мултитрип е вашето идеално решение! Спестете време и усилия, 
                    като изберете абонаментна застраховка, която покрива неограничен брой пътувания през годината.
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Предимства:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Целогодишна защита без повторни застраховки
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Икономически изгодно за чести пътувания
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Гъвкавост - различни нива на покритие
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Покритие до 30, 60 или 90 дни на пътуване
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">От 1 лв. на ден</p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#4E6688] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Поръчайте сега
                  </Link>
                </div>
              </div>

              {/* Премиум здравна застраховка за Европа */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#4E6688] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Премиум здравна застраховка за Европа</h3>
                  <p className="text-sm text-gray-500 mt-2">Безкомпромисна здравна грижа</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 text-sm">
                    Когато пътувате из Европа, искате да сте сигурни, че здравето ви е в най-добрите ръце. 
                    Нашата Премиум здравна застраховка предлага разширено покритие, което надхвърля стандартните полици.
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Покритие включва:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Покритие до 300,000 EUR
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Директно заплащане в 5000+ клиники
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Премиум асистанс с персонален координатор
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Спортни дейности и зимни спортове
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">Възраст: До 85 години</p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#4E6688] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Осигурете се сега
                  </Link>
                </div>
              </div>

              {/* Медицинска застраховка за чужбина */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#4E6688] rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🏥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Медицинска застраховка за чужбина</h3>
                  <p className="text-sm text-gray-500 mt-2">Основната защита за всяко пътуване</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-600 text-sm">
                    Независимо дали планирате екзотично пътуване, бизнес командировка или обучение в чужбина, 
                    медицинската застраховка за чужбина е задължителна за защита от непредвидени разходи.
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Покритие включва:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Медицински разходи до 100,000 EUR/USD
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Спешна медицинска помощ и хоспитализация
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Репатриране и медицински транспорт
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E6688] mr-2">✓</span>
                        Световно покритие (0-80 години)
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-3">От 1 ден до 1 година</p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[#4E6688] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Изберете спокойствието
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action секция */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-[#4E6688] rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Готови за безгрижно пътуване?
              </h2>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Работим с водещи застрахователи, за да осигурим надеждна защита и спокойствие при всяко пътуване. 
                Изчислете цената онлайн, сключете я за минути и пътувайте със сигурност!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#4E6688] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Получете оферта сега
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4E6688] transition-colors"
                >
                  Свържете се с нас
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Всички наши услуги
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Разгледайте пълната гама от застрахователни продукти
              </p>
            </div>
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
              }
            >
              <ServicesList services={services} />
            </Suspense>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на услугите!
      </p>
    );
  }
}

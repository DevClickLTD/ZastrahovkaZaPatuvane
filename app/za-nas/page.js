import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "За нас - Удостоверение | zastrahovkazapatuvane",
  description:
    "Удостоверение за регистрация на Корпорекс България ЕООД в комисията за финансов надзор за извършване на дейност по застрахователно посредничество.",
  openGraph: {
    title: "За нас - Удостоверение | zastrahovkazapatuvane",
    description:
      "Удостоверение за регистрация на Корпорекс България ЕООД в комисията за финансов надзор за извършване на дейност по застрахователно посредничество.",
    images: [
      {
        url: "/certificate.png",
        width: 800,
        height: 1000,
        alt: "Удостоверение за регистрация",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
};

export default function ZaNasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">За нас</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Платформата се оперира от Застрахователен брокер „Корпорекс
            България" ЕООД, притежаващ лиценз от КФН за упражняване на{" "}
            <Link
              href="/"
              className="#4E6688 underline"
            >
              застрахователна дейност
            </Link>{" "}
            с номер 762-ЗБ/30.06.2021 г.
          </p>
        </div>

        {/* Certificate Container */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-12 mx-auto max-w-5xl">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-[#4E6688] rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-[#4E6688] rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-[#4E6688] rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-[#4E6688] rounded-br-lg"></div>

          {/* Certificate Image */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg max-w-full">
              <Image
                src="/certificate.png"
                alt="Удостоверение за регистрация на Корпорекс България ЕООД"
                width={800}
                height={1000}
                className="block mx-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
                style={{
                  maxHeight: "85vh",
                  width: "auto",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>

          {/* Certificate Details */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#4E6688] text-white rounded-full text-sm font-medium">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Валидно удостоверение
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Информация за документа
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Номер:
                </span>
                <span className="ml-2">№762-ЗБ/30.06.2021 г.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Издаден от:
                </span>
                <span className="ml-2">Комисия за финансов надзор</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Дата:
                </span>
                <span className="ml-2">30.06.2021 г.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              За компанията
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Име:
                </span>
                <span className="ml-2">Корпорекс България ЕООД</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Дейност:
                </span>
                <span className="ml-2">Застрахователно посредничество</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-0 flex-1">
                  Статус:
                </span>
                <span className="ml-2 text-green-600 font-medium">Активен</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { getContactInfo } from "../../services/contacts";
import ContactForm from "../../components/contactForm"; // Вкарваме клиентската форма
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Контакти - Застраховка за пътуване",
    description:
      "Свържете се с нас за консултация относно застраховка за пътуване. Телефон, имейл и адрес за връзка с нашите специалисти по застрахователни услуги.",
    keywords: [
      "контакти застраховка пътуване",
      "телефон застрахователен брокер",
      "консултация застраховка",
      "връзка със застрахователен агент"
    ],
    openGraph: {
      title: "Контакти - Застраховка за пътуване",
      description: "Свържете се с нас за консултация относно застраховка за пътуване",
      images: ["/zastrahova-patuvane.jpg"],
      type: "website"
    }
  };
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Свържете се с нас – ние сме тук, за да помогнем!
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Имате въпроси относно туристическите застраховки? Нуждаете се от помощ при избора на правилното покритие? 
              Нашият екип е на разположение, за да ви съдейства. Не се колебайте да се свържете с нас по удобен за вас начин.
            </p>
            
            {/* Работно време */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Работно време:</h3>
              <p className="text-sm text-gray-600">
                Понеделник - Петък: 8:30 - 18:00<br/>
                Събота: 9:00 - 14:00
              </p>
            </div>
            
            <dl className="mt-10 space-y-4 text-base text-gray-600">
              {contactInfo && (
                <>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>{contactInfo.address}</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <PhoneIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`tel:${contactInfo.phone_number}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.phone_number}
                      </Link>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`mailto:${contactInfo.email}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.email}
                      </Link>
                    </dd>
                  </div>
                </>
              )}
            </dl>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Можете да използвате и нашата форма за контакт на сайта, за да ни изпратите съобщение. 
                Ще се свържем с вас възможно най-скоро.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Последвайте ни във Facebook и Instagram за актуални оферти и новини!
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

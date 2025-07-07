import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Доверие и партньорство
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Работим с водещи застрахователни компании в България, за да ви предоставим 
              най-добрите продукти на пазара. Вашето доверие е наш приоритет, а вашето 
              безгрижно пътуване – нашата цел. Хиляди доволни клиенти са избрали нашите 
              услуги и са пътували спокойно по целия свят.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E6688]">10,000+</div>
                <div className="text-sm text-gray-600">Доволни клиенти</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E6688]">24/7</div>
                <div className="text-sm text-gray-600">Асистентска помощ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4E6688]">190+</div>
                <div className="text-sm text-gray-600">Държави покритие</div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
              alt="Застрахователен партньор 1"
              src="https://tailwindui.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
              width={105}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              alt="Застрахователен партньор 2"
              src="https://tailwindui.com/plus-assets/img/logos/reform-logo-gray-900.svg"
              width={104}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              alt="Застрахователен партньор 3"
              src="https://tailwindui.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
              width={140}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              alt="Застрахователен партньор 4"
              src="https://tailwindui.com/plus-assets/img/logos/laravel-logo-gray-900.svg"
              width={136}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              alt="Застрахователен партньор 5"
              src="https://tailwindui.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              alt="Застрахователен партньор 6"
              src="https://tailwindui.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
              width={147}
              height={48}
              quality={80}
              loading="lazy"
              className="max-h-12 w-full object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

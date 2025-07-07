const incentives = [
  {
    name: "Бърза онлайн поръчка",
    imageSrc: "/icons/cta-icon-1.svg",
    description:
      "Бърза онлайн поръчка за минути с моментално издаване на полица. Лесен процес на сключване без излишни формалности.",
  },
  {
    name: "Покритие в цял свят",
    imageSrc: "/icons/cta-icon-2.svg",
    description:
      "Покритие в цял свят с 24/7 асистентска помощ на български език. Защита във всяка точка на планетата.",
  },
  {
    name: "Гъвкави пакети",
    imageSrc: "/icons/cta-icon-3.svg",
    description:
      "Гъвкави пакети за индивидуални, семейни и групови пътувания. Персонализирани решения според вашите нужди.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Защо да изберете нас?
              </h2>
              <p className="mt-4 text-white">
                Когато се планирате пътуване, сигурността трябва да е на първо място. 
                Застраховките за пътуване предлагат пълна защита и спокойствие, във всяка точка на света. 
                Без значение дали пътувате за работа, ваканция или обучение в чужбина, ние предлагаме 
                изчерпателно покритие за всяка ситуация – от медицински разходи до спешна помощ.
              </p>
            </div>
            <img
              alt=""
              src="/patuvane-v-chuzhbina.jpg"
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#4E6688]">
                    <img
                      alt=""
                      src={incentive.imageSrc}
                      className="h-10 w-10"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-white">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-white">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

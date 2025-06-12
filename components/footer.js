"use client";

import { useState, useEffect } from "react";
import useSubscribe from "../hooks/useSubscribe";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { getServicesForFooter } from "../services/services";
import Link from "next/link";

const navigation = {
  pages: [
    { name: "Начало", href: "/" },
    { name: "За нас", href: "/za-nas" },
    { name: "Блог", href: "/blog" },
    { name: "Контакти", href: "/contact" },
  ],
  legal: [
    { name: "Условия за ползване", href: "/obsthi-usloviya" },
    { name: "Политика за поверителност", href: "/privacy-policy" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/brd.law.bg",
      icon: FaFacebook,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/-burkov-radev-djulgerska-law-firm/?viewAsMember=true",
      icon: FaLinkedin,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");
  const { subscribe, loading } = useSubscribe();
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await subscribe(email, () => setEmail(""));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      if (currentYear !== year) {
        setYear(currentYear);
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [year]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const servicesData = await getServicesForFooter();
        if (servicesData && Array.isArray(servicesData)) {
          const formattedServices = servicesData.map((service) => ({
            name: service.title.rendered,
            href: `/services/${service.slug}`,
          }));
          setServices(formattedServices);
        }
        setServicesLoading(false);
      } catch (error) {
        console.error("Error fetching services for footer:", error);
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Function to chunk the services array into columns
  const getServiceColumns = (services, columns = 2) => {
    if (!services || !services.length) return [];

    const itemsPerColumn = Math.ceil(services.length / columns);
    const result = [];

    for (let i = 0; i < columns; i++) {
      const startIndex = i * itemsPerColumn;
      const columnServices = services.slice(
        startIndex,
        startIndex + itemsPerColumn
      );
      if (columnServices.length > 0) {
        result.push(columnServices);
      }
    }

    return result;
  };

  // Get service columns based on responsive layout
  const serviceColumns = getServiceColumns(services, 2);

  return (
    <footer className="relative bg-white border border-t-[#eaeaea]">
      <div className="absolute right-0 top-0 bottom-0 z-10 w-1/3 h-full flex items-center justify-center pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-80 hidden md:block sm:viewBox-[-150_0_500_1000] md:viewBox-[-150_0_500_800] lg:viewBox-[0_0_500_800]"
          viewBox="0 0 500 800"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0 C160 150, 340 250, 420 400 S480 600, 350 800"
            stroke="#129160"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M140 0 C180 170, 320 270, 440 420 S500 650, 320 800"
            stroke="#129160"
            strokeWidth="1.2"
            opacity="0.8"
            fill="none"
          />
          <path
            d="M200 0 C200 190, 300 290, 460 440 S520 700, 290 800"
            stroke="#129160"
            strokeWidth="1"
            opacity="0.6"
            fill="none"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-6 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <img alt="" src="/zastrahovka-zapatuvane-v-chuzhbina.png" width={180} height={40} />
          </div>
          <div className="mt-16 grid xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Страници колона */}
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Страници
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.pages.map((page) => (
                    <li key={page.name}>
                      <Link
                        href={page.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                        prefetch={true}
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}

                  {/* Правна информация в същата колона */}
                  <li className="pt-6 mt-6 border-t border-gray-100">
                    <h3 className="text-sm/6 font-semibold text-gray-900">
                      Правна информация
                    </h3>
                  </li>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                        prefetch={true}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Услуги колона */}
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Услуги
                </h3>
                {servicesLoading ? (
                  <div className="mt-6 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gray-400 border-t-[#95161C] rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                    {serviceColumns.map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-4">
                        {column.map((service) => (
                          <div key={service.name}>
                            <Link
                              href={service.href}
                              className="text-sm/6 text-gray-600 hover:text-gray-900"
                              prefetch={true}
                            >
                              {service.name}
                            </Link>
                          </div>
                        ))}
                        {columnIndex === serviceColumns.length - 1 && (
                          <div className="pt-2">
                            <Link
                              href="/services"
                              className="text-sm/6 font-medium text-[#129160] hover:text-gray-900"
                              prefetch={true}
                            >
                              Всички услуги →
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; {year} DZO, All rights reserved - Powered by{" "}
            <Link
              href="https://insurance.bg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insurance.bg
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

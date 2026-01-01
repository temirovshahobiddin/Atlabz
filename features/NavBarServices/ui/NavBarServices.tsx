"use client";

import { usePathname } from "next/navigation";
import Button from "@/shared/ui/Button";
import Link from "next/link";

const NavBarServices = () => {
  const pathname = usePathname();

  // Твои кнопки + пути
  const buttons = [
    { label: "решения задач", link: "/premium/problem-solve" },
    { label: "написание работ", link: "/premium/choose-type-work" },
    { label: "помощь с контрольной", link: "/premium/help-exam" },
  ];

  // Определяем активную кнопку по URL
  const active = buttons.find(btn => pathname.includes(btn.link))?.label || "";

  return (
    <div className="flex items-center gap-2 mx-auto sticky top-0 z-30 mb-5  lg:static lg:gap-5 w-full bg-white p-2.5 rounded-[10px]">
      {buttons.map(btn => {
        const isActive = active === btn.label;

        const widthClass = isActive ? "w-[361px] md:w-[1018px]" : "w-full max-w-[361px]";

        return (
          <Link className={`${widthClass}`} key={btn.link} href={btn.link}>
            <Button
              variant={isActive ? 1 : 5}
              rounded="10"
              className={`
                text-[10px]! md:text-[20px]!
                px-6!
                py-[15px]! md:p-5!
                transition-all duration-500 ease-in-out
              `}
            >
              {btn.label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarServices;

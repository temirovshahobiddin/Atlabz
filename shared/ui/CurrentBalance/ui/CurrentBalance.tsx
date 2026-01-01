/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import ChevronDown from "@/shared/assets/icons/ChevronDown";
import React, { useEffect, useRef, useState } from "react";

import balance3 from "@/shared/assets/cabinet/balance3.png";

const cardBalance = [
  {
    iconSrc: balance3.src,
    balance: "110",
  },
  {
    iconSrc: balance3.src,
    balance: "110",
  },
  {
    iconSrc: balance3.src,
    balance: "110",
  },
];

const CurrentBalance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Обработчик клика вне компонента
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex flex-col w-full gap-1">
      <div
        className="flex gap-1 md:gap-2.5 justify-between md:h-[50px] items-center p-[5px] sm:px-[15px] sm:py-2.5 md:px-5 w-full bg-[#E7EBEE] rounded-[50px] cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex text-[#3831BF] items-center gap-2.5 text-[14px] lg:text-[20px] font-bold leading-[80%]">
          <span>115</span>
        </div>
        <img className="w-5 h-5 lg:w-[30px] lg:h-[30px]" src={balance3.src} alt="" />
        <span
          className={`transition-transform hidden lg:block duration-300 ease-in-out rotate-180 ${
            isOpen ? "rotate-360" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </span>
      </div>

      {/* Выпадающий блок */}
      <div
        className={`transition-all duration-500 ease-linear absolute z-40 top-full mt-2 left-[-60px] sm:left-0 w-screen max-w-[168px] overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 w-full bg-white rounded-[20px] p-2 md:p-5">
          {cardBalance?.map((card, index) => (
            <div
              key={index}
              className="w-full px-2 py-2.5 bg-[#E7EBEE] rounded-[40px] flex items-center justify-between"
            >
              <img className="w-4 h-4 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px]" src={card.iconSrc} alt="" />
              <div className="text-[14px] sm:text-[16px] md:text-[20px] font-bold leading-[100%] italic tracking-[0%]">
                {card.balance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;

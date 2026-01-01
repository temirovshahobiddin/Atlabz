"use client";

/* eslint-disable @next/next/no-img-element */
import CardBalance from "@/entities/CardBalance";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import balance3 from "@/shared/assets/cabinet/balance3.png";

interface CardBalance {
  iconSrc?: string;
  title?: string;
  balance?: string;
}

interface BalanceProps {
  cardBalance?: CardBalance[];
}

const Balance: React.FC<BalanceProps> = ({ cardBalance }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="flex flex-col w-full gap-1">
      <div
        className="flex justify-between items-center w-full bg-white p-5 rounded-[10px] cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[36px] font-bold leading-[100%] tracking-[-0.05em]">Баланс:</span>
        {pathName.startsWith("/profile/my-rate") ? (
          <div
            className="flex gap-1 md:gap-2.5 justify-between max-w-[142px] md:max-w-[199px] md:h-[70px] items-center py-[15.5px] md:py-2.5 px-5 w-full bg-[#E7EBEE] rounded-[50px] cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex text-[#3831BF] items-center gap-2.5 text-[24px] lg:text-[36px] font-bold leading-[80%]">
              <span>115</span>
            </div>

            <img className="w-5 h-5 md:w-[50px] md:h-[50px] " src={balance3.src} alt="" />

            <span
              className={`transition-transform duration-300 ease-in-out rotate-180  ${
                isOpen ? "rotate-360" : "rotate-0"
              }`}
            >
              <ChevronDown />
            </span>
          </div>
        ) : (
          <span
            className={`transition-transform duration-300 ease-in-out rotate-180 ${isOpen ? "rotate-360" : "rotate-0"}`}
          >
            <ChevronDown />
          </span>
        )}
      </div>
      {/* Блок с балансами (анимированное появление) */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2.5 bg-white rounded-[20px] p-5">
          {cardBalance?.map((card, index) => (
            <CardBalance key={index} title={card.title} iconSrc={card.iconSrc} balance={card.balance} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Balance;

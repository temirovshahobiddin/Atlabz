"use client";

import ChevronDown from "@/shared/assets/icons/ChevronDown";
import Develop from "@/shared/assets/icons/Develop";
import Finance from "@/shared/assets/icons/Finance";
import Psychology from "@/shared/assets/icons/Psychology";
import Study from "@/shared/assets/icons/Study";
import React, { useState } from "react";

const OurTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  flex-col w-full gap-1 ">
      <div
        className="flex gap-1  justify-between  items-centerw-full cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex  items-center gap-2.5 text-[14px] xl:text-[15px] 2xl:text-[18px] min-[1700px]:text-[20px] leading-[80%]">
          <span>Инструменты</span>
        </div>

        <span
          className={`transition-transform hidden md:block duration-300 w-6 h-6 ease-in-out rotate-180  ${
            isOpen ? "rotate-360" : "rotate-0"
          }`}
        >
          <ChevronDown />
        </span>
      </div>

      {/* Блок с балансами (анимированное появление) */}
      <div
        className={`transition-all duration-200 ease-out absolute z-40 top-full mt-2  w-full max-w-[384px] overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 bg-white rounded-[20px] p-5">
          <div className="flex gap-2.5 items-center w-full cursor-pointer">
            <span>
              <Study />
            </span>
            <span className="text-[14px] lg:text-[20px] leading-[80%]">Обучение</span>
          </div>
          <div className="flex gap-2.5 items-center cursor-pointer">
            <span>
              <Develop />
            </span>
            <span className="text-[14px] lg:text-[20px] leading-[80%]">Развитие</span>
          </div>
          <div className="flex gap-2.5 items-center cursor-pointer">
            <span>
              <Psychology />
            </span>
            <span className="text-[14px] lg:text-[20px] leading-[80%]">Психология</span>
          </div>
          <div className="flex gap-2.5 items-center cursor-pointer">
            <span>
              <Finance />
            </span>
            <span className="text-[14px] lg:text-[20px] leading-[80%]">Финансы</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTools;

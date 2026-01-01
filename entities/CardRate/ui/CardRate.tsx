/* eslint-disable @next/next/no-img-element */
import React from "react";

import rate from "@/shared/assets/cabinet/myrate.png";
import rate2 from "@/shared/assets/cabinet/myrate2.png";

const CardRate = () => {
  return (
    <div className="relative flex flex-col gap-[108px] sm:gap-[41px] lg:gap-2 bg-[#3831BF] rounded-[20px] p-4 sm:p-5 lg:p-[50px] w-full">
      <img className="absolute top-0 left-[19%] lg:h-full hidden 2xl:block z-0" src={rate.src} alt="" />
      <img
        className="absolute h-[237px] sm:h-[260px]! top-[15px] sm:top-[3px] left-0.5 lg:h-full block 2xl:hidden"
        src={rate2.src}
        alt=""
      />
      <div className="flex flex-col gap-1 lg:gap-0 z-10">
        <div className="flex justify-between items-center w-full">
          <span className="text-[32px] sm:text-[40px] text-[#FFFFFF] font-medium leading-[100%] tracking-[0.05em]">
            1 месяц
          </span>
          <button className="bg-white cursor-pointer text-[14px] font-semibold sm:text-[20px] p-2.5 sm:px-5 sm:py-[15px] lg:p-5 rounded-[20px] text-[#3831BF] leading-[80%] tracking-[0.05em]">
            Текущий тариф
          </button>
        </div>
        <div className="flex flex-col w-full text-[14px] sm:text-[20px] text-[#FFFFFFCC] leading-[120%] tracking-[0%] font-medium">
          <span>оплачено</span>
          <span>c 21.09.2025</span>
          <span>по 21.10.2025</span>
        </div>
      </div>
      <div className="flex lg:justify-end text-[#FFFFFF] w-full z-10">
        <span className="text-[40px] sm:text-[64px] font-bold leading-[100%] tracking-[0.05em]">330 ₽</span>
      </div>
    </div>
  );
};

export default CardRate;

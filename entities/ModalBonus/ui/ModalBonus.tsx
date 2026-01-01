/* eslint-disable @next/next/no-img-element */
import React from "react";

import bonus from "@/shared/assets/home/bonus.png";
import Link from "next/link";

const ModalBonus = () => {
  return (
    <div className="w-full flex flex-col p-[30px] md:p-[50px] ">
      <div className="flex flex-col gap-2 sm:gap-5   w-full max-w-[400px] md:max-w-[500px] lg:max-w-[714px] ">
        <h1 className="leading-[100%] text-[#3831BF]  font-bold uppercase tracking-[-0.05em] text-[18px] sm:text-[32px] lg:text-[40px]">
          Зарегистрируйтесь, чтобы получить 100 токенов бесплатно.
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex justify-end">
          <img src={bonus.src} className="sm:w-[300px] sm:h-[159px] lg:w-[469px] lg:h-[259px]" alt="" />
        </div>

        <Link
          href={"/select-register"}
          className="p-[36.5px] w-full text-center rounded-[60px] tracking-[-0.05em] bg-[#3831BF] text-[#D9D9D9] leading-none transition-all cursor-pointer text-[20px] lg:text-[32px] font-semibold"
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default ModalBonus;

"use client";

import InputForm from "@/shared/ui/InputForm";
import React, { useState } from "react";

const TypeWork = ({ onClick }: { onClick?: () => void }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex  flex-wrap xl:flex-nowrap w-full gap-1 xl:gap-[15px] mb-[15px]">
      <button onClick={onClick} className="relative cursor-pointer">
        <div className="bg-[#3831BF] h-[47px] absolute -top-8 w-full z-10 py-2.5 rounded-[10px] text-center">
          <span className="text-white text-[16px] font-semibold leading-[80%] tracking-[-0.05em]">За 999 руб.</span>
        </div>
        <div className="py-[18px] relative px-5 bg-white text-[16px] lg:text-[20px] font-semibold rounded-[20px] z-20">
          Диплом
        </div>
      </button>
      <button
        onClick={onClick}
        className="py-[18px] cursor-pointer px-5 bg-white text-[16px] lg:text-[20px] font-semibold rounded-[20px]"
      >
        Реферат
      </button>
      <button
        onClick={onClick}
        className="py-[18px] cursor-pointer px-5 bg-white text-[16px] lg:text-[20px] font-semibold rounded-[20px]"
      >
        Сочинение/эссе
      </button>
      <button
        onClick={onClick}
        className="py-[18px] cursor-pointer px-5 bg-white text-[16px] lg:text-[20px] font-semibold rounded-[20px]"
      >
        Курсовая работа
      </button>
      <button
        onClick={onClick}
        className="py-[18px] cursor-pointer px-5 bg-white text-[16px] lg:text-[20px] font-semibold rounded-[20px]"
      >
        Научная статья
      </button>

      <div className="w-full xl:max-w-[361px] font-semibold">
        <InputForm
          variant={1}
          name={"search"}
          placeholder="Другое"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TypeWork;

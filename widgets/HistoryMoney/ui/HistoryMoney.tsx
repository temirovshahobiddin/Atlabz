"use client";

import HistoryB from "@/shared/assets/icons/HistoryB";
import HistoryI from "@/shared/assets/icons/HistoryI";
import HistoryLeft from "@/shared/assets/icons/HistoryLeft";
import HistoryMarkers from "@/shared/assets/icons/HistoryMarkers";
import HistoryRight from "@/shared/assets/icons/HistoryRight";
import HistoryTwo from "@/shared/assets/icons/HistoryTwo";
import HistoryU from "@/shared/assets/icons/HistoryU";
import React, { useState } from "react";

import Image from "next/image";

import history from "@/shared/assets/premium/history.png";
import Button from "@/shared/ui/Button";

const HistoryMoney = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <div className="flex flex-col gap-[15px] w-full ">
        <h1 className="title-1  max-w-[839px]">История денег</h1>
        <div className="flex items-center gap-0.5 h-[27px] sm:h-10">
          <button className="cursor-pointer">
            <HistoryRight />
          </button>
          <button className="cursor-pointer">
            <HistoryLeft />
          </button>
          <select
            className="bg-white rounded-[5px] text-[12px] py-[5.1px] sm:text-[20px] sm:py-[7.2px]"
            name="Обычный"
            id=""
          >
            <option value="">Обычный</option>
          </select>
          <button className="cursor-pointer">
            <HistoryB />
          </button>
          <button className="cursor-pointer">
            <HistoryU />
          </button>
          <button className="cursor-pointer">
            <HistoryI />
          </button>
          <button className="cursor-pointer">
            <HistoryTwo />
          </button>
          <button className="cursor-pointer">
            <HistoryMarkers />
          </button>
        </div>
        <div className="flex flex-col xl:flex-row gap-[15px]">
          <div className="xl:max-w-[893px] w-full">
            <div className="bg-white rounded-[20px] py-6 px-4 sm:p-5 lg:p-[30px] w-full">
              <h2 className="text-[20px] sm:text-[36px] leading-[100%] tracking-[-0.05em] font-bold">Введение</h2>
              <p className="text-[16px] sm:text-[20px] mt-5">
                Реферат посвящен настольной игре Абака, которая привлекла внимание игроков в 80-е и 90-е годы, особенно
                среди студентов МФТИ. В работе рассматривается основные правила игры, механика броска костей и подсчет
                очков с использованием специальной таблицы. Обращается внимание на сочетание стратегии и случайности,
                что делает игру увлекательной и азартной. Также представлена информация о популярности Абаки в
                студенческой среде и её влияние на развитие дружеских отно
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] w-full">
            <div className="flex gap-[15px]">
              <div className="bg-white px-[54.5px] py-[27.5px] rounded-[20px] max-h-[254px] max-w-[438px] w-full hidden xl:block">
                <Image src={history.src} width={329} height={199} alt="" />
              </div>
              <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
                <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
                  Хочешь 5+? Проверь текст, измени пункты, которые тебе не нравятся.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[53px] sm:gap-[43px] bg-[#3831BF] text-white rounded-[20px] p-5  w-full">
                <div className="flex justify-between">
                  <span className="text-[20px] uppercase sm:text-[32px] font-bold leading-[100%] tracking-[-0.05em]">
                    Презентация
                  </span>
                  <span>
                    <button
                      className={`
          relative inline-flex h-8 cursor-pointer w-[84px] items-center rounded-full transition-colors duration-200 focus:outline-none
          focus:ring-2 focus:ring-[#3831BF] focus:ring-opacity-50 bg-[#E7EBEE]
          
        `}
                      onClick={() => setIsActive(!isActive)}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`
            inline-block h-[26px] w-[39px] transform rounded-full bg-[#3831BF] shadow-md transition-transform duration-200
            ${isActive ? "translate-x-10" : "translate-x-1"}
          `}
                      />
                    </button>
                  </span>
                </div>
                <div className="flex justify-end text-[32px] w-full sm:text-[40px] font-bold leading-[100%] tracking-[-0.05em] float-right">
                  <span>199 руб</span>
                </div>
              </div>
              <Button>Купить презентацию</Button>
              <Button>Скачать работу </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryMoney;

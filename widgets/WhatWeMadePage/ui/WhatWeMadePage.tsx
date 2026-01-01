import React from "react";
import CheckMark from "@/shared/assets/icons/CheckMark";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import Crown from "@/shared/assets/icons/Crown";
import Star from "@/shared/assets/icons/Star";
import Textarea from "@/shared/ui/Texterea";
import Files from "@/shared/assets/icons/Files";
import Procent from "@/shared/assets/icons/Procent";
import TimeIcon from "@/shared/assets/icons/Time";
import CardAwards from "@/entities/CardAwards";

const awards = [
  {
    icon: <TimeIcon />,
    title: "Ответ за 30 секунд",
  },
  {
    icon: <Files />,
    title: "Решаем задачи по 20+ предметам",
  },
  {
    icon: <Procent />,
    title: "В 5 раз дешевле репетитора",
  },
];

const WhatWeMadePage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[1034px] w-full mb-[30px]">
        <h1 className="title-1 text-center sm:text-start">Вот что у насполучилось</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-[15px] w-full">
        <Textarea placeholder="Тарифы" />

        <div className="hidden lg:flex flex-col gap-[29px] bg-white rounded-[20px] py-10 px-[30px]">
          <div className="flex gap-2.5 items-center ">
            <div className="w-[57px] h-[57px]">
              <Crown />
            </div>
            <h2 className="text-[24px] text-[#1D1D1D] font-bold leading-[120%] tracking-[0%]">
              Подписка с безлимитом токенов{" "}
            </h2>
          </div>
          <ul className="flex flex-col gap-[15px] text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Решай задачи онлайн без ограничений</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Поддержка по 160+ предметам</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Доступ к базе готовых решений и конспектов</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Бесплатные работы каждый месяц</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Экономь время и деньги — учись удобнее и быстрее</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-2.5 lg:hidden justify-between items-center w-full bg-white p-5 rounded-[10px] cursor-pointer select-none">
          <div className="flex items-center gap-2.5 text-[16px] font-medium leading-[100%] tracking-[-0.05em]">
            <Star /> <span>С подпиской — безлимит и бонусы для учёбы</span>
          </div>
          <span className={`transition-transform duration-300 ease-in-out`}>
            <ChevronDown />
          </span>
        </div>

        <div className="hidden sm:flex lg:hidden w-full gap-2.5 text-center">
          {awards.map((item, idx) => (
            <CardAwards key={idx} title={item.title} icon={item.icon} maxW="236" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeMadePage;

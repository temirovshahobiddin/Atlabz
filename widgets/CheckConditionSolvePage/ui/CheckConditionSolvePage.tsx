"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

import task from "@/shared/assets/cabinet/task.png";
import Button from "@/shared/ui/Button";
import AccordionStar from "@/shared/ui/AccordionStar";
import CardAwards from "@/entities/CardAwards";

import TimeIcon from "@/shared/assets/icons/Time";
import Files from "@/shared/assets/icons/Files";
import Procent from "@/shared/assets/icons/Procent";
import { useRouter } from "next/navigation";

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

const CheckConditionSolvePage = () => {
  const router = useRouter();

  const handleConditionSolveClick = () => {
    router.push("/soon");
    setTimeout(() => router.push("/chat-ai"), 12000);
  };
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Проверь условие</h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Отредактируй, что бы нейросеть поняла задачу
        </p>
      </div>
      <div className="flex gap-[15px] w-full lg:h-[504px]">
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col lg:flex-row gap-[15px] h-full">
            <div className="bg-[#E7EBEE] rounded-[20px] flex justify-center items-center  p-5 w-full lg:max-w-[439px]">
              <img src={task.src} alt="" />
            </div>
            <div className="bg-white  text-[20px] lg:max-w-[892px] w-full rounded-[20px] p-[30px] flex flex-col gap-2.5">
              <div className="bg-[#E7EBEE] h-full text-[16px] leading-[200%] tracking-[-0.05em] custom-scroll py-5 px-[15px] rounded-[10px] overflow-y-auto">
                На рёбрах AB и BC треугольной пирамиды ABCD отмечены точки M и N соответственно, причём AM:MB=CN:NB=1:2
                . Точки P и Q - середины рёбер DA и DC соответственно. Докажите, что точки P , Q , M и N Лежат в одной
                плоскости. Найдите, в каком отношении эта плоскость делит объём пирамиды
              </div>

              <Button onClick={handleConditionSolveClick} className="block lg:hidden">
                Продолжить
              </Button>
            </div>
          </div>

          <Button onClick={handleConditionSolveClick} className="hidden lg:block">
            Продолжить
          </Button>
        </div>
        <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
          <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
            Проверь, всё ли правильно распозналось — от этого зависит точность решения AtLabs.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] mt-5">
        <div className="block lg:hidden">
          <AccordionStar />
        </div>
        <div className="flex lg:hidden w-full gap-2.5 text-center">
          {awards.map((item, idx) => (
            <CardAwards key={idx} title={item.title} icon={item.icon} maxW="236" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckConditionSolvePage;

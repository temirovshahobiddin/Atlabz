"use client";

import CheckMark from "@/shared/assets/icons/CheckMark";
import Crown from "@/shared/assets/icons/Crown";
import Files from "@/shared/assets/icons/Files";
import Procent from "@/shared/assets/icons/Procent";
import Textarea from "@/shared/ui/Texterea";
import TimeIcon from "@/shared/assets/icons/Time";
import CardAwards from "@/entities/CardAwards";
import AccordionStar from "@/shared/ui/AccordionStar";
import NavBarServices from "@/features/NavBarServices";
import { useRouter } from "next/navigation";
import TypeWork from "@/features/TypeWork";
import InputForm from "@/shared/ui/InputForm";
import { useState } from "react";

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

const PreChooseTypeWorkPage = () => {
  const [typeWork, setTypeWork] = useState<boolean>(false);
  const router = useRouter();

  return (
    <section>
      <NavBarServices />
      <div className="flex flex-col gap-[15px]  w-full mb-10">
        <div className="flex justify-between w-full">
          <h1 className="title-1 max-w-[893px]">Выбери тип работы</h1>
        </div>
      </div>

      {typeWork ? (
        <div className="flex flex-col gap-2 lg:bg-white lg:p-[30px] rounded-[20px] mb-[30px] max-w-[893px]">
          <InputForm label="Тип работы" placeholder="Реферат" name={""} />
          <div className="flex gap-[9px] items-center justify-center">
            <svg width="339" height="1" viewBox="0 0 339 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="339" y2="0.5" stroke="#1D1D1D" stroke-opacity="0.4" />
            </svg>

            <p>необязательно</p>
            <svg width="339" height="1" viewBox="0 0 339 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="339" y2="0.5" stroke="#1D1D1D" stroke-opacity="0.4" />
            </svg>
          </div>
          <InputForm label="Предмет" placeholder="Введите название" name={""} />
          <InputForm label="Требования" placeholder="Опишите требования" name={""} />
        </div>
      ) : (
        <TypeWork onClick={() => setTypeWork(true)} />
      )}

      <div className="flex flex-col lg:flex-row gap-[15px] w-full">
        <Textarea
          onClick={() => router.push("/premium/check-content")}
          placeholder="Введи или прикрепи задачу (текст, фото, файл)"
        />

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
        <div className="block lg:hidden">
          <AccordionStar premium />
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

export default PreChooseTypeWorkPage;

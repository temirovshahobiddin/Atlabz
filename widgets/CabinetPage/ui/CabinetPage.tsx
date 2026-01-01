"use client";

import CardCabinetServices from "@/entities/CardCabinetServices";
import Button from "@/shared/ui/Button/ui/Button";
import React from "react";

import { useRouter } from "next/navigation";
import Balance from "@/features/Balance";
import CardTasks from "@/entities/CardTasks";

import control from "@/shared/assets/cabinet/control.png";
import control2 from "@/shared/assets/cabinet/control2.png";
import control3 from "@/shared/assets/cabinet/control3.png";
import balance1 from "@/shared/assets/cabinet/balance1.png";
import balance2 from "@/shared/assets/cabinet/balance2.png";
import balance3 from "@/shared/assets/cabinet/balance3.png";
import task from "@/shared/assets/cabinet/task.png";
import MobCardCabinetServices from "@/entities/MobCardCabinetServices";
import Alert from "@/shared/assets/icons/Alert";
import Link from "next/link";
import { title } from "process";

const cardFirst = [
  {
    title: "Решить задачу любой сложности",
    imageSrc: control2.src,
    description: "Разберёмся в домашках, тестах, лабах и контрольных по 160+ предметам — от права до высшей математики",
    ButtonComponent: <Button variant={1}>Решить за 30 секунд</Button>,
    link: "/non-premium/solving-problem",
  },
  {
    title: "Написать научную работу",
    imageSrc: control3.src,
    description:
      "Уникальные рефераты, эссе и курсовые за 5 минут — на основе реальных источников, оригинальность текста (95%+)",
    ButtonComponent: <Button variant={1}>Решить за 30 секунд</Button>,
    link: "/non-premium/choose-type-work",
  },
  {
    title: "Помочь с контрольной",
    imageSrc: control.src,
    description: "Быстрая помощь с контрольными и проверочными: поможем решить и разобраться",
    ButtonComponent: <Button variant={1}>Решить за 30 секунд</Button>,
    link: "/non-premium/help-exam",
  },
];

const cardBalance = [
  {
    iconSrc: balance1.src,
    title: "Задачи",
    balance: "∞",
  },
  {
    iconSrc: balance2.src,
    title: "Работы",
    balance: "110",
  },
  {
    iconSrc: balance3.src,
    title: "Контрольные",
    balance: "110",
  },
];

const tasksData = [
  {
    id: 1,
    imageSrc: task.src,
  },
  {
    id: 2,
    imageSrc: task.src,
  },
  {
    id: 3,
    imageSrc: task.src,
  },
];

const CabinetPage = () => {
  const router = useRouter();
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Привет Михаил</h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Готов помочь с любой задачей прямо сейчас
        </p>
      </div>
      <div className="flex gap-[15px] flex-col lg:flex-row mb-20  xl:mb-[30px]">
        <div className="hidden gap-2 sm:gap-2.5 xl:gap-[15px] grid-cols-2 xl:grid-cols-3 lg:grid">
          {cardFirst.map((card, index) => (
            <div key={index} className="mb-[30px]">
              <CardCabinetServices
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                ButtonComponent={<Button variant={1}>Решить за 30 секунд</Button>}
                onClick={() => router.push(card.link)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-[7px] sm:gap-2.5 grid-cols-2 mb-px sm:mb-[25px] w-full lg:hidden">
          {cardFirst.map((card, index) => (
            <div key={index}>
              <MobCardCabinetServices title={card.title} imageSrc={card.imageSrc} link={card.link} />
            </div>
          ))}
        </div>
        <div className="relative flex flex-col gap-2.5 w-full lg:max-w-[438px] text-center">
          <div className="lg:absolute -top-20 py-6 px-4 w-full rounded-[20px] bg-white flex gap-2 items-center">
            <Alert />
            <span>У тебя осталось мало токенов</span>
          </div>
          <Balance cardBalance={cardBalance} />
          <Button variant={1} className="w-full uppercase" onClick={() => router.push("/balance/top-up")}>
            Пополнить
          </Button>
          <Button variant={3} className="w-full uppercase" onClick={() => router.push("/balance/top-up")}>
            Попробуй безлимит
          </Button>
          <p className="text-[#1D1D1D99]">бонус 2 работы бесплатно</p>
        </div>
      </div>

      <div className="flex flex-col gap-[30px] ">
        <h1 className="title-1 block xl:hidden">Последние работы</h1>
        <h1 className="title-1 hidden xl:block">Мои задачи</h1>
        {/* <div className="grid gap-2 sm:gap-2.5 xl:gap-[15px]  text-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
        <div className="flex flex-col gap-5 text-center justify-center w-full">
          <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
            У тебя еще нет решенных задач
          </p>
          <Link href="/profile/problem-solve">
            <Button>Попробовать бесплатно</Button>
          </Link>
        </div>
        {/* {tasksData.map(task => (
            <CardTasks key={task.id} imageSrc={task.imageSrc} />
          ))} */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default CabinetPage;

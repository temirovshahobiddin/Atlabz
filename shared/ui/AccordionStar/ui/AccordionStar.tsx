/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import BirdIcon from "@/shared/assets/icons/BirdIcon";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import Star from "@/shared/assets/icons/Star"; // Предполагается, что у вас есть компонент Star
import React, { useState } from "react";

const AccordionStar = ({ premium = false }: { premium?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full gap-1">
      <div
        className="flex gap-2.5 lg:hidden justify-between items-center p-5 w-full bg-white rounded-[10px] cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2.5 text-[16px] font-medium leading-[100%] tracking-[-0.05em]">
          <Star />
          <span>С подпиской — безлимит и бонусы для учёбы</span>
        </div>
        {!premium && (
          <span
            className={`transition-transform duration-300 ease-in-out rotate-180  ${
              isOpen ? "rotate-360" : "rotate-0"
            }`}
          >
            <ChevronDown />
          </span>
        )}
      </div>

      {/* Блок с балансами (анимированное появление) */}
      {!premium && (
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2.5 bg-white rounded-[20px] p-5">
            <h2>Подписка с безлимитом токенов 👑</h2>
            <ul>
              <li className="flex gap-2.5">
                <BirdIcon />
                <span>Решай задачи онлайн без ограничений</span>
              </li>
              <li className="flex gap-2.5">
                <BirdIcon />
                <span>Поддержка по 160+ предметам</span>
              </li>
              <li className="flex gap-2.5">
                <BirdIcon />
                <span>Бесплатные работы каждый месяц</span>
              </li>
              <li className="flex gap-2.5">
                <div className="">
                  <BirdIcon />
                </div>
                <span>Экономь время и деньги — учись удобнее и быстрее</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionStar;

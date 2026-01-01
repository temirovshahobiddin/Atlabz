import CheckMark from "@/shared/assets/icons/CheckMark";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import Crown from "@/shared/assets/icons/Crown";
import Star from "@/shared/assets/icons/Star";
import InputForm from "@/shared/ui/InputForm";
import Textarea from "@/shared/ui/Texterea";
import React from "react";

const ChooseTypeJobPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Выбери тип работы</h1>
        <p className="hidden xl:block text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Готов помочь с любой задачей прямо сейчас
        </p>
      </div>

      <form className="flex flex-col gap-[30px]" action="">
        <div className="flex flex-col gap-2 lg:bg-white lg:p-[30px] rounded-[20px] max-w-[893px]">
          <InputForm label="Тип работы" placeholder="Реферат" name={""} />
          <InputForm label="Предмет" placeholder="Реферат" name={""} />
          <InputForm label="Требования" placeholder="Реферат" name={""} />
        </div>

        <div className="flex flex-col lg:flex-row gap-[15px] w-full">
          <Textarea placeholder="Введи или прикрепи задачу (текст, фото, файл)" />

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
        </div>
      </form>
    </section>
  );
};

export default ChooseTypeJobPage;

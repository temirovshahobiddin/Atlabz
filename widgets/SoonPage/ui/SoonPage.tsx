import CheckMark from "@/shared/assets/icons/CheckMark";
import Crown from "@/shared/assets/icons/Crown";
import ProgressSpinner from "@/shared/ui/ProgressSpinner.tsx";
import React from "react";

const stages = ["Ищу источники", "Пишу введение", "Заканчиваю главу", "Формирую содержание"];

const SoonPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[57px] text-center lg:text-start  w-full">
        <h1 className="title-1 max-w-[893px]">Уже скоро</h1>
        <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between">
          <div className="hidden lg:block">
            <ProgressSpinner stages={stages} autoStart time={10} />
          </div>
          <div className="block lg:hidden">
            <ProgressSpinner size={180} thickness={20} autoStart stages={stages} time={10} />
          </div>

          <div className="flex w-full text-start lg:max-w-[439px] flex-col gap-[29px] bg-white rounded-[20px] py-10 px-[30px]">
            <div className="flex gap-2.5 items-center ">
              <div className="w-[57px] h-[57px]">
                <Crown />
              </div>
              <h2 className="text-[20px] sm:text-[24px] text-[#1D1D1D] font-bold leading-[120%] tracking-[0%]">
                Подписка с безлимитом токенов{" "}
              </h2>
            </div>
            <ul className="flex flex-col gap-[15px] text-[16px] sm:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
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
        </div>
      </div>
    </section>
  );
};

export default SoonPage;

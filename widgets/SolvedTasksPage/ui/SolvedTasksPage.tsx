import Button from "@/shared/ui/Button";
import SolvingProblemSlider from "@/shared/ui/SolvingProblemSlider";
import Link from "next/link";

import React from "react";

const SolvedTasksPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">РЕШЁННие ЗАДАЧи</h1>
      </div>
      <div className="flex flex-col gap-[30px] bg-white rounded-[40px] p-5 sm:p-[30px]">
        <div className="flex gap-5 items-center">
          <span className="py-[15px] px-2.5 text-[14px] lg:text-[24px] leading-[80%] font-semibold tracking-[-0.05em] bg-[#E7EBEE] rounded-[10px]">
            Нологовое прово
          </span>
          <span className="text-[#1D1D1D66] text-[12px] sm:text-[14px] lg:text-[20px] leading-[100%] tracking-[-0.05em]">
            6 декабря 2024
          </span>
        </div>

        {/* <div className="flex items-center w-full border-l-4 border-l-[#3831BF] pl-4 lg:pl-8 h-[124px]">
          <span className="text-[20px] w-full sm:text-[28px] lg:text-[40px] max-w-[652px] lg:max-w-full uppercase  leading-[100%] tracking-[-0.05em] font-bold">
            «Постройте диаграмму, показывающую увеличение осведомленности о бренде. Данные: - 2023 год: 59% - 2024 год:
            63%»
          </span>
        </div> */}
      </div>

      <div className="flex flex-col gap-4 sm:gap-10 mt-4 sm:mt-10">
        <span className="flex flex-col gap-5">
          <h1 className="uppercase font-bold text-[20px] sm:text-[28px] lg:text-[40px] leading-[100%] tracking-[-0.05em]">
            Условие:
          </h1>
          <p className="uppercase font-medium text-[12px] sm:text-[14px] lg:text-[20px] leading-[100%] tracking-[-0.05em]">
            Сделай диаграмма на которой будет показано увеличение осведомленности брендом. В 2023 году она составляла
            59% В 2024 – 63%
          </p>
        </span>
        <span className="flex flex-col gap-5">
          <h1 className="uppercase font-bold text-[20px] sm:text-[28px] lg:text-[40px] leading-[100%] tracking-[-0.05em]">
            решение:
          </h1>
          <p className="uppercase font-medium text-[12px] sm:text-[14px] lg:text-[20px] leading-[100%] tracking-[-0.05em]">
            На диаграмме представлено увеличение осведомленности о бренде в процентах за два года. В 2023 году уровень
            осведомленности составил 59%, а в 2024 году он увеличился до 63%. Диаграмма мо...
          </p>
        </span>
        <Link href="/chat-ai">
          <Button className="hidden lg:block">Посмотреть решение</Button>
        </Link>
      </div>
      <SolvingProblemSlider title="Похожие задачи" />
    </section>
  );
};

export default SolvedTasksPage;

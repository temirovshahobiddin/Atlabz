/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/shared/ui/Button";

import task from "@/shared/assets/cabinet/task.png";

const ProblemSolvePage = () => {
  return (
    <section className="mb-[52px]">
      <div className="flex flex-col gap-[15px] w-full mb-[15px]">
        <h1 className="title-1">Решение задач</h1>
      </div>
      <div className="flex flex-col lg:flex-row  w-full gap-4 sm:gap-5 xl:gap-[15px]">
        <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[30px] w-full">
          <div className="xl:flex flex-col gap-4 sm:gap-2 w-full">
            <div className="flex gap-[129px] sm:gap-[146px] lg:gap-0 lg:justify-between">
              <p className="text-[#1D1D1D] text-[20px] sm:text-[24px] xl:text-[32px] font-medium leading-[80%] tracking-[0.05em]">
                Условие
              </p>
            </div>
            <div className="bg-white rounded-[20px] px-11 py-[133px] w-full ">
              <img src={task.src} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-2.5 xl:max-w-[893px] w-full">
            <p className="text-[#1D1D1D] text-[20px] sm:text-[24px] xl:text-[32px] font-medium leading-[80%] tracking-[0.05em]">
              Решение
            </p>
            <div className="bg-white rounded-[20px] px-11 py-[133px] w-full">
              <img src={task.src} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full xl:max-w-[893px] xl:mt-[35px]">
          <Button variant={1}>Открыть чат</Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvePage;

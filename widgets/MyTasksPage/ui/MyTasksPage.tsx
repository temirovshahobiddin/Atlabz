import React from "react";

import SearchFilter from "@/features/SearchFilter";
import ProblemSolve from "@/features/ProblemSolve/ui/ProblemSolve";

import Button from "@/shared/ui/Button";

const MyTasksPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Мои задачи</h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Готов помочь с любой задачей прямо сейчас
        </p>
      </div>
      <div className="max-w-[893px] w-full mb-4 sm:mb-5 xl:mb-[52px]">
        <SearchFilter />
      </div>
      <div className="mb-16 sm:mb-20 xl:mb-[150px]">
        <ProblemSolve />
      </div>
      <div className="flex flex-col gap-4 sm:gap-2.5 xl:gap-[30px]">
        <h1 className="title-1">Хочешь ещё 2 работы бесплатно?</h1>
        <Button variant={1}>Подключить подписку</Button>
      </div>
    </section>
  );
};

export default MyTasksPage;

import ProgressSpinner from "@/shared/ui/ProgressSpinner.tsx";
import React from "react";

const stages = [
  "Изучаю тему и требования",
  "Подбираю надёжные источники",
  "Формирую структуру и текст",
  "Проверяю уникальность и ошибки",
];

const WorkingPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[57px] text-center xl:text-start  w-full">
        <h1 className="title-1 max-w-[893px] mx-auto xl:mx-0">Работаю</h1>
        <div className="flex flex-col gap-8 xl:gap-0 xl:flex-row justify-center xl:justify-between">
          <div className="hidden xl:block">
            <ProgressSpinner stages={stages} autoStart time={10} />
          </div>
          <div className="block xl:hidden">
            <ProgressSpinner size={180} thickness={20} autoStart stages={stages} time={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPage;

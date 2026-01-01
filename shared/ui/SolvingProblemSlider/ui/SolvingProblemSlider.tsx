import React from "react";
import Button from "../../Button";
import CardSolvedTasks from "@/entities/CardSolvedTasks";

const solvedTasks = [
  {
    tag: "Налоговое право",
    title: "Губернатором Санкт-Петербурга принято…",
    subtitle: "Губернатором Санкт-Петербурга принято…",
    date: "6 декабря 2024",
    link: "/non-premium/solved-tasks",
  },
  {
    tag: "Налоговое право",
    title: "Губернатором Санкт-Петербурга принято…",
    subtitle: "Губернатором Санкт-Петербурга принято…",
    date: "6 декабря 2024",
    link: "/non-premium/solved-tasks",
  },
  {
    tag: "Налоговое право",
    title: "Губернатором Санкт-Петербурга принято…",
    subtitle: "Губернатором Санкт-Петербурга принято…",
    date: "6 декабря 2024",
    link: "/non-premium/solved-tasks",
  },
  {
    tag: "Налоговое право",
    title: "Губернатором Санкт-Петербурга принято…",
    subtitle: "Губернатором Санкт-Петербурга принято…",
    date: "6 декабря 2024",
    link: "/non-premium/solved-tasks",
  },
  {
    tag: "Налоговое право",
    title: "Губернатором Санкт-Петербурга принято…",
    subtitle: "Губернатором Санкт-Петербурга принято…",
    date: "6 декабря 2024",
    link: "/non-premium/solved-tasks",
  },
];

const SolvingProblemSlider = ({ title = "РЕШЁННие ЗАДАЧи" }: { title?: string }) => {
  return (
    <>
      <div className="mt-[60px] xl:mt-[150px] max-md:mt-20 max-sm:mt-16">
        <h2 className="text-(--blue) text-[32px] sm:text-[40px] xl:text-[64px] leading-[100%] font-bold uppercase tracking-[-0.05em]">
          {title}
        </h2>

        {/* СЛАЙДЕР */}
        <div
          className="
                flex gap-1 sm:gap-2.5 lg:gap-[15px] mt-[30px]
                overflow-x-auto no-scrollbar
                scroll-smooth scroll-p-4
                snap-x snap-mandatory
                pb-2.5 custom-scroll
            "
        >
          {solvedTasks.map((item, idx) => (
            <CardSolvedTasks
              key={idx}
              tag={item.tag}
              title={item.title}
              subtitle={item.subtitle}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SolvingProblemSlider;

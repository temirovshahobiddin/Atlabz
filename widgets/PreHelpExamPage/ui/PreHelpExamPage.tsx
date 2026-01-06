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
const PreHelpExamPage = () => {
  const router = useRouter();

  const handleHelpExamClick = () => {
    router.push("/working");
    setTimeout(() => router.push("/premium/check-condition"), 12000);
  };
  return (
    <section>
      <NavBarServices />
      <div className="flex flex-col gap-[15px]  w-full mb-[30px]">
        <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
          <h1 className="title-1">Помочь с контрольной</h1>
          <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
            Просто введи условие или прикрепи фото — мы быстро подготовим решение для тебя.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[15px] w-full">
        <Textarea onSubmitClick={handleHelpExamClick} placeholder="Введи или прикрепи задачу (текст, фото, файл)" />

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

export default PreHelpExamPage;

"use client";

import CardCondition from "@/entities/CardCondition";

import { taskCondition } from "@/app/moki";
import Button from "@/shared/ui/Button";
import { useRouter } from "next/navigation";

const PreCheckCondition = () => {
  const router = useRouter();

  const handleCheckCoditionClick = () => {
    router.push("/soon");
    setTimeout(() => router.push("/premium/check-condition-save"), 12000);
  };
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Проверь условие</h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Отредактируй, что бы нейросеть поняла задачу
        </p>
      </div>
      <div className="flex flex-col gap-1 sm:gap-2.5 xl:gap-[15px] w-full">
        {taskCondition.map((item, idx) => (
          <CardCondition key={idx} title={item.ttile} img={item.img} decision={item.decision} />
        ))}
      </div>
      <div className="max-w-[893px] mx-auto xl:mx-0 w-full mt-[15px]">
        <Button onClick={handleCheckCoditionClick}>Условие коректно</Button>
      </div>
    </section>
  );
};

export default PreCheckCondition;

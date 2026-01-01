import Image from "next/image";

import { taskConditionSave } from "@/app/moki";

import CardConditionSave from "@/entities/CardConditionSave";

import condition from "@/shared/assets/premium/condition.png";
import Button from "@/shared/ui/Button";

const PreCheckConditionSave = () => {
  return (
    <section>
      {" "}
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Проверь условие</h1>
        <p className="text-[16px] sm:text-[20px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Отредактируй, что бы нейросеть поняла задачу
        </p>
      </div>
      <div className="flex gap-[15px] w-full">
        <div className="flex flex-col gap-[15px]">
          {taskConditionSave.map((item, idx) => (
            <CardConditionSave key={idx} title={item.ttile} text={item.text} />
          ))}

          <Button>Скачать 1 файлом</Button>
        </div>
        <div className="bg-white px-[108px] py-[47px] rounded-[20px] max-h-[381px] max-w-[438px] w-full hidden xl:block">
          <Image src={condition.src} width={222} height={287} alt="" />
        </div>
        <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
          <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
            Пролистай решение — AtLabs объяснит каждый шаг, если что-то непонятно.
          </span>
        </div>
      </div>
    </section>
  );
};

export default PreCheckConditionSave;

import React from "react";
import Button from "../../Button";

interface SolveNowProps {
  onClick?: () => void;
}

const SolveNow: React.FC<SolveNowProps> = ({ onClick }) => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-[60px] xl:mt-[150px] max-md:mt-20 max-sm:mt-16">
        <h3 className="title-1 text-(--blue) font-bold max-md:text-[40px] max-sm:text-[28px] uppercase">
          Начни решать задачи прямо сейчас
        </h3>
        <Button onClick={onClick}>Получить решение</Button>
        <p className="m-auto text-[#1D1D1D]/60 text-[24px] leading-[120%] max-lg:text-[20px] max-sm:text-[14px]">
          100 токенов бесплатно после регистрации
        </p>
      </div>
    </>
  );
};

export default SolveNow;

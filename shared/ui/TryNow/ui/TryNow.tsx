/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../Button";
import jn from "@/shared/assets/home/JustNow.png";
import Link from "next/link";

const TryNow = () => {
  return (
    <>
      <div className="flex flex-col relative justify-between bg-(--blue) w-full h-[450px] lg:h-[500px] xl:h-[600px] rounded-[30px] p-[40px] lg:p-[50px] xl:p-[60px] mt-[60px] lg:mt-[100px] max-md:h-[489px] max-sm:pb-4 max-sm:pt-6 max-sm:px-4 max-lg:p-5 max-sm:h-[370px]">
        <div className="flex flex-col gap-2 sm:gap-6 ">
          <h3 className="text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold uppercase leading-[100%] text-white max-md:text-[40px] max-sm:text-[28px]">
            Попробуйте прямо сейчас!
          </h3>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-medium leading-[120%] tracking-[0%] text-white max-w-[913px] w-full max-md:text-[20px] max-sm:text-[16px]">
            Получите готовое решение или совет уже через 30 секунд. Без подписки — первые 100 токенов бесплатно
          </p>
        </div>
        <div className="absolute w-full z-10 flex justify-end max-sm:bottom-[60px] bottom-[100px] lg:bottom-[80px] xl:bottom-[120px] right-5 sm:right-[50px] lg:right-[70px] xl:right-[100px] max-lg:bottom-20">
          <img
            src={jn.src}
            alt=""
            className="w-[479px] h-[479px] max-2xl:w-[280px] max-2xl:h-[280px] lg:w-[300px] lg:h-[300px] xl:w-[324px] xl:h-[324px] max-md:w-[188px] max-md:h-[188px]"
          />
        </div>
        <Link href="/premium/problem-solve" className="z-20">
          <Button variant={4}>
            Попробуй нашего ассистента
          </Button>
        </Link>
      </div>
    </>
  );
};

export default TryNow;

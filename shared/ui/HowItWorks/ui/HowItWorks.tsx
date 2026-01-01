/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../Button";
import Link from "next/link";

type Slide = {
  title: string;
  text: string;
  image: string; // src строки
};

const HowItWorks = ({ slides }: { slides: Slide[] }) => {
  return (
    <div id="howitworks" className="flex flex-col gap-3 sm:gap-5  lg:gap-[60px] mt-[60px] xl:mt-[100px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-(--blue) text-[32px] sm:text-[40px] xl:text-[64px] leading-[100%] font-bold uppercase tracking-[-0.05em] max-md:text-[40px] max-sm:text-[28px]">
          Как это работает
        </h2>
        <p className="text-(--blue)/60 text-[16px] sm:text-[20px] lg:text-[32px] leading-[120%] max-md:text-[20px] max-sm:text-[16px]">
          От запроса до готового решения — всего 30 секунд
        </p>
      </div>

      <div className="flex items-center overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x snap-mandatory scrollbar-none">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            {/* СЛАЙД */}
            <div className="relative rounded-[20px] h-[234px]  sm:h-[382px] lg:h-[330px] max-w-[234px] sm:max-w-[359px]  lg:max-w-[440px] w-full bg-white p-6 flex flex-col justify-between shrink-0 snap-center">
              <h4 className="z-10 text-[16px] sm:text-[24px] tracking-[-0.05em] leading-[100%] font-bold uppercase">
                {slide.title}
              </h4>

              <img className="absolute z-0 top-[50px] right-0" src={slide.image} alt="" />

              <p className="z-10  text-[12px]  sm:text-[18px] lg:text-[20px] leading-[120%] font-medium">
                {slide.text}
              </p>
            </div>

            {/* Разделитель (кроме последнего) */}
            {index !== slides.length - 1 && (
              <div className="h-[163] sm:h-[315px] max-w-[26px] sm:max-w-[15px] w-full bg-(--blue) rounded-[10px] shrink-0 snap-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <Link href={"/premium/problem-solve"}>
        <Button className="lg:mt-[-30px]" variant={1}>
          Попробовать бесплатно
        </Button>
      </Link>
    </div>
  );
};

export default HowItWorks;

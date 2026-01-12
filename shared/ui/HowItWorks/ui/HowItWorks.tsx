/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Button from "../../Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

type Slide = {
  title: string;
  text: string;
  image: string;
};

const HowItWorks = ({ slides }: { slides: Slide[] }) => {
  return (
    <div id="howitworks" className="flex flex-col gap-3 sm:gap-5 lg:gap-[60px] mt-[60px] xl:mt-[100px] overflow-hidden">
      <div className="flex flex-col gap-[15px]">
        <h2 className="text-(--blue) text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] leading-[100%] font-bold uppercase tracking-[-0.05em]">
          Как это работает
        </h2>
        <p className="text-(--blue)/60 text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[32px] leading-[120%]">
          От запроса до готового решения — всего 30 секунд
        </p>
      </div>

      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={0}
        className="w-full !overflow-visible"
      >
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <SwiperSlide className="!w-auto">
              <div className="relative rounded-[20px] h-[234px] sm:h-[382px] lg:h-[300px] xl:h-[330px] w-[234px] sm:w-[359px] lg:w-[360px] xl:w-[440px] bg-white p-6 flex flex-col justify-between">
                <h4 className="z-10 text-[16px] sm:text-[24px] lg:text-[20px] xl:text-[24px] tracking-[-0.05em] leading-[100%] font-bold uppercase">
                  {slide.title}
                </h4>
                <img className="absolute z-0 top-[50px] right-0 lg:max-w-[180px] xl:max-w-none" src={slide.image} alt="" />
                <p className="z-10 text-[12px] sm:text-[18px] lg:text-[16px] xl:text-[20px] leading-[120%] font-medium">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>

            {index !== slides.length - 1 && (
              <SwiperSlide className="!w-auto">
                <div className="h-[163px] sm:h-[315px] w-[26px] sm:w-[15px] bg-(--blue) rounded-[10px]"></div>
              </SwiperSlide>
            )}
          </React.Fragment>
        ))}
      </Swiper>

      <Link href={"/premium/problem-solve"}>
        <Button className="lg:mt-[-30px]" variant={1}>
          Попробовать бесплатно
        </Button>
      </Link>
    </div>
  );
};

export default HowItWorks;

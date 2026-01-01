/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, TouchEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/shared/ui/Button";

import book from "@/shared/assets/home/book.png";
import galstuk from "@/shared/assets/home/galstuk.png";
import heart from "@/shared/assets/home/heart.png";
import moneyy from "@/shared/assets/home/moneyy.png";

export default function SmartHelpSlider() {
  const slides = [
    { img: book.src, title: "Понять тему по вышмату за 5 минут" },
    { img: galstuk.src, title: "Подготовиться к собеседованию без стресса" },
    { img: heart.src, title: "Снять тревогу перед экзаменом" },
    { img: moneyy.src, title: "Составить бюджет за 2 минуты и перестать уходить в минус" },
  ];

  const slideVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      scale: 0.9,
      x: direction === 1 ? 150 : -150,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.9,
      x: direction === 1 ? -150 : 150,
    }),
  };

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // Свайпы
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = () => {
    if (!isDragging.current) isDragging.current = true;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) nextSlide();
    else if (endX - startX.current > 50) prevSlide();
    isDragging.current = false;
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = () => {
    if (!isDragging.current) return;
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const endX = e.clientX;
    if (startX.current - endX > 50) nextSlide();
    else if (endX - startX.current > 50) prevSlide();
    isDragging.current = false;
  };

  const [direction, setDirection] = useState(1);
  // 1 → листаем вперёд, -1 → назад

  const prevSlide = () => {
    setDirection(-1);
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-between sm:mt-[60px] lg:mt-[150px] max-xl:flex-col max-xl:items-center">
      <div className="max-md:flex max-md:flex-col max-md:gap-[10px] max-sm:gap-[8px]">
        <h4 className="max-w-[900px] w-full text-(--blue) font-bold text-[28px] sm:text-[40px] xl:text-[64px] uppercase leading-[100%]">
          Умный помощник на каждый день
        </h4>
        <p className="max-w-[900px] w-full text-(--blue)/60 text-[16px] sm:text-[20px] xl:text-[32px] leading-[120%] max-lg:mt-[10px] max-md:text-[20px] max-sm:text-[16px]">
          Развитие, финансы, правильные решения и новые горизонты — наш AI превращает сложное в простое, давая ответы за
          секунды.
        </p>
      </div>
      <div className="flex justify-center max-lg:justify-between max-lg:mt-[30px] items-center max-w-[740px] w-full ">
        <div>
          <Button variant={4} className="h-[296px] lg:hidden max-md:hidden" onClick={nextSlide}>
            {"<"}
          </Button>
        </div>
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="relative max-w-[740px] max-lg:max-w-[554px] max-md:max-w-[361px] max-md:h-[261px] w-full h-[561px] flex justify-center items-center cursor-grab select-none"
        >
          {/* Задний слой */}
          <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 bg-[#D9D9D9] w-[717px] max-lg:w-[575px] max-md:w-[330px] max-md:h-[250px] h-[469px] rounded-[20px] z-0"></div>

          {/* Анимируемая карточка */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute -top-2.5 sm:top-8 lg:top-14 left-40 sm:left-64 lg:left-80 -translate-x-1/2 bg-white w-[673px] max-lg:w-[554px] max-md:w-[310px] max-md:h-[250px] h-[448px] rounded-[20px] z-10 flex flex-col justify-center items-center shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
            >
              <img
                src={slides[current].img}
                alt="Слайд"
                className="w-[329px] h-[283px] object-contain mb-2 max-md:w-[169px] max-md:h-[146px] max-md:mb-0"
              />
              <p className="text-center max-w-[226px] sm:max-w-[398px] text-black font-extrabold text-[28px] leading-[34px] uppercase max-md:text-[16px] max-md:leading-[100%]">
                {slides[current].title}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Кнопки */}
          <div className="max-lg:hidden absolute max-w-[762px] w-full gap-[15px] flex justify-between left-[-15px] bottom-[-10px] text-[28px] font-medium text-gray-600 hover:text-black transition">
            <Button variant={4} onClick={nextSlide}>
              {"<"}
            </Button>
            <Button variant={4} onClick={prevSlide}>
              {">"}
            </Button>
          </div>
        </div>
        <div>
          <Button variant={4} className="h-[296px] lg:hidden max-md:hidden" onClick={prevSlide}>
            {">"}
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef, useCallback } from "react";
import Button from "../../Button";
import hero from "@/shared/assets/home/hero.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

import hero2 from "@/shared/assets/home/hero2.png";
import hero3 from "@/shared/assets/home/hero3.png";
import hero4 from "@/shared/assets/home/hero4.png";

const HeroBlock = ({
  title,
  description,
  sliderText,
  buttons = false,
  openModal,
  img,
}: {
  title: string;
  description: string;
  sliderText: string;
  buttons?: boolean;
  openModal?: () => void;
  img: string;
}) => {
  const pathname = usePathname();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Touch/swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselSlides = [
    {
      id: 1,
      img: hero.src,
      text: "Помощь с учебой",
    },
    {
      id: 2,
      img: hero2.src,
      text: 'Карьера и саморазвитие',
    },
    {
      id: 3,
      img: hero3.src,
      text: "Личные финансы",
    },
    {
      id: 4,
      img: hero4.src,
      text: "Психологическая поддержка",
    },
  ];

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(index > currentSlide ? 'left' : 'right');
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrentSlide(prev => (prev + 1) % carouselSlides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [carouselSlides.length, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setCurrentSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [carouselSlides.length, isAnimating]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlideData = carouselSlides[currentSlide];
  const prevSlideData = carouselSlides[(currentSlide - 1 + carouselSlides.length) % carouselSlides.length];
  const nextSlideData = carouselSlides[(currentSlide + 1) % carouselSlides.length];

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-[15px] w-full">
          <div className="flex justify-between max-lg:flex-col-reverse max-lg:gap-5">
            <h3
              className="max-w-[718px] lg:max-w-[1100px] w-full text-[32px] sm:text-[40px] xl:text-[64px] font-bold uppercase tracking-[-0.05em]
 leading-[100%] blue max-md:text-[40px]  max-sm:text-[32px]  max-sm:text-center"
            >
              {title}
            </h3>
            <div className="xl:max-w-[440px] w-full flex flex-col max-lg:flex-row gap-2.5 items-center max-sm:flex-col">
              <div className="w-full max-w-[416px]  xl:max-w-[440px] text-center">
                <div className="border border-(--gray) px-[25px] rounded-[20px] flex flex-col max-lg:flex-row items-center justify-center w-full h-[90px] bg-white max-sm:h-10  max-sm:m-auto">
                  <div className="flex items-center justify-center lg:w-full">
                    <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.8099 0.972485C14.2312 -0.324174 16.0657 -0.32417 16.487 0.972489L19.0982 9.00912C19.2866 9.589 19.827 9.98161 20.4367 9.98161H28.887C30.2504 9.98161 30.8172 11.7263 29.7142 12.5276L22.8778 17.4945C22.3846 17.8529 22.1782 18.4882 22.3666 19.0681L24.9778 27.1047C25.3991 28.4014 23.9151 29.4796 22.8121 28.6782L15.9757 23.7113C15.4824 23.3529 14.8145 23.3529 14.3212 23.7113L7.48481 28.6782C6.38181 29.4796 4.89773 28.4014 5.31904 27.1047L7.9303 19.0681C8.11872 18.4882 7.91231 17.8529 7.41903 17.4945L0.582662 12.5276C-0.520343 11.7263 0.04653 9.98161 1.40992 9.98161H9.86013C10.4699 9.98161 11.0102 9.589 11.1987 9.00912L13.8099 0.972485Z"
                        fill="#FDE049"
                      />
                    </svg>
                    <p className="text-[32px] text-[#1D1D1D]/40 font-bold leading-[120%] text-center max-sm:text-[20px]">
                      5.0
                    </p>
                  </div>
                  <p className=" text-[#1D1D1D]/40 leading-[120%] font-medium text-[20px] max-sm:text-[14px] w-full">
                    по отзывам пользователей
                  </p>
                </div>
              </div>
              <p className="text-center xl:m-auto max-w-[241px] text-[#1D1D1D]/40 leading-[120%] font-medium text-[20px] max-sm:text-[10px] w-full">
                на основе 1000+ сессий
              </p>
            </div>
          </div>

          <div className="xl:max-w-[500px] w-full flex flex-col gap-4 sm:gap-[30px] max-md:max-w-[718px]">
            <p
              className="text-[24px] xl:text-[32px] leading-[120%] tracking-[-0.05em]
 font-medium  max-md:text-[24px] max-sm:hidden"
            >
              {description}
            </p>
            <div 
              className="xl:hidden flex flex-col items-center w-screen -ml-5 overflow-hidden touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="relative w-[449px] h-[488px] max-md:w-[336px] max-md:h-[365px] overflow-hidden"
                style={{
                  transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                {carouselSlides.map((slide, index) => (
                  <img
                    key={slide.id}
                    alt=""
                    src={slide.img}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transform: isDragging && index === currentSlide ? `translateX(${dragOffset * 0.5}px)` : undefined
                    }}
                  />
                ))}
              </div>
              <div 
                className="relative w-full overflow-hidden"
                style={{
                  transform: isDragging ? `translateX(${dragOffset * 0.3}px)` : 'translateX(0)',
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                <div className="flex gap-2.5 h-[102px] max-sm:h-[53px] justify-center">
                  <div className="h-full w-[259px] max-sm:w-[171px] backdrop-blur-[25px] bg-linear-to-r bg-size-[200%_100%] bg-position-[right_center] from-white/0 to-white flex items-center justify-center">
                    <span className="text-[28px] max-sm:text-[16px] font-semibold bg-linear-to-r bg-size-[200%_100%] bg-position-[right_center] from-white/0 to-black bg-clip-text text-transparent transition-opacity duration-500">
                      {prevSlideData.text}
                    </span>
                  </div>

                  <div className="h-full w-[359px] z-20 max-sm:w-[171px] bg-white flex items-center justify-center text-[28px] max-sm:text-[16px] font-semibold">
                    <span className="transition-opacity duration-500">{currentSlideData.text}</span>
                  </div>

                  <div className="h-full w-[259px] max-sm:w-[171px] backdrop-blur-[25px] bg-linear-to-r from-white to-white/0 flex items-center justify-center">
                    <span className="text-[28px] max-sm:text-[16px] font-semibold bg-linear-to-r from-black to-white/0 bg-clip-text text-transparent transition-opacity duration-500">
                      {nextSlideData.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <p className="text-[16px] leading-[120%] max-w-[306px] m-auto font-medium">
                Решай задачи, принимай решения, развивайся — всё в одном месте.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 z-20">
              <Button onClick={openModal} variant={1}>
                Попробовать бесплатно
                <br />
                (100 токенов)
              </Button>
              <Link href={"#about"}>
                <Button variant={3}>Что умеет ассистент?</Button>
              </Link>
              {buttons ? (
                <div className="flex flex-col gap-2.5 z-20">
                  <div className="flex gap-2.5">
                    <Link className="w-full" href={"/premium/problem-solve"}>
                      <Button variant={3}>Решить задачу</Button>
                    </Link>
                    <Link className="w-full" href={"/premium/choose-type-work"}>
                      <Button variant={3}>Написать работу</Button>
                    </Link>
                  </div>
                  <Link className="w-full" href={"/premium/help-exam"}>
                    <Button variant={3}>Справиться с контрольной</Button>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col max-xl:hidden">
          <div className="w-full flex justify-end 2xl:justify-center -mt-[280px]">
            <div className="relative w-[692px] h-[752px] overflow-hidden">
              {carouselSlides.map((slide, index) => (
                <img
                  key={slide.id}
                  alt=""
                  src={pathname === "/home-problem-solve" ? hero2.src : slide.img}
                  height={752}
                  width={692}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full overflow-hidden relative">
            <div className="flex gap-[15px] h-28">
              <div className="h-full min-w-[439px] backdrop-blur-[25px] bg-linear-to-r from-white/0 to-white flex items-center justify-center">
                <span className="text-[40px] font-semibold bg-linear-to-r from-white/0 to-black bg-clip-text text-transparent transition-opacity duration-500">
                  {prevSlideData.text}
                </span>
              </div>

              <div className="h-full min-w-[892px] bg-white flex items-center justify-center text-[40px] font-semibold shrink-0">
                <span className="transition-opacity duration-500">{currentSlideData.text}</span>
              </div>

              <div className="h-full min-w-[439px] backdrop-blur-[25px] bg-linear-to-r from-white to-white/0 flex items-center justify-center">
                <span className="text-[40px] font-semibold bg-linear-to-r from-black to-white/0 bg-clip-text text-transparent transition-opacity duration-500">
                  {nextSlideData.text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBlock;
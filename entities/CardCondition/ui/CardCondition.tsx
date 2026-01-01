/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import Button from "@/shared/ui/Button";
import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title?: string;
  img?: string;
  decision?: string;
}
const CardCondition = ({ title, img, decision }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Автоматически обновляем высоту при открытии
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, img]);

  return (
    <div className="flex flex-col xl:flex-row gap-[15px] w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-[18px] xl:max-w-[893px] items-center w-full bg-white p-5 rounded-[20px] cursor-pointer select-none"
      >
        <div className="flex justify-between w-full">
          <span className="text-[20px] lg:text-[36px] font-bold uppercase  leading-[100%] tracking-[-0.05em]">
            {title}
          </span>
          <span
            className={`transition-transform duration-300 rotate-90 ease-in-out ${isOpen ? "rotate-270" : "rotate-0"}`}
          >
            <ChevronDown />
          </span>
        </div>
        <div className="flex justify-center w-full ">
          <img src={img} alt="" />
        </div>
      </div>

      <div
        className="overflow-hidden xl:max-w-[893px] w-full transition-[max-height,opacity,margin] duration-500 ease-in-out"
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="bg-white text-[20px] w-full rounded-[20px] p-[30px] flex flex-col gap-2.5">
          <div className="bg-[#E7EBEE] text-[16px] leading-[200%] tracking-[-0.05em] custom-scroll py-5 px-[15px] rounded-[10px] h-40 overflow-y-auto">
            {decision}
          </div>
          <Button variant={3}>Получить решение</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCondition;

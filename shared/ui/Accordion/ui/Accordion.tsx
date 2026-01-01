/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import ChevronDown from "@/shared/assets/icons/ChevronDown";
import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
  title?: string;
  text?: string;
}

const Accordion = ({ title, text }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Автоматически обновляем высоту при открытии
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, text]);

  return (
    <div className="flex flex-col w-full">
      {/* Заголовок */}
      <div
        className="flex justify-between items-center w-full bg-white p-5 rounded-[10px] cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-[16px] sm:text-[24px] lg:text-[36px] font-medium leading-[100%] tracking-[-0.05em]">
          {title}
        </h1>
        <span className={`transition-transform duration-300  ease-in-out ${isOpen ? "rotate-360" : "rotate-180"}`}>
          <ChevronDown />
        </span>
      </div>

      <div
        className="overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-in-out"
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "0.5rem" : "0",
        }}
      >
        <div
          ref={contentRef}
          className="bg-white text-[14px] sm:text-[18px] lg:text-[20px] rounded-[20px] p-5 flex flex-col gap-2.5"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

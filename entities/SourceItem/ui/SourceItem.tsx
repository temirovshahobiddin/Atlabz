"use client";

import ChapterArrow from "@/shared/assets/icons/ChapterArrow";
import Pdf from "@/shared/assets/icons/Pdf";
import SourcesArrow from "@/shared/assets/icons/SourcesArrow";
import { useState, useRef, useEffect } from "react";

type SourceType = {
  id: string;
  title: string;
  author: string;
  journal: string;
  description: string;
};

export default function SourceItem({
  data,
  index,
  moveUp,
  moveDown,
  remove,
}: {
  data: SourceType;
  index: number;
  moveUp: (i: number) => void;
  moveDown: (i: number) => void;
  remove: (i: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [height, setHeight] = useState("20px");
  const contentRef = useRef<HTMLDivElement>(null);
  const fullTextRef = useRef<HTMLDivElement>(null);
  const shortTextRef = useRef<HTMLDivElement>(null);

  // Функция для получения первых нескольких слов
  const getShortDescription = (text: string, wordCount: number = 4) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  // Обработчик открытия/закрытия
  const handleToggle = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (!open) {
      // Открываем - сразу показываем полный текст и анимируем высоту
      setOpen(true);
    } else {
      // Закрываем - сначала анимируем высоту, потом меняем контент
      setHeight("20px");
      setTimeout(() => {
        setOpen(false);
        setIsAnimating(false);
      }, 300); // Должно совпадать с duration
    }
  };

  // Эффект для анимации открытия
  useEffect(() => {
    if (open && fullTextRef.current) {
      setHeight(`${fullTextRef.current.scrollHeight}px`);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Эффект для установки начальной высоты
  useEffect(() => {
    if (shortTextRef.current) {
      setHeight(`${shortTextRef.current.scrollHeight}px`);
    }
  }, []);

  return (
    <div className="border border-[#0000001A] rounded-[10px] mb-3">
      <div className="px-4 lg:px-[30px] pt-4 pb-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 lg:gap-2">
              <Pdf />

              <span className="text-[14px] lg:text-[20px] leading-[120%] tracking-[0%] font-semibold">
                {index + 1}. {data.title}
              </span>
            </div>

            <span className="text-[14px] text-[#1D1D1D66] pl-[38px] lg:pl-[50px]">Автор: {data.author}</span>
            <span className="text-[14px] text-[#1D1D1D66] pl-[38px] lg:pl-[50px]">Журнал: “{data.journal}”</span>
          </div>

          <div className="flex gap-1 items-start h-fit mt-1">
            <button onClick={() => moveUp(index)} className="cursor-pointer">
              <ChapterArrow />
            </button>

            <button onClick={() => moveDown(index)} className="rotate-180 cursor-pointer">
              <ChapterArrow />
            </button>

            <button
              onClick={() => remove(index)}
              className="p-[4.5px] lg:p-[7.5px] rounded bg-[#E7EBEE] shadow cursor-pointer"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.25 3.75L3.75 11.25"
                  stroke="black"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.75 3.75L11.25 11.25"
                  stroke="black"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Блок с описанием и кнопкой раскрытия */}
      <div className="border-t border-[#0000001A] px-5 py-3">
        <div className="flex justify-between items-start gap-3">
          {/* Описание с плавной анимацией */}
          <div className="flex-1">
            <div
              ref={contentRef}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: height,
              }}
            >
              {/* Скрытый элемент для измерения высоты полного текста */}
              <div
                ref={fullTextRef}
                className="text-[14px] text-[#1D1D1D] font-semibold leading-[120%] tracking-[0%] absolute opacity-0 pointer-events-none"
              >
                {data.description}
              </div>

              {/* Скрытый элемент для измерения высоты короткого текста */}
              <div
                ref={shortTextRef}
                className="text-[14px] text-[#1D1D1D] font-semibold leading-[120%] tracking-[0%] absolute opacity-0 pointer-events-none"
              >
                {getShortDescription(data.description)}
              </div>

              <div className="text-[14px] text-[#1D1D1D] font-semibold leading-[120%] tracking-[0%]">
                {open ? data.description : getShortDescription(data.description)}
              </div>
            </div>
          </div>

          {/* Кнопка раскрытия */}
          <button
            onClick={handleToggle}
            disabled={isAnimating}
            className="shrink-0 w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
              <SourcesArrow />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

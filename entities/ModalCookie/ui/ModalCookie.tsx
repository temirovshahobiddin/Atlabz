import Button from "@/shared/ui/Button/ui/Button";
import React from "react";

interface ModalCookieProps {
  close?: () => void;
  isClosed?: boolean;
}

const ModalCookie = ({ close, isClosed }: ModalCookieProps) => {
  return (
    <div
      className={`fixed bottom-5 left-5 z-50 ${
        isClosed ? "flex" : "hidden"
      } flex-col w-full max-w-[579px] bg-white p-5 rounded-[20px] shadow-lg`}
    >
      <div className="flex flex-col gap-2 sm:gap-5   w-full max-w-[400px] md:max-w-[500px] lg:max-w-[714px] ">
        <h1 className="leading-[100%] text-[#3831BF]  font-bold uppercase tracking-[-0.05em] text-[16px] sm:text-[18px] lg:text-[20px]">
          Мы используем cookie и Яндекс.Метрику
        </h1>
        <div className="flex flex-col gap-2.5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[100%] tracking-[-0.05em]">
          <p className="text-[#1D1D1D]">
            Сайт использует файлы cookie и сервис «Яндекс.Метрика» для сбора статистики и повышения удобства. Продолжая
            использовать сайт, вы даёте согласие на обработку персональных данных
          </p>
          <p className="text-[#1D1D1D66]">
            Подробнее: Политика обработки персональных данных и Согласие на передачу данных в Яндекс.Метрику.
          </p>
          <p className="text-[#1D1D1D66]">Вы можете отключить cookie в настройках браузера.</p>
        </div>
        <div className="w-full max-w-[121px] flex flex-col items-center justify-center">
          <Button
            onClick={close}
            className="w-full py-2.5 text-center rounded-[60px] tracking-[-0.05em] bg-[#3831BF] text-[#D9D9D9] leading-none transition-all cursor-pointer  font-semibold"
          >
            Понятно
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalCookie;

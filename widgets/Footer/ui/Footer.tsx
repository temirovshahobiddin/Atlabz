import TG from "@/shared/assets/icons/TG";
import VK from "@/shared/assets/icons/VK";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col py-10 px-5 xl:pl-10 xl:pr-0 justify-between bg-[#FFFFFF] rounded-[20px] mt-[50px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 xl:grid-cols-4">
        {/* 1 */}
        <ul className="flex flex-col gap-3 sm:gap-6 max-w-[414px] w-full">
          <li className="mb-1.5 text-[20px] sm:text-[40px] leading-[100%] tracking-[-0.05em] font-semibold ">
            Контакты
          </li>
          <div className="flex gap-6">
            <li className="underline text-[#1D1D1D] text-[18px] sm:text-[18px] sm:text-[24px]text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
              <Link href="/">
                <VK />
              </Link>
            </li>
            <li className="underline text-[#1D1D1D] text-[18px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
              <Link href="/">
                <TG />
              </Link>
            </li>
          </div>
          <li className="flex flex-col text-[#1D1D1D] text-[18px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link className="underline" href="/">
              +7 (999) 123-45-67
            </Link>
            <span className="text-[#1D1D1D99] text-[16px] no-underline">(ежедневно 10:00–20:00 МСК)</span>
          </li>
          <li className="underline text-[#1D1D1D] text-[18px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">support@atlabs.ai</Link>
          </li>
        </ul>

        {/* 2 */}
        <ul className="flex flex-col gap-2 sm:gap-6 max-w-[454px] w-full">
          <li className="sm:mb-1.5 text-[20px] sm:text-[40px] leading-[100%] tracking-[-0.05em] font-semibold whitespace-nowrap">
            AI-сервисы
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Помощь с учёбой</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Финансовый консультант</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Карьерный коучинг</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Психологическая поддержка</Link>
          </li>
        </ul>

        {/* 3 */}
        <ul className="flex flex-col gap-2 sm:gap-6 max-w-[453px] w-full">
          <li className="sm:mb-1.5 text-[20px] sm:text-[40px] leading-[100%] tracking-[-0.05em] font-semibold">
            Наши инструменты
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Решение контрольных работ</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Написание рефератов</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Написание эссе</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Создание презентации</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Решение логарифмов</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Решение векторов</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Генератор кода</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Генератор названий</Link>
          </li>
        </ul>

        {/* 4 */}
        <ul className="flex flex-col gap-2 sm:gap-6">
          <li className="sm:mb-1.5 text-[20px] sm:text-[40px] leading-[100%] tracking-[-0.05em] font-semibold whitespace-nowrap">
            О компании
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Оплата и реквизиты</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Политика возврата</Link>
          </li>
          <li className=" text-[#1D1D1D] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/">Карта сайта</Link>
          </li>
        </ul>
      </div>

      <ul className="grid grid-cols-1 xl:grid-cols-2 items-center justify-between gap-y-4  xl:gap-y-0 2xl:pr-[100px] mt-[42px] sm:mt-[142px] xl:mt-[123px]">
        <li className="text-[#1D1D1D99] text-[14px] sm:text-[24px] leading-[100%] tracking-[-0.05em] font-normal xl:col-start-1 xl:row-start-1 row-start-2 text-left">
          © 2025 AtLabs. Все права защищены.
        </li>

        <div className="hidden sm:flex xl:justify-end gap-[10] xl:gap-[111px] col-start-1 xl:col-start-2 row-start-1">
          <li className="underline text-[#1D1D1D] text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/privacy-policy">Политика конфиденциальности</Link>
          </li>
          <li className="underline text-[#1D1D1D] text-[24px] leading-[100%] tracking-[-0.05em] font-normal">
            <Link href="/terms-of-service">Пользовательское соглашение</Link>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;

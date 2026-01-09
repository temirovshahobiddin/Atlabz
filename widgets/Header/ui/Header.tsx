"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";

import Button from "@/shared/ui/Button";

import Logo from "@/shared/assets/icons/Logo";
import Close from "@/shared/assets/icons/Close";
import Burger from "@/shared/assets/icons/Burger";
import { usePathname } from "next/navigation";
import Profile from "@/shared/assets/icons/Profile";
import Modal from "@/shared/ui/Modal.tsx";
import ModalBonus from "@/entities/ModalBonus";
import CurrentBalance from "@/shared/ui/CurrentBalance";
import OurTools from "@/shared/ui/OurTools";
import Develop from "@/shared/assets/icons/Develop";
import Psychology from "@/shared/assets/icons/Psychology";
import Finance from "@/shared/assets/icons/Finance";
import Study from "@/shared/assets/icons/Study";

const Header = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenBonus, setIsOpenBonus] = useState(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const isProfilePage = pathName.startsWith("/profile");

  return (
    <header className="relative flex gap-4 bg-[#FFFFFF] justify-between items-center rounded-[10px] sm:rounded-[40px] pl-5 pr-2.5 sm:pl-[40px] sm:pr-[20px] py-[10px] h-auto sm:h-[88px] mt-[30px] mb-[30px] sm:mb-10 max-w-[1800px] mx-auto w-full">
      {/* Логотип */}
      <Link href={"/"}>
        <Logo />
      </Link>

      {/* Навигация — скрыта на мобильных */}
      <nav className="hidden lg:flex gap-2 xl:gap-4 2xl:gap-6 min-[1700px]:gap-[30px] items-center list-none font-inter text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] min-[1700px]:text-[20px] font-medium leading-[16px] tracking-[-1px]">
        {isProfilePage ? (
          <>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/profile/my-rate">Мой тариф</Link>
            </li>
            <li>
              <Link href="/profile/my-tasks">Мои задачи</Link>
            </li>
            <li>
              <Link href="/profile/support">Поддержка</Link>
            </li>
            <li>
              <Link href="/profile/help">Помощь</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="#about">О AtLabs</Link>
            </li>
            <li>
              <OurTools />
            </li>
            <li>
              <Link href="/non-premium/solving-problem">Решение задач</Link>
            </li>
            <li>
              <Link href="/non-premium/choose-type-work">Написание работ</Link>
            </li>
            <li>
              <Link href="/non-premium/help-exam">Помощь с контрольной</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
            <li>
              <Link href="/profile/support">Поддержка</Link>
            </li>
          </>
        )}
      </nav>

      {/* Кнопки — скрыты на мобильных */}

      {!isProfilePage && (
        <>
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <Link href={"/select-register"}>
              <Button className="text-[12px]! lg:text-[13px]! xl:text-[14px]! 2xl:text-[18px]! h-[44px]! lg:h-[48px]! xl:h-[52px]! 2xl:h-[60px]! px-3! lg:px-4! xl:px-5! 2xl:px-6! tracking-[-1px]! whitespace-nowrap" variant={3}>
                Зарегистрироваться
              </Button>
            </Link>
            <Link href={"/login"}>
              <Button variant={1} className="h-[44px]! lg:h-[48px]! xl:h-[52px]! 2xl:h-[60px]! px-5! lg:px-6! xl:px-8! 2xl:px-10! text-[12px]! lg:text-[13px]! xl:text-[14px]! 2xl:text-[18px]! tracking-[-1px]!">Войти</Button>
            </Link>
          </div>
        </>
      )}

      {/* Бургер — виден только на мобильных */}
      <div className={`flex items-center md:gap-4 ${!isProfilePage && "lg:hidden"} `}>
        {isProfilePage && (
          <div className="flex justify-end items-center  md:gap-4 w-full max-w-[241px]">
            <div className="w-full max-w-[81px] md:max-w-[161px]">
              <CurrentBalance />
            </div>
            <div className="max-w-6 md:max-w-[50px] w-full">
              <Link href={"/profile/my-profile"}>
                <Profile />
              </Link>
            </div>
          </div>
        )}
        <button className="lg:hidden z-60" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
          {menuOpen ? (
            <div className="">
              <div className="w-[60px] h-[60px]  hidden sm:flex  items-center justify-center">
                <Close />
              </div>
              <div className="w-[34px] h-[34px]  flex sm:hidden items-center justify-center">
                <Close />
              </div>
            </div>
          ) : (
            <>
              <div className="hidden sm:block">
                <Burger />
              </div>
              <div className="block sm:hidden">
                <Burger width={34} />
              </div>
            </>
          )}
        </button>
      </div>

      {/* Мобильное меню - исправленная версия */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white sm:bg-[#F0F0F0] z-50 flex flex-col pt-5 px-5 pb-10 overflow-y-scroll">
          {/* Кнопка закрытия вверху */}
          <button
            className="absolute top-5 right-5 z-60 hidden xl:flex "
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <Close />
          </button>

          {/* Навигация */}
          <nav className="flex flex-col items-start gap-6 py-[33px] leading-[100%] font-inter text-[20px] sm:text-[32px] font-semibold tracking-[-0.05em]">
            <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">
              О AtLabs
            </Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">
              Инструменты
            </Link>
            <div className="grid grid-cols-2 gap-2 bg-white rounded-[20px] p-5">
              <div className="flex gap-2.5 items-center w-full cursor-pointer">
                <span>
                  <Study />
                </span>
                <span className="text-[14px] lg:text-[20px] leading-[80%]">Обучение</span>
              </div>
              <div className="flex gap-2.5 items-center cursor-pointer">
                <span>
                  <Develop />
                </span>
                <span className="text-[14px] lg:text-[20px] leading-[80%]">Развитие</span>
              </div>
              <div className="flex gap-2.5 items-center cursor-pointer">
                <span>
                  <Psychology />
                </span>
                <span className="text-[14px] lg:text-[20px] leading-[80%]">Психология</span>
              </div>
              <div className="flex gap-2.5 items-center cursor-pointer">
                <span>
                  <Finance />
                </span>
                <span className="text-[14px] lg:text-[20px] leading-[80%]">Финансы</span>
              </div>
            </div>
            <Link
              href="/non-premium/solving-problem"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Решение задач
            </Link>
            <Link
              href="/non-premium/choose-type-work"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Написание работ
            </Link>
            <Link
              href="/non-premium/help-exam"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Помощь с контрольной
            </Link>
            <Link href="#faq" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">
              FAQ
            </Link>
            <Link
              href="/profile/support"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              Поддержка
            </Link>
          </nav>

          {/* Кнопки */}
          <div className="flex flex-col gap-4 w-full mt-auto">
            <Button variant={1} onClick={() => setIsOpenBonus(false)}>
              Попробовать бесплатно <br /> (100 токенов)
            </Button>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button variant={5} className="w-full">
                Войти
              </Button>
            </Link>
            <Link href="/select-register" onClick={() => setMenuOpen(false)}>
              <Button variant={5} className="w-full">
                Регистрация
              </Button>
            </Link>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-center text-blue-600 hover:underline mt-4"
            >
              А ещё мы есть в Telegram
            </Link>
          </div>
          <Modal maxWidth="893" isOpen={isOpenBonus} padding="0" onClose={() => setIsOpenBonus(false)}>
            <ModalBonus />
          </Modal>
        </div>
      )}
    </header>
  );
};

export default Header;

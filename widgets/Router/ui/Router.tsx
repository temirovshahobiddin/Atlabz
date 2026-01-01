"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Router() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const navItems = [
    { label: "Главная", href: "/" },

    // global
    { label: "Soon", href: "/soon" },
    { label: "What We Made", href: "/what-we-made" },

    // pa
    { label: "Кабинет", href: "/cabinet" },
    { label: "Выбор типа работы", href: "/choose-type-job" },
    { label: "Профиль", href: "/my-profile" },
    { label: "Моя ставка", href: "/my-rate" },
    { label: "Мои задания", href: "/my-tasks" },
    { label: "Решение задач", href: "/problem-solve" },

    // auth
    { label: "Авторизация", href: "/auth" },

    // normal
    { label: "Выбор типа работы", href: "/choose-type-work" },
    { label: "Полный доступ", href: "/fullaccess" },
    { label: "Помощь экзамен", href: "/help-exam" },
    { label: "Дома решаем задачи", href: "/home-problem-solve" },
    { label: "Калькулятор логарифмов", href: "/logarifm-calculator" },

    // premium
    { label: "Премиум — контент", href: "/premium/check-content" },
    { label: "Премиум — источники", href: "/premium/check-sources" },
    { label: "Премиум — история", href: "/premium/history-money" },
    { label: "Премиум — решения", href: "/premium/problem-solve" },
    { label: "Премиум — титульник", href: "/premium/title-page" },

    // reg
    { label: "Регистрация", href: "/reg" },

    // solving problem
    { label: "Решение задачи", href: "/solving-problem" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md">
      <div className="mx-auto flex items-center justify-between px-3 py-2">
        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" onClick={toggle}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-wrap gap-1">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="
              px-3 py-1.5 
              rounded-md 
              text-[10px]
              text-gray-700
              hover:bg-blue-50 
              hover:text-blue-600 
              transition
            "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-3 animate-slideDown bg-white border-t shadow-lg">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
              block 
              px-3 py-2 
              rounded-md 
              text-sm
              text-gray-700 
              hover:bg-blue-50 
              hover:text-blue-600 
              transition
            "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

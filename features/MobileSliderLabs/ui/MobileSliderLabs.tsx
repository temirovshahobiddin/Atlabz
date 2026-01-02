/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Button from "@/shared/ui/Button";
import { SUB_TABS, subTabsData, SubTabKey } from "@/app/tariffData";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";
import Modal from "@/shared/ui/Modal.tsx";
import ModalBonus from "@/entities/ModalBonus";

import logos from "@/shared/assets/home/logos.png";
import CheckBoxCircle from "@/shared/ui/CheckBoxCircle";

const TABS = [
  { id: "edu", title: "Лаборатория обучения" },
];

interface MobileTicketCardProps {
  label: string;
  price: string;
  pricePerUnit: string;
  savings?: string;
  selected: boolean;
  onSelect: () => void;
}

const MobileTicketCard = ({ label, price, pricePerUnit, savings, selected, onSelect }: MobileTicketCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-[20px] p-6 flex flex-col gap-[37px] cursor-pointer ${
        selected ? "border-2 border-[#1D1D1D]" : ""
      }`}
    >
      <div className="flex justify-between">
        <p className="text-[24px] font-medium text-[#545454]">{label}</p>

        {savings && (
          <div className="bg-[#3831BF] text-[16px] font-medium flex items-center justify-center rounded-[10px] px-2 text-white">
            {savings}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <CheckBoxCircle size={30} checked={selected} />
        <div className="flex flex-col items-end">
          <p className="text-[14px] text-[#545454]">{pricePerUnit}</p>
          <p className="text-[48px] font-bold">{price}₽</p>
        </div>
      </div>
    </div>
  );
};

interface AddonToggleProps {
  title: string;
  price: number;
  description?: string;
  enabled: boolean;
  onToggle: () => void;
}

const AddonToggle = ({ title, price, description, enabled, onToggle }: AddonToggleProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="border-b border-[#1D1D1D]/10 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => description && setExpanded(!expanded)}>
          <svg 
            className={`w-3 h-3 text-[#1D1D1D]/50 transition-transform ${expanded ? "rotate-90" : ""}`}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-[16px] font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[16px] font-medium text-[#3831BF]">
            {price === 0 ? "бесплатно" : `${price} ₽`}
          </span>
          <button
            onClick={onToggle}
            className={`relative w-[44px] h-[24px] rounded-full transition-colors ${
              enabled ? "bg-[#3831BF]" : "bg-[#E7EBEE]"
            }`}
          >
            <span
              className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform ${
                enabled ? "left-[22px]" : "left-[2px]"
              }`}
            />
          </button>
        </div>
      </div>
      {expanded && description && (
        <p className="mt-2 text-[14px] text-[#1D1D1D]/60 ml-5">{description}</p>
      )}
    </div>
  );
};

// Компонент для галочки

const MobileSliderLabs = () => {
  const [activeTab, setActiveTab] = useState("edu");
  const [activeSubTab, setActiveSubTab] = useState<SubTabKey>("works");
  const [freeTasksChecked, setFreeTasksChecked] = useState(true);
  const [freeContentChecked, setFreeContentChecked] = useState(true);
  const [isOpenBonus, setIsOpenBonus] = useState(false);
  const router = useRouter();
  const { isAuthenticated, setPendingPayment } = useAuthStore();

  const currentData = subTabsData[activeSubTab];
  const { tickets, addons } = currentData;

  // Handle subscription click - moved up before handleSelect
  const handleSubscriptionClick = (index: number) => {
    const selectedTicket = tickets[index];
    const basePrice = parseInt(selectedTicket.price);
    
    const paymentInfo = {
      tariff: `${activeSubTab} - ${selectedTicket.label}`,
      price: basePrice,
      addons: [],
    };
    
    setPendingPayment(paymentInfo);
    
    if (isAuthenticated) {
      router.push("/premium/payment");
    } else {
      router.push("/register?redirect=payment");
    }
  };

  const handleSelect = (index: number) => {
    // При нажатии на тариф сразу перекидываем
    handleSubscriptionClick(index);
  };

  const handleSubTabChange = (id: SubTabKey) => {
    setActiveSubTab(id);
  };

  // Функции для мобильного слайдера
  const handleNext = () => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    const nextIndex = (currentIndex + 1) % TABS.length;
    setActiveTab(TABS[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    setActiveTab(TABS[prevIndex].id);
  };

  return (
    <div className="md:hidden">
      <div>
        <div className="flex flex-col gap-[15px] ">
          <h4 className="text-[#3831BF] font-bold text-[64px] uppercase leading-[100%] max-md:text-[40px] max-sm:text-[28px]">
            Открой полный доступ к AtLabs
          </h4>
          <p className="text-[#3831BF]/60 text-[32px] leading-[120%] max-w-[900px] w-full max-md:text-[20px] max-sm:text-[16px]">
            При регистрации дарим 100 токенов, чтобы протестировать сервис. И кнопка регистрации
          </p>
        </div>

        {/* Слайдер для мобильной версии */}
        <div className="flex gap-1 justify-center mt-6">
          <div>
            <Button variant={4} className="w-[49px]" onClick={handlePrev}>
              {"<"}
            </Button>
          </div>
          <div className="w-full bg-white rounded-[10px] flex items-center justify-center text-[16px] font-semibold">
            {TABS.find(tab => tab.id === activeTab)?.title}
          </div>
          <div>
            <Button variant={4} className="w-[49px]" onClick={handleNext}>
              {">"}
            </Button>
          </div>
        </div>

        {/* ПОД-ТАБЫ */}
        <div className="flex gap-2 mt-4 overflow-x-auto scroll-smooth scrollbar-none pb-2">
          {SUB_TABS.map(subTab => (
            <button
              key={subTab.id}
              onClick={() => handleSubTabChange(subTab.id as SubTabKey)}
              className={`
                px-4 py-2 rounded-[15px] text-[14px] font-medium whitespace-nowrap transition
                ${
                  activeSubTab === subTab.id
                    ? "bg-[#3831BF] text-white"
                    : "bg-white text-[#1D1D1D] hover:bg-[#E7EBEE]"
                }
              `}
            >
              {subTab.title}
            </button>
          ))}
        </div>

        {/* Тарифы для мобильной версии */}
        <div className="grid grid-cols-2 mt-4 gap-2">
          <div className="bg-[#3831BF] py-4 rounded-[10px] flex flex-col items-center">
            <div className="bg-white p-2.5 rounded-[10px]">
              <p className="text-[14px] font-semibold ">Экономия 5000 ₽</p>
            </div>
            <div className="flex flex-col text-white mt-[33px]">
              <p className="text-[24px] font-bold">330 ₽/мес</p>
              <p className="text-[16px]">(всё включено)</p>
            </div>
            <img src={logos.src} alt="" className="mt-[29px]" />
          </div>
          <div className="bg-white pt-[93px] pb-5 rounded-[10px] flex flex-col items-center ">
            <p className="text-[#1D1D1D] text-[24px] font-bold opacity-70 leading-[100%] tracking-[-0.05em]">
              1000 ₽/час
            </p>
            <p className="mt-[52px] text-[20px] text-[#1D1D1D] opacity-70 leading-[100%] tracking-[-0.05em]">
              Репетитор
            </p>
          </div>
        </div>

        <div className="bg-white mt-4 rounded-[20px] p-6 flex flex-col">
          <p className="text-[24px] font-bold">Бесплатно</p>
          <p className="text-[48px] font-bold">100 токенов</p>
          <Button onClick={() => setIsOpenBonus(true)} className="mt-4 mb-2">
            Получить
          </Button>
          <div className="bg-[#E7EBEE] rounded-[20px] flex flex-col py-4 px-4 gap-2.5">
            <label className="flex gap-[9px] items-center cursor-pointer">
              <CheckBoxCircle size={22} checked={freeTasksChecked} onChange={setFreeTasksChecked} />
              <span className="text-[16px]">Решить 2 задачи</span>
            </label>
            <label className="flex gap-[9px] items-center cursor-pointer">
              <CheckBoxCircle size={22} checked={freeContentChecked} onChange={setFreeContentChecked} />
              <span className="text-[16px]">Сформировать содержание работы</span>
            </label>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          {tickets.map((item, idx) => (
            <MobileTicketCard 
              key={idx} 
              {...item} 
              selected={false} 
              onSelect={() => handleSelect(idx)} 
            />
          ))}
        </div>
      </div>
      
      <Modal maxWidth="893" isOpen={isOpenBonus} padding="0" onClose={() => setIsOpenBonus(false)}>
        <ModalBonus />
      </Modal>
    </div>
  );
};

export default MobileSliderLabs;

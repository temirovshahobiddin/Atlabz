"use client";

import React, { useState, useRef } from "react";
import Button from "@/shared/ui/Button";
import CardBenefit from "@/entities/CardBenefit/ui/CardBenefit";
import Modal from "@/shared/ui/Modal.tsx";
import ModalBonus from "@/entities/ModalBonus";
import CheckBoxCircle from "@/shared/ui/CheckBoxCircle";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SUB_TABS, subTabsData, SubTabKey } from "@/app/tariffData";
import { useAuthStore } from "@/shared/store/authStore";

const TABS = [
  { id: "edu", title: "Лаборатория обучения" },
];

interface TicketCardProps {
  label: string;
  price: string;
  pricePerUnit: string;
  savings?: string;
  multiplier?: string;
  selected?: boolean;
  onSelect?: () => void;
}

const TicketCard = ({ label, price, pricePerUnit, savings, multiplier, selected, onSelect }: TicketCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col ${
        selected ? "border-[#1D1D1D] border-2" : ""
      } justify-between cursor-pointer p-6 2xl:max-w-[440px] w-full h-[412px] bg-white rounded-[20px] max-md:h-[324px]`}
    >
      <div className="flex flex-wrap gap-2.5 justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-[24px] text-[#1D1D1D]/50 leading-[100%] tracking-[-0.05em] font-medium">
            {label}
          </p>
          {multiplier && multiplier !== "x1" && (
            <span className="text-[20px] text-(--blue) font-bold">{multiplier}</span>
          )}
        </div>

        {savings && (
          <div className="bg-(--blue) text-[16px] 2xl:text-[20px] leading-[100%] p-2.5 text-white rounded-[10px]">
            {savings}
          </div>
        )}
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-[#1D1D1D]/50 text-[18px] font-medium">{pricePerUnit}</p>
          <p className="text-black font-bold text-[48px] lg:text-[56px] xl:text-[64px] max-md:text-[40px]">{price}₽</p>
        </div>
        <CheckBoxCircle checked={!!selected} size={64} clickable={false} />
      </div>
    </div>
  );
};

interface AddonItemProps {
  id: string;
  title: string;
  price: number;
  description?: string;
  enabled: boolean;
  expanded: boolean;
  onToggle: () => void;
  onExpand: () => void;
}

const AddonItem = ({ title, price, description, enabled, expanded, onToggle, onExpand }: AddonItemProps) => {
  return (
    <div className="border-b border-[#1D1D1D]/10 py-4 last:border-b-0">
      <div className="flex items-center justify-between">
        <div 
          className={`flex items-center gap-2 ${description ? 'cursor-pointer hover:opacity-80' : ''}`} 
          onClick={description ? onExpand : undefined}
        >
          {description && (
            <svg 
              className={`w-5 h-5 text-[#1D1D1D]/50 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
          <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-(--blue)">
            {price === 0 ? "бесплатно" : `+${price} ₽`}
          </span>
          {/* Toggle switch */}
          <button
            onClick={onToggle}
            className={`relative w-[52px] h-[28px] rounded-full transition-colors duration-300 ${
              enabled ? "bg-(--blue)" : "bg-[#E7EBEE]"
            }`}
          >
            <span
              className={`absolute top-[2px] w-[24px] h-[24px] bg-white rounded-full transition-all duration-300 shadow-sm ${
                enabled ? "left-[26px]" : "left-[2px]"
              }`}
            />
          </button>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-40 mt-3' : 'max-h-0'}`}>
        {description && (
          <p className="text-[14px] sm:text-[16px] text-[#1D1D1D]/60 ml-7 bg-[#F5F5F5] p-3 rounded-[10px]">{description}</p>
        )}
      </div>
    </div>
  );
};

const SliderLabs = ({ filterTabs }: { filterTabs?: string[] }) => {
  // Фильтруем табы если передан filterTabs
  const filteredSubTabs = filterTabs 
    ? SUB_TABS.filter(tab => filterTabs.includes(tab.id))
    : SUB_TABS;
  
  const [activeTab, setActiveTab] = useState("edu");
  const [activeSubTab, setActiveSubTab] = useState<SubTabKey>(
    filterTabs ? (filterTabs[0] as SubTabKey) : "works"
  );
  const [isOpenBonus, setIsOpenBonus] = useState(false);
  const [freeTasksChecked, setFreeTasksChecked] = useState(true);
  const [freeContentChecked, setFreeContentChecked] = useState(true);
  const [consentChecked, setConsentChecked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const subTabScrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [enabledAddons, setEnabledAddons] = useState<Record<string, boolean>>({});
  const [expandedAddon, setExpandedAddon] = useState<string | null>(null);

  const { isAuthenticated, setPendingPayment } = useAuthStore();
  const isFullAccess = pathname.includes("/non-premium/full-access");

  const handleSelect = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setSelectedIndex(null);
    setEnabledAddons({});

    const el = document.getElementById("tab-" + id);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: el.offsetLeft - 40,
        behavior: "smooth",
      });
    }
  };

  const handleSubTabClick = (id: SubTabKey) => {
    setActiveSubTab(id);
    setSelectedIndex(null);
    setEnabledAddons({});

    const el = document.getElementById("subtab-" + id);
    if (el && subTabScrollRef.current) {
      subTabScrollRef.current.scrollTo({
        left: el.offsetLeft - 20,
        behavior: "smooth",
      });
    }
  };

  const toggleAddon = (addonId: string) => {
    setEnabledAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId],
    }));
  };

  const toggleExpandAddon = (addonId: string) => {
    setExpandedAddon(prev => (prev === addonId ? null : addonId));
  };

  const currentData = subTabsData[activeSubTab];
  const { benefitCards, tickets, addons } = currentData;

  // Calculate total
  const basePrice = selectedIndex !== null ? parseInt(tickets[selectedIndex].price) : 0;
  const addonsPrice = addons.reduce((sum, addon) => {
    return sum + (enabledAddons[addon.id] ? addon.price : 0);
  }, 0);
  const totalPrice = basePrice + addonsPrice;

  // Handle subscription click
  const handleSubscriptionClick = () => {
    // Save payment info
    const selectedAddons = Object.entries(enabledAddons)
      .filter(([, enabled]) => enabled)
      .map(([id]) => id);
    
    const paymentInfo = {
      tariff: `${activeSubTab} - ${selectedIndex !== null ? tickets[selectedIndex].label : ""}`,
      price: totalPrice,
      addons: selectedAddons,
    };
    
    setPendingPayment(paymentInfo);
    
    if (isAuthenticated) {
      // User is logged in - go directly to payment
      router.push("/premium/payment");
    } else {
      // User is not logged in - go to registration first
      router.push("/register?redirect=payment");
    }
  };

  return (
    <div className="w-full">
      {/* === СЛАЙДЕР ТАБОВ === */}
      <div
        ref={scrollRef}
        className="bg-[#E7EBEE] max-w-[483px] h-[120px] lg:h-[140px] rounded-[40px] mt-[30px]
        flex items-center lg:gap-5 overflow-visible overflow-x-auto scroll-smooth 
        snap-x snap-mandatory px-5"
      >
        {TABS.map(tab => (
          <div
            id={"tab-" + tab.id}
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              rounded-[40px] h-[90px] lg:h-[100px] flex items-center justify-center font-semibold
              py-8 px-4 shrink-0 snap-center cursor-pointer transition-all duration-300 select-none
              whitespace-nowrap
              ${
                activeTab === tab.id
                  ? "bg-white text-[20px] lg:text-[24px] xl:text-[28px] shadow-sm"
                  : "text-[18px] lg:text-[22px] xl:text-[26px] opacity-60 hover:opacity-80"
              }
            `}
            style={{
              maxWidth: activeTab === tab.id ? 443 : 380,
              width: "100%",
            }}
          >
            {tab.title}
          </div>
        ))}\n      </div>

      {/* === ПОД-ТАБЫ === */}
      <div
        ref={subTabScrollRef}
        className="flex gap-2 sm:gap-3 mt-[20px] overflow-x-auto scroll-smooth scrollbar-none pb-2"
      >
        {filteredSubTabs.map(subTab => (
          <button
            id={"subtab-" + subTab.id}
            key={subTab.id}
            onClick={() => handleSubTabClick(subTab.id as SubTabKey)}
            className={`
              px-4 sm:px-5 py-2.5 sm:py-3 rounded-[15px] sm:rounded-[20px] text-[14px] sm:text-[18px] font-medium whitespace-nowrap transition-all duration-300
              ${
                activeSubTab === subTab.id
                  ? "bg-(--blue) text-white shadow-md"
                  : "bg-white text-[#1D1D1D] hover:bg-[#E7EBEE]"
              }
            `}
          >
            {subTab.title}
          </button>
        ))}
      </div>

      {/* === BENEFITS === */}
      <div className="flex gap-[15px] mt-[20px] max-xl:grid max-xl:grid-cols-2">
        {benefitCards.map((card, index) => (
          <CardBenefit key={index} {...card} />
        ))}
      </div>

      {/* === ТАРИФЫ === */}
      <div className="gap-[15px] mt-[20px] grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col justify-between p-6 2xl:max-w-[439px] w-full h-[380px] lg:h-[400px] bg-white rounded-[20px] max-md:max-w-[359px] max-md:h-[300px]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[20px] lg:text-[24px] font-bold max-md:text-[18px]">Бесплатно</p>
            <p className="text-[40px] lg:text-[48px] font-bold max-md:text-[36px]">100 токенов</p>
          </div>

          <Button onClick={() => setIsOpenBonus(true)} className="mb-[-35px]">
            Получить
          </Button>
          <div className="bg-[#E7EBEE] rounded-[15px] flex flex-col py-4 px-4 gap-2">
            <label className="flex gap-[9px] items-center cursor-pointer">
              <CheckBoxCircle size={20} checked={freeTasksChecked} onChange={setFreeTasksChecked} />
              <span className="text-[14px] leading-[120%]">Решить 2 задачи</span>
            </label>

            <label className="flex gap-[9px] items-center cursor-pointer">
              <CheckBoxCircle size={20} checked={freeContentChecked} onChange={setFreeContentChecked} />
              <span className="text-[14px] leading-[120%]">Сформировать содержание работы</span>
            </label>
          </div>
        </div>

        {tickets.map((ticket, idx) => (
          <TicketCard 
            key={idx} 
            {...ticket} 
            selected={selectedIndex === idx} 
            onSelect={() => handleSelect(idx)} 
          />
        ))}
      </div>

      {/* === ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ === */}
      {addons.length > 0 && selectedIndex !== null && (
        <div className="mt-[20px] bg-white rounded-[20px] p-5 sm:p-6 animate-in slide-in-from-top duration-300">
          <h4 className="text-[20px] lg:text-[24px] font-bold mb-4">Дополнительные опции</h4>
          {addons.map(addon => (
            <AddonItem
              key={addon.id}
              {...addon}
              enabled={!!enabledAddons[addon.id]}
              expanded={expandedAddon === addon.id}
              onToggle={() => toggleAddon(addon.id)}
              onExpand={() => toggleExpandAddon(addon.id)}
            />
          ))}
        </div>
      )}

      {/* === ИТОГО === */}
      {selectedIndex !== null && (
        <div className="mt-[20px] p-5 sm:p-6 bg-(--blue) rounded-[20px] flex justify-between items-center shadow-lg animate-in fade-in duration-300">
          <span className="text-[20px] sm:text-[28px] font-bold text-white">ИТОГО:</span>
          <span className="text-[28px] sm:text-[40px] font-bold text-white">{totalPrice}₽</span>
        </div>
      )}

      <label className="inline-flex items-center cursor-pointer select-none gap-2 mt-[20px]">
        {/* Скрытый чекбокс */}
        <input
          type="checkbox"
          className="hidden"
          checked={consentChecked}
          onChange={() => setConsentChecked(!consentChecked)}
        />

        {/* Квадрат с галочкой */}
        <span
          className={`
    w-5 h-5 border-2 rounded flex items-center justify-center transition-colors
    ${consentChecked ? "bg-white border-[#3831BF]" : "bg-white border-[#3831BF]"}
  `}
        >
          {consentChecked && (
            <svg
              className="w-3.5 h-3.5 text-[#3831BF]"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3992 1.2002L7.19922 14.4002L1.19922 8.40019"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>

        <span className="text-[14px] sm:text-[16px] lg:text-[18px]">
          Я согласен на оформление подписки в соответствии с{" "}
          <a href="/public-offer.pdf" target="_blank" className="text-[#3831BF] underline hover:opacity-80">
            публичной офертой
          </a>{" "}
          ООО АтЛабс
        </span>
      </label>

      <Button variant={1} className="mt-[20px]" onClick={handleSubscriptionClick}>
        Оформить подписку
      </Button>

      <Modal maxWidth="893" isOpen={isOpenBonus} padding="0" onClose={() => setIsOpenBonus(false)}>
        <ModalBonus />
      </Modal>
    </div>
  );
};

export default SliderLabs;

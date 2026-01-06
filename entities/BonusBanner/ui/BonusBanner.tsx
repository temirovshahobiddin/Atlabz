import At from "@/shared/assets/icons/At";
import Gift from "@/shared/assets/icons/Gift";
import React, { useState } from "react";

interface BonusBannerProps {
  openModal?: () => void;
}

const BonusBanner = ({ openModal }: BonusBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="sticky bottom-3 z-35 mt-5 w-full max-w-[1800px] mx-auto flex justify-between items-center bg-white border-2 border-[#3831BF] rounded-[20px] py-4 pl-4 pr-4 md:px-4 cursor-pointer shadow-lg
sm:py-5 sm:px-8 lg:px-10"
    >
      {/* Left side */}
      <div className="flex gap-2.5 items-center" onClick={openModal}>
        <At />
        <span className="text-[16px] sm:text-[20px] lg:text-[36px] text-[#1D1D1D] font-semibold leading-[100%] tracking-[-0.05em]">
          Попробуйте сейчас
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div 
          onClick={openModal}
          className="flex justify-center gap-2 items-center shadow-2xl w-full max-w-[180px] sm:max-w-[260px] lg:max-w-[404px] border-2 border-[#3831BF] rounded-[10px] p-[8px] bg-[#F5F4FF]"
        >
          <Gift />
          <span className="text-[#3831BF] text-[14px] sm:text-[20px] lg:text-[24px] font-semibold leading-[100%] tracking-[-0.05em] text-center">
            100 токенов в подарок
          </span>
        </div>
        
        {/* Close button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1D1D]/50 hover:text-[#1D1D1D]" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BonusBanner;

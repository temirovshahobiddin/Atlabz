/* eslint-disable @next/next/no-img-element */
import React from "react";

interface CardAwardsProProps {
  icon: string;
  title: string;
  quantity: number;
  currentQuantity: number;
  legend: boolean;
}

const CardAwardsProfile = ({ title, icon, quantity, legend, currentQuantity }: CardAwardsProProps) => {
  const percentage = Math.min((currentQuantity / quantity) * 100, 100);

  return (
    <div
      className={`
  bg-white px-5 lg:px-10 py-[15px] rounded-xl flex flex-col gap-3 max-w-[288px] w-full
  ${currentQuantity === quantity ? (!legend ? "border-2 border-[#3831BF]" : "border-2 border-[#F2BA26]") : "border-0"}
`}
    >
      {/* Иконка */}

      <img src={icon} alt="" className="w-[94px] h-[94px] lg:w-[154px] lg:h-[154px] object-contain mx-auto" />

      <h2 className="text-[12px] lg:text-[20px] font-medium leading-[120%] text-center">{title}</h2>

      <div className="flex flex-col mb-5">
        <div className="text-[12px] pl-2 leading-[120%] text-[#1D1D1D66] font-medium">
          {currentQuantity}/{quantity}
        </div>
        <div className="w-full h-2 bg-[#1D1D1D33] rounded-full overflow-hidden">
          <div
            className={`h-full ${!legend ? "bg-[#3831BF]" : "bg-[#F2BA26]"}  transition-all duration-300 ease-in-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardAwardsProfile;

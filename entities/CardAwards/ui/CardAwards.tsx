import React from "react";

interface CardAwardsProps {
  icon?: React.ReactNode;
  title?: string;
  maxW?: string;
}

const CardAwards = ({ icon, title, maxW = "177" }: CardAwardsProps) => {
  return (
    <div
      className={`flex flex-col gap-[21px] items-center bg-white rounded-[10px] w-full max-w-[${maxW}px] px-2 pt-3.5 pb-4`}
    >
      <div className="flex items-center justify-center bg-[#3831BF] rounded-[50%] w-[45px] h-[45px]">{icon}</div>
      <p className="text-[12px] sm:text-[16px] leading-[120%]  font-medium">{title}</p>
    </div>
  );
};

export default CardAwards;

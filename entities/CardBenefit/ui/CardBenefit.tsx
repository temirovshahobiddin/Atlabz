/* eslint-disable @next/next/no-img-element */
import React from "react";
type CardBenefitProps = {
  title: string;
  subtitle: string;
  img: string;
  imgClass?: string;
  className?: string;
};

const CardBenefit = ({ title, subtitle, img, imgClass = "", className = "" }: CardBenefitProps) => {
  return (
    <div className={`flex p-6 bg-(--blue) w-full h-[175px] rounded-[20px] relative ${className}`}>
      <div className="flex flex-col gap-2">
        <p className="text-[24px] font-medium text-white max-w-[199px] leading-[100%]">{title}</p>

        <p className="text-[20px] font-medium text-white">{subtitle}</p>
      </div>

      <img src={img} alt="" className={`absolute right-[30px] top-0 ${imgClass}`} />
    </div>
  );
};

export default CardBenefit;

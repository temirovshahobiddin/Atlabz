/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface CardBalanceProps {
  iconSrc?: string;
  title?: string;
  balance?: string;
  href?: string;
}

const CardBalance = ({ iconSrc, title, balance, href }: CardBalanceProps) => {
  return (
    <Link className="w-full p-2.5 bg-[#E7EBEE]  rounded-[40px]" href={href ?? "/non-premium/full-access"}>
      <div className="w-full flex items-center justify-between h-[50px]">
        <div className="flex items-center gap-2.5">
          <img src={iconSrc} alt="" />
          <p className="text-[18px] md:text-[24px] font-semibold leading-[80%] tracking-[0%]">{title}</p>
        </div>
        <div
          className={`${
            balance === "∞" ? "text-[75px] italic" : "text-[36px]"
          }  font-semibold leading-[100%] tracking-[0%]`}
        >
          {balance}
        </div>
      </div>
    </Link>
  );
};

export default CardBalance;

"use client";

/* eslint-disable @next/next/no-img-element */
import Delete from "@/shared/assets/icons/Delete";
import Save from "@/shared/assets/icons/Save";
import { useRouter } from "next/navigation";

import React from "react";

interface CardProblemSolveProps {
  tasks: string;
  subject: string;
  time: string;
  link?: string;
}

const CardProblemSolve = ({ tasks, subject, time, link }: CardProblemSolveProps) => {
  const router = useRouter();
  return (
    <div className="xl:max-w-[439px]  w-full ">
      <div className="flex flex-col gap-5 sm:gap-6 xl:gap-1 justify-between rounded-[10px] pl-4 pr-[22px] py-5 bg-white w-full max-w-full  overflow-hidden mb-0.5 sm:mb-2.5">
        <div className="grid items-start gap-1 sm:gap-7 sm:grid-cols-[auto_auto] sm:justify-between">
          <div className="order-1 sm:order-2 flex gap-1 justify-end">
            <button className="cursor-pointer">
              <Save />
            </button>
            <button className="cursor-pointer">
              <Delete />
            </button>
          </div>
          <div className="order-2 sm:order-1">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={tasks} />
          </div>
        </div>

        <div className="flex flex-col sm:gap-2.5 xl:gap-0 w-full">
          <h2 className="text-[16px] sm:text-[24px] xl:text-[32px] max-w-[181px] xl:max-w-[242px] w-full font-medium leading-[120%] tracking-[0%] whitespace-nowrap">
            Решение задач
          </h2>
          <p className="flex justify-between max-w-full text-[12px] sm:text-[18px] xl:text-[20px] text-[#1D1D1D99] sm:max-w-[181px] xl:max-w-[242px] w-full">
            <span>{subject}</span> <span>{time}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => router.push(link || "/profile/problem-solve")}
        className="p-2.5 text-[14px] sm:text-[20px] bg-[#3831BF] text-[#D9D9D9]  w-full rounded-[5px] ${className} tracking-[-0.05em] leading-none transition-all cursor-pointer font-semibold"
      >
        Продолжить
      </button>
    </div>
  );
};

export default CardProblemSolve;

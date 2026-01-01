"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type CardSolvedTasksProps = {
  tag: string;
  title: string;
  subtitle: string;
  date: string;
  link: string;
};

const CardSolvedTasks: React.FC<CardSolvedTasksProps> = ({ tag, title, subtitle, date, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };
  return (
    <div
      onClick={handleClick}
      className="
        bg-white h-[380px] max-xl:h-[171px] py-2 px-4 lg:py-5 lg:px-6
        rounded-[20px]
        shrink-0
        max-w-[439px] max-xl:max-w-[250px]
        snap-start
        cursor-pointer
      "
    >
      <div
        className="
          bg-(--blue) text-white max-w-[211px] w-full h-[49px] 
          text-[24px] font-semibold rounded-[10px] flex justify-center items-center m-auto
          max-xl:text-[14px] max-xl:max-w-[132px] max-xl:h-[31px]
        "
      >
        {tag}
      </div>

      <p className="mt-[30px] max-xl:mt-4 text-[30px] font-bold max-xl:font-medium uppercase leading-[100%] max-xl:text-[16px]">
        {title}
      </p>

      <p className="text-[#1D1D1D]/50 text-[24px] leading-[100%] uppercase mt-[15px] max-xl:mt-2 max-xl:text-[12px]">
        {subtitle}
      </p>

      <div className="mt-[82px] max-xl:mt-[3px] flex justify-between items-end">
        <p className="text-[20px] text-[#1D1D1D]/40 max-xl:text-[12px]">{date}</p>

        <div className="max-w-20 max-xl:max-w-[67px] max-xl:h-[25px] w-full">
          <Link
            className="flex justify-center items-center xl:px-[31px] cursor-pointer py-4 rounded-[20px] max-xl:h-[25px] bg-[#3831BF] text-[#D9D9D9] "
            href={link}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path
                d="M3.54232 8.5L13.459 8.5"
                stroke="white"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.50065 3.54199L13.459 8.50033L8.50065 13.4587"
                stroke="white"
                strokeWidth="1.41667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSolvedTasks;

import React from "react";
import Filter from "@/shared/assets/icons/Filter";
import Search from "@/shared/assets/icons/Search";

const SearchFilter = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-2.5 w-full ">
      <div className="flex gap-2 sm:gap-2.5 xl:gap-[15px] w-full h-11 xl:h-[60px]">
        <div className="flex items-center w-full bg-white rounded-[10px] pl-2.5 py-[18px]">
          <Search />
          <input
            type="text"
            className="w-full bg-transparent outline-none border-none pl-2.5 text-[16px] placeholder:text-gray-400"
          />
        </div>
        <button className="bg-white rounded-[10px] p-2.5 xl:p-3.5 cursor-pointer">
          <Filter width={"w-[24px] h-[24px] xl:w-[33px] xl:h-[33px]"} />
        </button>
      </div>
      <div className="flex gap-2 flex-wrap sm:gap-2.5 xl:gap-[15px] text-[14px] sm:text-[20px] ">
        <button className="bg-white rounded-[5px] xl:rounded-[20px] p-2.5 xl:p-3.5 cursor-pointer [leading-trim:CAP_HEIGHT] leading-[100%] tracking-[0.05em] font-normal">
          Все
        </button>
        <button className="bg-white rounded-[5px] xl:rounded-[20px] p-2.5 xl:p-3.5 cursor-pointer [leading-trim:CAP_HEIGHT] leading-[100%] tracking-[0.05em] font-normal">
          В работе
        </button>
        <button className="bg-white rounded-[5px] xl:rounded-[20px] p-2.5 xl:p-3.5 cursor-pointer [leading-trim:CAP_HEIGHT] leading-[100%] tracking-[0.05em] font-normal">
          Готово
        </button>
        <button className="bg-white rounded-[5px] xl:rounded-[20px] p-2.5 xl:p-3.5 cursor-pointer [leading-trim:CAP_HEIGHT] leading-[100%] tracking-[0.05em] font-normal">
          Черновики
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

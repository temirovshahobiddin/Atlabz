/* eslint-disable react/jsx-no-undef */
import { sourcesMock } from "@/app/moki";
import SourceList from "@/features/SourceList";
import Image from "next/image";

import brain from "@/shared/assets/premium/brain.png";

const CheckSources = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] w-full mb-[30px]">
        <h1 className="title-1 max-w-[893px] ">Ознакомится с источниками</h1>
        <div className="flex gap-[15px] w-full">
          <div className="xl:max-w-[893px] w-full">
            <SourceList items={sourcesMock} />
          </div>
          <div className="bg-white px-[95px] py-[66.5px] rounded-[20px] max-h-[381px] max-w-[438px] w-full hidden xl:block">
            <Image src={brain.src} width={248} height={248} alt="" />
          </div>
          <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
            <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
              Просмотри источники — чем лучше материалы, тем умнее текст у AtLabs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckSources;

/* eslint-disable @next/next/no-img-element */
import React from "react";

import { useRouter } from "next/navigation";

interface MobCardCabinetServices {
  title: string;
  imageSrc: string;
  link: string;
}

const MobCardCabinetServices = ({ title, imageSrc, link }: MobCardCabinetServices) => {
  const router = useRouter();

  const titleMap: Record<string, string> = {
    "Решить задачу любой сложности": "Решение задач",
    "Написать научную работу": "Написание работ ",
    "Помочь с контрольной": "Помощь с контрольной",
  };

  return (
    <div
      onClick={() => router.push(link)}
      className="flex flex-col justify-between rounded-[20px] bg-white w-full  overflow-hidden cursor-pointer"
    >
      <div className="w-full pl-4 pr-3 pb-6 sm:px-10 sm:pb-5">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="" src={imageSrc} />
        <div className="sm:text-center mx-auto w-full">
          <h2 className="text-[16px] sm:text-[24px] w-full font-medium leading-[120%] sm:whitespace-nowrap tracking-[0%]">
            {titleMap[title]}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MobCardCabinetServices;

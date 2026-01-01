/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";

interface CardTasksProps {
  title?: string;
  imageSrc?: string;
  link?: string;
}

const CardTasks = ({ title = "Решение задач", imageSrc, link }: CardTasksProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link || "/profile/my-tasks")}
      className="flex flex-col gap-12 xl:gap-[113px] justify-between rounded-[20px] bg-white w-full max-w-full xl:max-w-[439px] px-4 py-10 overflow-hidden cursor-pointer"
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={imageSrc} />
      <div className="max-w-[407px] w-full z-10">
        <h2 className="text-[16px] sm:text-[24px] xl:text-[32px] w-full font-medium leading-[120%] tracking-[0%]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardTasks;

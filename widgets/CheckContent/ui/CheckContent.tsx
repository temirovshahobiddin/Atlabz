"use client";
import { mockChapters } from "@/app/moki";
import Content from "@/features/Content";
import NumberPages from "@/features/NumberPages";
import Image from "next/image";

import content from "@/shared/assets/premium/content.png";
import Button from "@/shared/ui/Button";
import { useRouter } from "next/navigation";

const CheckContent = () => {
  const router = useRouter();

  const handleCheckContentClick = () => {
    router.push("/soon");
    setTimeout(() => router.push("/premium/check-sources"), 12000);
  };
  return (
    <section>
      <div className="flex flex-col gap-[15px]  w-full mb-[30px]">
        <h1 className="title-1 max-w-[893px]">Проверим содержание</h1>
        <div className="flex gap-[15px] w-full">
          <div className="xl:max-w-[893px] w-full">
            <Content chapters={mockChapters} />
          </div>
          <div className="bg-white px-[70px] py-[41.5px] rounded-[20px] max-h-[381px] max-w-[438px] w-full hidden xl:block">
            <Image src={content.src} width={298} height={298} alt="" />
          </div>
          <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
            <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
              Проверь структуру — AtLabs напишет сильную работу, если план выстроен правильно.{" "}
            </span>
          </div>
        </div>
        <NumberPages />

        <Button onClick={handleCheckContentClick}>Написать</Button>
      </div>
    </section>
  );
};

export default CheckContent;

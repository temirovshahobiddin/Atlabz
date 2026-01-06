"use client";
import React, { useState } from "react";
import Textarea from "../../Texterea";
import AccordionStar from "../../AccordionStar";
import { useRouter } from "next/navigation";
import Crown from "@/shared/assets/icons/Crown";
import CheckMark from "@/shared/assets/icons/CheckMark";
import TypeWork from "@/features/TypeWork";
import InputForm from "../../InputForm";

const SubsHero = ({
  title,
  description,
  typeWorkPage = false,
}: {
  title: string;
  description: string;
  typeWorkPage?: boolean;
}) => {
  const [typeWork, setTypeWork] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (hasFile: boolean) => {
    const isPremium = localStorage.getItem("premium") === "true";
    router.push("/working");
    
    if (hasFile) {
      // Если загружен файл - проверяем premium
      if (isPremium) {
        setTimeout(() => router.push("/premium/condition-solve"), 12000);
      } else {
        setTimeout(() => router.push("/non-premium/full-access"), 12000);
      }
    } else {
      // Если только текст - сразу в chat-ai
      setTimeout(() => router.push("/chat-ai"), 12000);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-[15px]">
        <h1 className="title-1 text-(--blue) font-bold uppercase">{title}</h1>
        <p className="text-[16px] sm:text-[20px] xl:text-[32px] font-medium max-w-[893px] mb-[20px] tracking-[] w-full leading-[120%]">
          {description}
        </p>
        {typeWorkPage &&
          (typeWork ? (
            <div className="flex flex-col gap-2 lg:bg-white lg:p-[30px] rounded-[20px] mb-[30px] max-w-[893px]">
              <InputForm label="Тип работы" placeholder="Реферат" name={""} />
              <div className="flex gap-[9px] items-center justify-center">
                <svg width="339" height="1" viewBox="0 0 339 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="339" y2="0.5" stroke="#1D1D1D" strokeOpacity="0.4" />
                </svg>
                <p>необязательно</p>
                <svg width="339" height="1" viewBox="0 0 339 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="0.5" x2="339" y2="0.5" stroke="#1D1D1D" strokeOpacity="0.4" />
                </svg>
              </div>
              <InputForm label="Предмет" placeholder="Введите название" name={""} />
              <InputForm label="Требования" placeholder="Опишите требования" name={""} />
            </div>
          ) : (
            <TypeWork onClick={() => setTypeWork(true)} />
          ))}
      </div>
      <div className="flex gap-[15px] mt-[10px] max-xl:flex-col">
        <div className="bg-white  rounded-[20px] max-w-[1346px] w-full">
          <Textarea onClick={(hasFile) => handleClick(hasFile)} />
        </div>
        <div className="hidden lg:flex flex-col gap-[29px] bg-white rounded-[20px] py-10 px-[30px]">
          <div className="flex gap-2.5 items-center ">
            <div className="w-[57px] h-[57px]">
              <Crown />
            </div>
            <h2 className="text-[24px] text-[#1D1D1D] font-bold leading-[120%] tracking-[0%]">
              Подписка с безлимитом токенов{" "}
            </h2>
          </div>
          <ul className="flex flex-col gap-[15px] text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Решай задачи онлайн без ограничений</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Поддержка по 160+ предметам</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Доступ к базе готовых решений и конспектов</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Бесплатные работы каждый месяц</span>
            </li>
            <li className="flex gap-2">
              <div className="w-8 h-8">
                <CheckMark />
              </div>
              <span className="">Экономь время и деньги — учись удобнее и быстрее</span>
            </li>
          </ul>
        </div>
        <div className="xl:hidden mt-2.5 flex flex-col gap-2.5">
          <AccordionStar />
          <div className="grid grid-cols-3 gap-2.5">
            <div className=" w-full h-28 bg-white rounded-2.5 flex flex-col items-center justify-center gap-3.5">
              <div className="bg-(--blue) rounded-full p-2.5 w-[45px] h-[45px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[12px] max-w-[93px] w-full text-center leading-[120%]">Ответ за 30 секунд</p>
            </div>
            <div className=" w-full h-28 bg-white rounded-2.5 flex flex-col items-center justify-center gap-3.5">
              <div className="bg-(--blue) rounded-full p-2.5 w-[45px] h-[45px] flex items-center justify-center">
                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.5 12.5V5.5L9.5 0.5H4.5C3.96957 0.5 3.46086 0.710714 3.08579 1.08579C2.71071 1.46086 2.5 1.96957 2.5 2.5V12.5C2.5 13.0304 2.71071 13.5391 3.08579 13.9142C3.46086 14.2893 3.96957 14.5 4.5 14.5H12.5C13.0304 14.5 13.5391 14.2893 13.9142 13.9142C14.2893 13.5391 14.5 13.0304 14.5 12.5Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.5 2.5V12.5C0.5 13.5609 0.921427 14.5783 1.67157 15.3284C2.42172 16.0786 3.43913 16.5 4.5 16.5H12.5M9.5 0.5V3.5C9.5 4.03043 9.71071 4.53914 10.0858 4.91421C10.4609 5.28929 10.9696 5.5 11.5 5.5H14.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[12px] max-w-[93px] w-full text-center leading-[120%]">
                Решаем задачи по 20+ предметам
              </p>
            </div>
            <div className=" w-full h-28 bg-white rounded-2.5 flex flex-col items-center justify-center gap-3.5">
              <div className="bg-(--blue) rounded-full p-2.5 w-[45px] h-[45px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.618 3.1075L11.729 1.375L8.84 3.1075L5.4845 3.4045L4.1645 6.5035L1.625 8.716L2.3795 11.9995L1.625 15.283L4.1645 17.4955L5.4845 20.5945L8.84 20.8915L11.729 22.624L14.618 20.8915L17.9735 20.5945L19.2935 17.4955L21.8345 15.283L21.077 11.9995L21.833 8.716L19.292 6.5035L17.972 3.4045L14.618 3.1075ZM8.252 9.7495C8.252 9.55059 8.33102 9.35982 8.47167 9.21917C8.61232 9.07852 8.80309 8.9995 9.002 8.9995C9.20091 8.9995 9.39168 9.07852 9.53233 9.21917C9.67298 9.35982 9.752 9.55059 9.752 9.7495C9.752 9.94841 9.67298 10.1392 9.53233 10.2798C9.39168 10.4205 9.20091 10.4995 9.002 10.4995C8.80309 10.4995 8.61232 10.4205 8.47167 10.2798C8.33102 10.1392 8.252 9.94841 8.252 9.7495ZM9.002 7.4995C8.40526 7.4995 7.83297 7.73655 7.41101 8.15851C6.98905 8.58047 6.752 9.15276 6.752 9.7495C6.752 10.3462 6.98905 10.9185 7.41101 11.3405C7.83297 11.7624 8.40526 11.9995 9.002 11.9995C9.59874 11.9995 10.171 11.7624 10.593 11.3405C11.0149 10.9185 11.252 10.3462 11.252 9.7495C11.252 9.15276 11.0149 8.58047 10.593 8.15851C10.171 7.73655 9.59874 7.4995 9.002 7.4995ZM8.783 16.2805L16.283 8.7805L15.221 7.7185L7.721 15.2185L8.783 16.2805ZM14.252 14.9995C14.252 14.8006 14.331 14.6098 14.4717 14.4692C14.6123 14.3285 14.8031 14.2495 15.002 14.2495C15.2009 14.2495 15.3917 14.3285 15.5323 14.4692C15.673 14.6098 15.752 14.8006 15.752 14.9995C15.752 15.1984 15.673 15.3892 15.5323 15.5298C15.3917 15.6705 15.2009 15.7495 15.002 15.7495C14.8031 15.7495 14.6123 15.6705 14.4717 15.5298C14.331 15.3892 14.252 15.1984 14.252 14.9995ZM15.002 12.7495C14.4053 12.7495 13.833 12.9866 13.411 13.4085C12.9891 13.8305 12.752 14.4028 12.752 14.9995C12.752 15.5962 12.9891 16.1685 13.411 16.5905C13.833 17.0124 14.4053 17.2495 15.002 17.2495C15.5987 17.2495 16.171 17.0124 16.593 16.5905C17.0149 16.1685 17.252 15.5962 17.252 14.9995C17.252 14.4028 17.0149 13.8305 16.593 13.4085C16.171 12.9866 15.5987 12.7495 15.002 12.7495Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-[12px] max-w-[99px] w-full text-center leading-[120%]">В 5 раз дешевле репетитора</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubsHero;

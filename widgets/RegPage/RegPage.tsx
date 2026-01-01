/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import yan from "@/shared/assets/auth/yandex.png";
import person from "@/shared/assets/auth/auth.png";
import InputForm from "@/shared/ui/InputForm";
import Button from "@/shared/ui/Button";
import { useEffect } from "react";
import Mail from "@/shared/assets/icons/Mail";
import Phone from "@/shared/assets/icons/Phone";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputPhone from "@/shared/ui/InputPhone/ui/InputPhone";

const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

const emailSchema = z.object({
  email: z.string().email("Некорректная почта"),
});

const phoneSchema = z.object({
  phone: z.string().regex(phoneRegex, "Некорректный номер телефона"),
});

export default function Register() {
  const params = useSearchParams();
  const router = useRouter();
  const method = params.get("method");

  useEffect(() => {
    if (!method) {
      router.push("/select-register");
    }
  }, [method, router]);
  // Определяем текст плейсхолдера
  const schema = method === "email" ? emailSchema : phoneSchema;
  type CurrentFormType = z.infer<typeof schema>;

  const placeholder = method === "phone" ? "+7 (___) ___-__-__" : "example@mail.ru";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CurrentFormType>({
    resolver: zodResolver(schema),
    defaultValues: method === "email" ? ({ email: "" } as CurrentFormType) : ({ phone: "" } as CurrentFormType),
  });

  const onSubmit = (data: CurrentFormType) => {
    console.log("Submitted:", data);
    router.push("/reg-password");
  };

  const handleSelect = (method: string) => {
    router.push(`/register?method=${method}`);
  };
  return (
    <div className="flex flex-col justify-center max-w-[892px] mx-auto">
      <h1 className="text-(--blue) title-1 font-bold text-center my-[30px] lg:my-[110px] uppercase">регистрация</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[892px] w-full m-auto">
        {method === "email" && (
          <InputForm
            control={control}
            error={(errors as any).email?.message}
            variant={1}
            label="Почта"
            placeholder="mail.ru"
            type="email"
            name="email"
          />
        )}

        {method === "phone" && (
          <InputPhone
            control={control}
            error={(errors as any).phone?.message}
            variant={1}
            label="Телефон"
            name="phone"
          />
        )}

        {/* <Link href={"/reg-password"}> */}
        <Button type="submit" variant={1} className="mt-5">
          Продолжить
        </Button>
        {/* </Link> */}
      </form>

      {/* Соц. вход */}
      <div className="flex gap-[9px] items-center justify-center my-5">
        <svg width="103" height="1" viewBox="0 0 103 1" fill="none">
          <line y1="0.5" x2="103" y2="0.5" stroke="#1D1D1D" strokeOpacity="0.8" />
        </svg>

        <p>или войти через</p>

        <svg width="103" height="1" viewBox="0 0 103 1" fill="none">
          <line y1="0.5" x2="103" y2="0.5" stroke="#1D1D1D" strokeOpacity="0.8" />
        </svg>
      </div>

      <div className="flex justify-center gap-2">
        <button className="max-w-[442px] cursor-pointer w-full h-[62px] bg-white flex justify-center items-center rounded-[10px]">
          <img src={yan.src} alt="" />
        </button>

        <button className="max-w-[442px] cursor-pointer w-full h-[62px] bg-white flex justify-center items-center rounded-[10px]">
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
            <path
              d="M2.73 2.73C5.16574e-07 5.486 0 9.893 0 18.72V20.28C0 29.094 5.16574e-07 33.501 2.73 36.27C5.486 39 9.893 39 18.72 39H20.28C29.094 39 33.501 39 36.27 36.27C39 33.514 39 29.107 39 20.28V18.72C39 9.906 39 5.499 36.27 2.73C33.514 5.16574e-07 29.107 0 20.28 0H18.72C9.906 0 5.499 5.16574e-07 2.73 2.73ZM6.578 11.869H11.05C11.193 19.305 14.469 22.451 17.069 23.101V11.869H21.268V18.278C23.829 18.005 26.533 15.08 27.443 11.856H31.629C31.2874 13.5248 30.6055 15.1053 29.6258 16.4988C28.6462 17.8922 27.3897 19.0688 25.935 19.955C27.5588 20.7629 28.9928 21.9059 30.1423 23.3087C31.2919 24.7115 32.1309 26.3421 32.604 28.093H27.989C27.001 25.012 24.531 22.62 21.268 22.295V28.093H20.748C11.856 28.093 6.786 22.009 6.578 11.869Z"
              fill="#3831BF"
            />
          </svg>
        </button>
      </div>
      <div className="flex w-full justify-center mt-2.5">
        {method === "phone" ? (
          <button
            onClick={() => handleSelect("email")}
            className="gap-2.5 cursor-pointer w-full h-11 bg-white flex justify-center items-center rounded-[10px]"
          >
            <Mail />
            <span> Почта </span>
          </button>
        ) : (
          <button
            onClick={() => handleSelect("phone")}
            className=" cursor-pointer w-full h-11 bg-white flex gap-2.5 justify-center items-center rounded-[10px]"
          >
            <Phone />
            <span>Телефон</span>
          </button>
        )}
      </div>

      <img
        src={person.src}
        alt=""
        className="max-w-[331px] h-[263px] sm:max-w-[530px] sm:h-[340px]  lg:max-w-[731px] w-full lg:h-[581px] m-auto"
      />
    </div>
  );
}

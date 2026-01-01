"use client";

/* eslint-disable @next/next/no-img-element */
import mail from "@/shared/assets/auth/mail.png";
import Button from "@/shared/ui/Button";
import OTPInput from "@/shared/ui/OTPInput";
import { useState } from "react";

const MailCode = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (code.length !== 4) {
      console.log("Код должен быть из 4 цифр");
      return;
    }

    console.log("Mail code:", code);
  };

  return (
    <div className="flex flex-col justify-center max-w-[893px] mx-auto">
      <h1 className="text-(--blue) title-1 font-bold text-center mb-[60px] sm:mb-[150px] xl:my-[110px] uppercase">
        Введите код
      </h1>
      <div className="max-w-[892px] w-full text-center flex flex-col gap-[30px]">
        <p className="text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.05em] font-bold text-[#1D1D1DCC]">
          Мы направили код на вашу почту
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] max-w-[361px] sm:max-w-[606px] lg:max-w-full w-full mx-auto"
          action=""
        >
          <OTPInput length={4} value={code} onChange={v => setCode(v)} inputClassName="bg-white" />
          <Button type="submit" variant={1}>
            Продолжить
          </Button>
        </form>
      </div>

      <img
        src={mail.src}
        alt=""
        className="max-w-[342px] h-[342px] sm:max-w-[406px] sm:h-[340px] xl:max-w-[731px] w-full xl:h-[581px] m-auto"
      />
    </div>
  );
};

export default MailCode;

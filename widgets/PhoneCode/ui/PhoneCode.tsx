"use client";

/* eslint-disable @next/next/no-img-element */
import phone from "@/shared/assets/auth/phone.png";
import Button from "@/shared/ui/Button";
import OTPInput from "@/shared/ui/OTPInput";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/shared/store/authStore";

const PhoneCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const params = useSearchParams();
  const router = useRouter();
  const phoneNumber = params.get("phone") || "";
  const { isLoading } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (code.length !== 4) {
      setError("Код должен быть из 4 цифр");
      return;
    }

    const encodedPhone = encodeURIComponent(phoneNumber);
    router.push(`/reg-password?phone=${encodedPhone}&code=${code}`);
  };

  return (
    <div className="flex flex-col justify-center max-w-[893px] mx-auto">
      <h1 className="text-(--blue) title-1 font-bold text-center mb-[60px] sm:mb-[150px] xl:my-[110px] uppercase">
        Введите код
      </h1>
      <div className="max-w-[892px] w-full text-center flex flex-col gap-[30px]">
        <p className="text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.05em] font-bold text-[#1D1D1DCC]">
          Мы направили смс код на ваш телефон
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[30px] max-w-[361px] sm:max-w-[606px] lg:max-w-full w-full mx-auto"
          action=""
        >
          <OTPInput length={4} value={code} onChange={v => setCode(v)} inputClassName="bg-white" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" variant={1} disabled={isLoading}>
            {isLoading ? "Проверка..." : "Продолжить"}
          </Button>
        </form>
      </div>

      <img
        src={phone.src}
        alt=""
        className="max-w-[342px] h-[342px] sm:max-w-[406px] sm:h-[340px] xl:max-w-[731px] w-full xl:h-[581px] m-auto"
      />
    </div>
  );
};

export default PhoneCode;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { IMaskInput } from "react-imask";
import { Controller, type Control } from "react-hook-form";

interface PhoneInputProps {
  control?: Control<any>;
  name: string;
  label?: string;
  error?: string;
  variant?: 1 | 2;
  countryCode?: string;
}

const InputPhone: React.FC<PhoneInputProps> = ({ control, name, label, error, variant, countryCode = "+7" }) => {
  const mask = `${countryCode} (000) 000-00-00`;

  // Если нет control — обычный input
  if (!control) {
    return (
      <label className="flex flex-col gap-1">
        {label && <span className="text-2xl text-[#1D1D1D] font-medium">{label}</span>}

        <IMaskInput
          mask={mask}
          className={`${
            variant === 1 ? "bg-white" : "bg-white lg:bg-[#E7EBEE]"
          } rounded-[10px] px-5 py-[16.5px] text-[16px] leading-[100%] outline-none ${
            error ? "text-[#BF3131]" : "text-[#1D1D1D]"
          }`}
        />

        {error && <span className="text-xs font-medium text-[#BF3131]">{error}</span>}
      </label>
    );
  }

  // RHF Controller
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="flex flex-col gap-1">
          {label && <span className="text-2xl text-[#1D1D1D] font-medium">{label}</span>}

          <IMaskInput
            {...field}
            mask={mask}
            // важно: IMaskInput отдаёт value через onAccept, а не onChange
            onAccept={(value: string) => field.onChange(value)}
            className={`${
              variant === 1 ? "bg-white" : "bg-white lg:bg-[#E7EBEE]"
            } rounded-[10px] px-5 py-[16.5px] text-[16px] leading-[100%] outline-none ${
              error ? "text-[#BF3131]" : "text-[#1D1D1D]"
            }`}
          />

          {error && <span className="text-xs font-medium text-[#BF3131]">{error}</span>}
        </label>
      )}
    />
  );
};

export default InputPhone;

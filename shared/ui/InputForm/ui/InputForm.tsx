"use client";

import Closed from "@/shared/assets/icons/Closed";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 1 | 2;

  // для RHF
  control?: Control<any>;
  name: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, error, variant, control, name, ...props }) => {
  const [value, setValue] = useState("");
  if (!control) {
    return (
      <label className="flex flex-col gap-1 relative">
        {label && <span className="text-2xl text-[#1D1D1D] font-medium font-[Inter,sans-serif]">{label}</span>}

        <div
          className={`relative ${
            variant === 1 ? "bg-white" : "bg-white lg:bg-[#E7EBEE]"
          } w-full rounded-[20px] p-5 text-[20px] leading-[100%] outline-none text-[#1D1D1D] pr-10`}
        >
          <input
            {...props}
            value={value}
            onChange={e => setValue(e.target.value)}
            className="w-full h-full outline-none focus:outline-none"
          />

          {value.length > 0 && (
            <button
              type="button"
              onClick={() => setValue("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer"
            >
              <Closed small />
            </button>
          )}
        </div>

        {error && <span className="text-xs font-medium text-[#BF3131]">{error}</span>}
      </label>
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="flex flex-col gap-1 relative">
          {label && <span className="text-2xl text-[#1D1D1D] font-medium font-[Inter,sans-serif]">{label}</span>}
          <div
            className={`${
              variant === 1 ? "bg-white" : "bg-white lg:bg-[#E7EBEE]"
            } rounded-[10px] px-5 py-[16.5px] text-[16px] leading-[100%] outline-none ${
              error ? "text-[#BF3131]" : "text-[#1D1D1D]"
            } pr-10 relative`}
          >
            <input
              {...props}
              {...field}
              value={field.value ?? ""}
              className="w-full h-full outline-none focus:outline-none"
            />

            {/* Крестик внутри input */}
            {field.value && field.value.length > 0 && (
              <button
                type="button"
                onClick={() => field.onChange("")}
                className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 p-1 flex items-center justify-center"
              >
                <Closed small />
              </button>
            )}
          </div>
          {error && <span className="text-xs font-medium text-[#BF3131]">{error}</span>}
        </label>
      )}
    />
  );
};

export default InputForm;

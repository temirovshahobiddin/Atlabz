/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useRef, useState } from "react";

type OTPInputProps = {
  length?: number;
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
  inputClassName?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

export default function OTPInput({
  length = 4,
  value,
  onChange,
  className = "",
  inputClassName = "",
  autoFocus = true,
  disabled = false,
  placeholder = "",
}: OTPInputProps) {
  // internal state when uncontrolled
  const [internal, setInternal] = useState<string[]>(() => Array(length).fill(""));
  const refs = useRef<Array<HTMLInputElement | null>>(Array(length).fill(null));

  // keep internal in sync with controlled value
  useEffect(() => {
    if (value !== undefined) {
      const chars = value.slice(0, length).split("");
      const arr = Array(length).fill("");
      for (let i = 0; i < chars.length; i++) arr[i] = chars[i];
      setInternal(arr);
    }
  }, [value, length]);

  const notify = (arr: string[]) => {
    const joined = arr.join("");
    onChange?.(joined);
  };

  // when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const raw = e.target.value;
    const last = raw.slice(-1).replace(/\s+/g, "");
    if (!last && raw !== "") return;

    const next = [...internal];

    if (raw.length > 1) {
      const paste = raw.split("").slice(0, length - idx);
      for (let i = 0; i < paste.length; i++) {
        next[idx + i] = paste[i];
      }
      setInternal(next);
      notify(next);

      const focusTo = Math.min(length - 1, idx + paste.length - 1);
      refs.current[focusTo]?.focus();
      refs.current[focusTo]?.select();
      return;
    }

    next[idx] = last || "";
    setInternal(next);
    notify(next);

    if (last && idx < length - 1) {
      refs.current[idx + 1]?.focus();
      refs.current[idx + 1]?.select();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    const key = e.key;
    if (key === "Backspace") {
      if (internal[idx]) {
        // clear current
        const next = [...internal];
        next[idx] = "";
        setInternal(next);
        notify(next);
        e.preventDefault();
      } else if (idx > 0) {
        refs.current[idx - 1]?.focus();
        const next = [...internal];
        next[idx - 1] = "";
        setInternal(next);
        notify(next);
        e.preventDefault();
      }
    } else if (key === "ArrowLeft" && idx > 0) {
      refs.current[idx - 1]?.focus();
      e.preventDefault();
    } else if (key === "ArrowRight" && idx < length - 1) {
      refs.current[idx + 1]?.focus();
      e.preventDefault();
    }
  };

  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-label={`OTP input with ${length} fields`}
    >
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={el => {
            refs.current[i] = el;
          }}
          value={internal[i] || ""}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={length} // allow pasting more than 1 char, we handle distribution
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          aria-label={`Digit ${i + 1}`}
          className={`
            w-[66px] h-[81px] lg:w-[118px] lg:h-[129px]
            text-4xl font-semibold
            text-center
            focus:outline-none focus:ring-4 focus:ring-offset-2
            rounded-2xl lg:rounded-[40px]
            appearance-none
            ${inputClassName}
          `}
          // prevent mobile auto-capitalize and auto-correct
          autoComplete="one-time-code"
          autoCapitalize="off"
          spellCheck={false}
        />
      ))}
    </div>
  );
}

/*
  Usage example (Next page or any component):

  import OTPInput from '@/components/OTPInput';
  import { useState } from 'react';

  export default function Demo() {
    const [code, setCode] = useState('');

    return (
      <div className="p-8">
        <h2 className="mb-4">Подтвердите код</h2>
        <OTPInput
          length={4}
          value={code}
          onChange={(v) => setCode(v)}
          inputClassName="bg-white"
        />
        <p className="mt-4">Текущее значение: {code}</p>
      </div>
    );
  }

  Notes:
  - Каждый input имеет размер 118x129 (Tailwind arbitrary values).
  - Используется rounded-[60px] чтобы получить «полугруглую» форму.
  - Компонент поддерживает вставку целого кода — он распределит символы по полям.
  - Для Numeric OTP используются inputMode="numeric" и autoComplete="one-time-code".
  - Можно использовать как контролируемый (через value/onChange) или неконтролируемый (без value).
*/

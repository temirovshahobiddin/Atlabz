"use client";

type CheckboxProps = {
  size?: number; // ширина и высота в px (одно значение)
  checked?: boolean;
  onChange?: (value: boolean) => void;
  white?: boolean;
};

const CheckBoxCircle = ({ size = 22, checked, white, onChange }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={e => onChange?.(e.target.checked)} className="peer hidden" />

      <span
        style={{ width: size, height: size }}
        className={`rounded-full border-2 ${white ? "border-white" : "border-[#1D1D1D]"} bg-white
          flex items-center justify-center
          peer-checked:bg-(--blue) ${white ? "peer-checked:border-white" : "peer-checked:border-(--blue)"} 
          transition`}
      >
        {size === 64 ? (
          <svg width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34 2L12 24.0535L2 14.0292"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 1L4.4375 8.5809L1 5.13504"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );
};

export default CheckBoxCircle;

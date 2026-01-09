"use client";

type CheckboxProps = {
  size?: number; // ширина и высота в px (одно значение)
  checked?: boolean;
  onChange?: (value: boolean) => void;
  white?: boolean;
  clickable?: boolean; // если false, клики проходят к родителю
};

const CheckBoxCircle = ({ size = 22, checked, white, onChange, clickable = true }: CheckboxProps) => {
  return (
    <div className={`inline-flex items-center ${clickable ? 'cursor-pointer' : 'pointer-events-none'}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={e => onChange?.(e.target.checked)} 
        className="peer hidden" 
      />

      <span
        style={{ width: size, height: size }}
        className={`rounded-full border-2 ${white ? "border-white" : "border-[#1D1D1D]"} 
          flex items-center justify-center
          ${checked ? `bg-[#3831bf] ${white ? "border-white" : "border-[#3831bf]"}` : "bg-white"}
          transition`}
      >
        {checked && (size === 64 ? (
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
        ))}
      </span>
    </div>
  );
};

export default CheckBoxCircle;

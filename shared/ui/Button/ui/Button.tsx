import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 1 | 2 | 3 | 4 | 5;
  children?: React.ReactNode;
  rounded?: string;
  className?: string;
}

const Button = ({ variant = 1, children, rounded = "20", className, ...props }: ButtonProps) => {
  const variants = {
    1: "bg-[#3831BF] text-[#D9D9D9] ",
    2: "bg-[#7470B7] text-[#FFFFFF] ",
    3: "bg-transparent text-[#3831BF] border border-[#3831BF] ",
    4: "bg-[#FFFFFF] text-[#1D1D1D] ",
    5: "bg-[#E7EBEE] text-[#1D1D1D] ",
  };

  return (
    <button
      {...props}
      className={`p-5 w-full rounded-[${rounded}px] ${className} tracking-[-0.05em] leading-none transition-all cursor-pointer text-[20px] font-semibold ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;

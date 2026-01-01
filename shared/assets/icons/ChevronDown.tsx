import React from "react";

const ChevronDown = ({ width = 40 }: { width?: number }) => {
  return (
    <svg
      width={width}
      height={width}
      className="w-6 h-6 lg:w-full lg:h-full"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 15L12 9L6 15" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ChevronDown;

import React from "react";

const ChapterArrow = () => {
  return (
    <svg className="w-6 h-6 lg:w-[30px] lg:h-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="29" height="29" rx="4.5" stroke="#3831BF" />
      <path
        d="M15 19.9583V10.0417"
        stroke="#3831BF"
        strokeWidth="1.41667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.043 15L15.0013 10.0416L19.9596 15"
        stroke="#3831BF"
        strokeWidth="1.41667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChapterArrow;

import React from "react";

const Filter = ({ width = "w-[33px] h-[33px]" }) => {
  return (
    <svg className={`${width}`} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.9993 4.0918H2.72656L13.6357 16.9918V25.91L19.0902 28.6373V16.9918L29.9993 4.0918Z"
        stroke="black"
        strokeWidth="2.72727"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Filter;

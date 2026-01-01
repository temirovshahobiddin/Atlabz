import React from "react";

type Props = {
  width?: number;
};

const Burger = ({ width }: Props) => {
  return (
    <svg width={width || 60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width || 60} rx="30" fill="white" />
      <path
        d="M45.8858 26.4707H14.1211"
        stroke="#1D1D1D"
        strokeWidth="3.52941"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8858 19.4121H14.1211"
        stroke="#1D1D1D"
        strokeWidth="3.52941"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8858 33.5293H14.1211"
        stroke="#1D1D1D"
        strokeWidth="3.52941"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8858 40.5879H14.1211"
        stroke="#1D1D1D"
        strokeWidth="3.52941"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;

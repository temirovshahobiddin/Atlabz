import React from "react";

const Closed = ({ small }: { small?: boolean }) => {
  return (
    <svg
      className={` ${small ? "w-6 h-6" : "w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]"}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M45 15L15 45" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 15L45 45" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Closed;

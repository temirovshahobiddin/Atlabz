import React from "react";

interface WhyWeCardProps {
  icon: React.ReactNode;
  text: string;
}

interface WhyWeProps {
  whyme: WhyWeCardProps[];
}

const WhyWe = ({ whyme }: WhyWeProps) => {
  return (
    <div className="flex flex-col gap-[30px]  w-full mt-[60px] xl:mt-[150px] ">
      <h1 className="title-1">Почему выбирают AtLabs:</h1>
      <div className="flex flex-col gap-2.5">
        {whyme.map((item, idx) => (
          <div className="flex gap-[11px] bg-white px-3 py-2.5 sm:p-5 items-center rounded-[20px]" key={idx}>
            <div className="">{item.icon}</div>
            <div className="text-[16px] sm:text-[24px] lg:text-[28px] xl:text-[36px] leading-[100%] tracking-[-0.05em]">
              {item.text}
            </div>
          </div>
        ))}    
      </div>
    </div>
  );
};

export default WhyWe;

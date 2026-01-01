/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

interface CardCabinetServicesProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  ButtonComponent?: React.ReactNode;

  modal?: () => void; // 🔥 добавлено
  link?: string; // 🔥 добавлено

  onClick?: () => void; // кастомный override
}

const CardCabinetServices: React.FC<CardCabinetServicesProps> = ({
  title,
  description,
  imageSrc,
  ButtonComponent,
  onClick,
  modal,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) return onClick();
    if (modal) return modal();
    if (link) return router.push(link);
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col justify-between rounded-[20px] bg-white xl:max-w-[439px] px-4 py-6 w-full h-[367px] lg:h-[436px] overflow-hidden cursor-pointer"
    >
      <div className="max-w-[338px] w-full z-10">
        <h2 className="text-[24px] lg:text-[32px] font-bold leading-[100%] tracking-[-0.05em] uppercase">{title}</h2>
      </div>

      <div className="flex flex-col gap-[15px] xl:max-w-[407px] z-10">
        {description && <p className="text-[16px] font-medium leading-[120%] tracking-[0%]">{description}</p>}
        {ButtonComponent}
      </div>

      {imageSrc && (
        <img
          className="absolute bottom-20 right-5 lg:bottom-[125px] lg:right-[50px] z-0 object-contain"
          src={imageSrc}
          alt={title}
        />
      )}
    </div>
  );
};

export default CardCabinetServices;

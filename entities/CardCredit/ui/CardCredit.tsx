/* eslint-disable @next/next/no-img-element */

import Closed from "@/shared/assets/icons/Closed";
import React from "react";

export interface CardCreditProps {
  number: string;
  icon: string;
  deleted?: boolean;
  onDelete?: () => void;
}

const CardCredit = ({ number, icon, onDelete, deleted }: CardCreditProps) => {
  const maskedNumber = `*${number.slice(-4)}`; // последние 4 цифры

  return (
    <div className="flex  justify-between">
      <div className="flex gap-[11px]">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div>{maskedNumber}</div>
      </div>
      {deleted && (
        <button onClick={onDelete}>
          <Closed small />
        </button>
      )}
    </div>
  );
};

export default CardCredit;

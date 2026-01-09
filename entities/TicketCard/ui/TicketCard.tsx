import CheckBoxCircle from "@/shared/ui/CheckBoxCircle";
import React from "react";

interface Ticket {
  month: string;
  savings?: string;
  discount?: string;
  price: string;
}

interface TicketCardProps {
  item: Ticket;
  selected: boolean;
  onSelect: () => void;
}
const TicketCard = ({ item, selected, onSelect }: TicketCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-[20px] p-6 flex flex-col gap-[37px] cursor-pointer ${
        selected ? "border-2 border-[#1D1D1D]" : ""
      }`}
    >
      <div className="flex justify-between">
        <p className="text-[24px] font-medium text-[#545454]">{item.month}</p>

        {item.savings && (
          <div className="bg-[#3831BF] text-[20px] font-medium flex items-center justify-center rounded-[10px] px-2 text-white">
            {item.savings}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <CheckBoxCircle size={30} checked={!!selected} clickable={false} />
        <div className="flex items-end gap-4">
          <p className="line-through text-[16px] mb-2.5 text-[#545454]">{item.discount}₽</p>
          <p className="text-[48px] font-bold">{item.price}₽</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

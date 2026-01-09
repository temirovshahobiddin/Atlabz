import CheckBoxCircle from "@/shared/ui/CheckBoxCircle";

interface CardTicketProps {
  month?: string;
  discount?: string;
  price?: string;
  savings?: string;
  bg?: string;

  selected?: boolean; // новая пропса
  onSelect?: () => void; // новая пропса
}

const CardTicket = ({ month, discount, price, savings, bg = "#ffff", selected, onSelect }: CardTicketProps) => {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col ${
        selected ? "border-[#1D1D1D] border-2" : ""
      } justify-between cursor-pointer p-6 2xl:max-w-[440px] w-full h-[412px] rounded-[20px]`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex flex-wrap gap-2.5 justify-between items-center">
        <p className="text-[24px] text-[#1D1D1D]/50 w-full max-w-[99px] leading-[100%] tracking-[-0.05em] font-medium">
          {month}
        </p>

        {savings && (
          <div className="bg-(--blue) text-[16px] 2xl:text-[32px] leading-[100%] p-2.5 text-white rounded-[10px]">
            {savings}
          </div>
        )}
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="line-through text-[#1D1D1D]/50 text-[20px] font-medium">{discount} руб. в месяц</p>
          <p className="text-black font-bold text-[64px] max-md:text-[48px]">{price}₽</p>
        </div>
        <CheckBoxCircle checked={!!selected} size={64} clickable={false} />
      </div>
    </div>
  );
};

export default CardTicket;

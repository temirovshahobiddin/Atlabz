import Condition from "@/shared/assets/icons/Condition";

interface CardConditionProps {
  title?: string;
  text?: string;
}

const CardConditionSave = ({ title, text }: CardConditionProps) => {
  return (
    <div className="flex flex-col gap-[18px] xl:max-w-[893px] items-center w-full bg-white p-5 rounded-[20px] cursor-pointer select-none">
      <div className="flex gap-[5px] items-center w-full">
        <Condition />
        <span className="text-[20px] lg:text-[36px] font-bold uppercase  leading-[100%] tracking-[-0.05em]">
          {title}
        </span>
      </div>
      <div className="flex justify-center w-full ">{text}</div>
    </div>
  );
};

export default CardConditionSave;

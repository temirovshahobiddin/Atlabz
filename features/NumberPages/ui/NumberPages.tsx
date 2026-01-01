import Alert from "@/shared/assets/icons/Alert";
import ChevronDown from "@/shared/assets/icons/ChevronDown";

const NumberPages = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className=" text-[#1D1D1D] text-[16px] sm:text-[20px] lg:text-[32px] leading-[120%] font-bold tracking-[0%] mb-5">
        Колличество страниц
      </h2>
      <div className="flex gap-2 items-center mb-[5px]">
        <button className="bg-[#FFFFFF] py-[14.5px] px-[12.5px] rounded-[20px]  cursor-pointer">
          <div className="w-6 h-6 rotate-270">
            <ChevronDown />
          </div>
        </button>

        <input
          type="number"
          className="text-center w-full rounded-[20px] text-[20px] font-semibold leading-[80%] tracking-[-0.05em] outline-0 py-[14.5px] bg-white"
        />

        <button className="bg-[#FFFFFF]  py-[14.5px] px-[12.5px] rounded-[20px]  cursor-pointer">
          <div className="w-6 h-6 rotate-90">
            <ChevronDown />
          </div>
        </button>
      </div>

      <div className="py-2.5 h-[45px] px-4 w-full rounded-[20px] bg-white flex gap-[15px] items-center">
        <Alert />
        <span>Максимум 20 стр</span>
      </div>
    </div>
  );
};

export default NumberPages;

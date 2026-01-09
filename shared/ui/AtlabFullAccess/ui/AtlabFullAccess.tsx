import SliderLabs from "@/features/SliderLabs/ui/SliderLabs";
import MobileSlider from "@/features/MobileSliderLabs";

interface AtlabFullAccessProps {
  filterTabs?: string[]; // Показывать только эти табы (например ["works", "combo"])
}

const AtlabFullAccess = ({ filterTabs }: AtlabFullAccessProps) => {
  return (
    <>
      <div id="rates" className="max-md:hidden">
        <div className="flex flex-col gap-[15px] ">
          <h4 className="text-(--blue) font-bold text-[28px] sm:text-[40px] lg:text-[48px] xl:text-[64px] uppercase tracking-[-0.05em] leading-[100%] ">
            Открой полный доступ к AtLabs
          </h4>
          <p className="text-(--blue)/60 text-[24px] lg:text-[28px] xl:text-[32px] leading-[120%] max-w-[900px] w-full max-md:text-[20px] max-sm:text-[16px]">
            При регистрации дарим 100 токенов, чтобы протестировать сервис. И кнопка регистрации
          </p>
        </div>
        <SliderLabs filterTabs={filterTabs} />
      </div>
      <MobileSlider filterTabs={filterTabs} />
    </>
  );
};

export default AtlabFullAccess;

import CardCabinetServices from "@/entities/CardCabinetServices";
import Button from "../../Button";

type CardItem = {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
  modal?: () => void;
  buttonText?: string;
};

const CardsBlock = ({ title, cards }: { title: string; cards: CardItem[] }) => {
  return (
    <div id="about" className="flex flex-col gap-4 sm:gap-[30px] mt-20 xl:mt-[137px]">
      <h3 className="text-[32px] blue sm:text-[40px] xl:text-[64px] leading-[100%] tracking-[-0.05em] font-bold uppercase max-w-[342px] sm:max-w-[1346px] w-full max-md:text-[40px] max-sm:text-[28px]">
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-[15px] max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:gap-3 max-xl:gap-2.5 max-sm:grid-cols-1 max-sm:m-auto max-sm:gap-2">
        {cards.map((card, index) => (
          <div key={index} className="mb-[30px] max-xl:mb-0">
            <CardCabinetServices
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              modal={card.modal}
              link={card.link}
              ButtonComponent={<Button variant={1}>{card.buttonText ?? "Помощь с учебой"}</Button>}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsBlock;

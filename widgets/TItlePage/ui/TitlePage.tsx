import Button from "@/shared/ui/Button";
import InputForm from "@/shared/ui/InputForm";

import Image from "next/image";

import titlepage from "@/shared/assets/premium/titlepage.png";
import Link from "next/link";

const TitlePage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] w-full ">
        <h1 className="title-1  max-w-[1420px]">Проверим Добавим титульный лист?</h1>
        <p className="text-[16px] sm:text-[20px]  max-w-[1350px] lg:text-[32px] text-[#1D1D1D] font-medium leading-[80%] tracking-[-0.05em]">
          Не переживай 🙂 ФИО и данные нужны лишь для оформления титульника. Никто, кроме тебя, их не увидит.
        </p>

        <div className="flex gap-[15px] mt-[30px]">
          <form className="max-w-[893px] w-full" action="">
            <div className="flex flex-col gap-2 lg:bg-white lg:p-[30px] w-full rounded-[20px]">
              <InputForm label="ФИО" name={""} />
              <InputForm label="Название учебного заведения" name={""} />
              <InputForm label="Город, в котором учереждение" name={""} />
              <InputForm label="Направление (факультет)" name={""} />
              <InputForm label="Специальность" name={""} />
              <InputForm label="Группа" name={""} />
              <InputForm label="Предмет" name={""} />
            </div>
            <div className="flex gap-[15px] mt-[15px]">
              <input type="checkbox" />
              <span>Соглашаюсь на обработку персональных данных</span>
            </div>
            <div className="w-full flex flex-col gap-2.5 mt-[30px]">
              <Link href={"/premium/history-money"}>
                <Button>Продолжить</Button>
              </Link>
              <Link href={"/premium/history-money"}>
                <Button variant={3}>Пропустить</Button>
              </Link>
            </div>
          </form>
          <div className="bg-white px-[116px] py-6 rounded-[20px] max-h-[254px] max-w-[438px] w-full hidden xl:block">
            <Image src={titlepage.src} width={206} height={206} alt="" />
          </div>
          <div className="bg-white border-2 border-[#3831BF] py-7 px-[30px] rounded-[20px] max-w-[438px] max-h-32 hidden xl:block">
            <span className="text-[16px] 2xl:text-[20px] leading-[120%] tracking-[0%] font-medium text-[#1D1D1D]">
              Заполни данные — AtLabs оформит титульный лист (со 100% анонимностью)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitlePage;

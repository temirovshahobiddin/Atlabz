import CardAwardsProfile from "@/entities/CardAwardsProfile";
import InputForm from "@/shared/ui/InputForm";
import React from "react";

import award1 from "@/shared/assets/cabinet/award1.png";
import award2 from "@/shared/assets/cabinet/award2.png";

const MyProfilePage = () => {
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Мой профиль</h1>
      </div>

      <form
        className="flex flex-col gap-2 lg:bg-white lg:p-[30px] rounded-[20px] mb-5 sm:mb-10 lg:mb-[150px] max-w-[893px]"
        action=""
      >
        <InputForm label="ФИО" name={"fullName"} />
        <InputForm label="Учебное заведение" placeholder="Введите вуз или школу" name={"institution"} />
        <InputForm label="Город" placeholder="Москва" name={"city"} />
      </form>

      <div className="flex flex-col gap-[15px] w-full ">
        <h2 className="title-1">Награды</h2>
        <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap">
          <CardAwardsProfile
            icon={award1.src}
            title={"Первая решённая задача"}
            quantity={10}
            currentQuantity={5}
            legend={false}
          />
          <CardAwardsProfile
            icon={award1.src}
            title={"Первая решённая задача"}
            quantity={10}
            currentQuantity={10}
            legend={false}
          />
          <CardAwardsProfile
            icon={award2.src}
            title={"Первая решённая задача"}
            quantity={10}
            currentQuantity={5}
            legend={true}
          />
          <CardAwardsProfile
            icon={award2.src}
            title={"Первая решённая задача"}
            quantity={10}
            currentQuantity={10}
            legend={true}
          />
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;

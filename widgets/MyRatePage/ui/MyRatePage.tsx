"use client";
import React, { useState } from "react";
import CardRate from "@/entities/CardRate";
import Button from "@/shared/ui/Button";

import balance1 from "@/shared/assets/cabinet/balance1.png";
import balance2 from "@/shared/assets/cabinet/balance2.png";
import balance3 from "@/shared/assets/cabinet/balance3.png";
import credit from "@/shared/assets/cabinet/credit.png";
import MyCreditCards from "@/features/MyCreditCards";

import Balance from "@/features/Balance";
import Modal from "@/shared/ui/Modal.tsx";
import CardTicket from "@/entities/CardTicket";
import { benefitCards, cardTickets } from "@/app/moki";
import CardBenefit from "@/entities/CardBenefit/ui/CardBenefit";

const cards = [
  {
    icon: credit.src,
    number: "33333333333333333333",
  },
  {
    icon: credit.src,
    number: "33333333333333333333",
  },
  {
    icon: credit.src,
    number: "33333333333333333333",
  },
];

const cardBalance = [
  {
    iconSrc: balance1.src,
    title: "Задачи",
    balance: "∞",
  },
  {
    iconSrc: balance2.src,
    title: "Работы",
    balance: "110",
  },
  {
    iconSrc: balance3.src,
    title: "Контрольные",
    balance: "110",
  },
];

const MyRatePage = () => {
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false); // Модалка для подтверждения удаления карты
  return (
    <section>
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Мой тариф</h1>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-4 sm:gap-5 lg:gap-[15px]">
        <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-[15px] xl:max-w-[893px] w-full">
          <CardRate />
          <Button onClick={() => setOpen(true)}>Продлить</Button>
          <Button>Включить автоплатеж</Button>
        </div>
        <div className="xl:max-w-[438px] w-full">
          <MyCreditCards cards={cards} onDelete={() => setConfirmDelete(true)} />
        </div>
        <div className="xl:max-w-[438px] w-full">
          <Balance cardBalance={cardBalance} />
          <Button>Пополнить</Button>
        </div>
      </div>
      <Modal maxWidth="1799" isOpen={open} padding="0" onClose={() => setOpen(false)}>
        <div className="w-full p-[30px] lg:p-[50px]">
          <h1 className="title-1">Мой тариф</h1>
          <div className="custom-scrollbar max-h-[70vh] xl:max-h-full overflow-y-auto ">
            <div className="hidden lg:flex gap-[15px] mt-[30px] ">
              {benefitCards.map((card, index) => (
                <CardBenefit key={index} {...card} />
              ))}
            </div>
            <div className="gap-2.5 mt-[30px] w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {cardTickets.map((item, idx) => (
                <CardTicket
                  key={idx}
                  month={item.month}
                  price={item.price}
                  savings={item.savings}
                  discount={item.discount}
                  bg={"#E7EBEE"}
                />
              ))}
            </div>
            <Button className="mt-[50px]">Оформить подписку</Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={confirmDelete} showClose={false} onClose={() => setConfirmDelete(false)} maxWidth={"893"}>
        <h3 className="text-[24px] sm:text-[32px] w-full text-center">Вы уверены, что хотите отвязать карту?</h3>
        <p className="text-[16px] sm:text-[20px] xl:text-[28px] font-medium max-w-[893px] text-center tracking-[] w-full leading-[120%]">
          карта **** **** **** 3333
        </p>
        <div className="flex gap-4 mt-4 justify-end">
          <Button variant={1} onClick={() => setConfirmDelete(false)}>
            Отмена
          </Button>
          <Button
            onClick={() => {
              setConfirmDelete(false);
              // Логика удаления карты здесь
            }}
          >
            Удалить
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default MyRatePage;

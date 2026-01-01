"use client";

import HowItWorks from "@/shared/ui/HowItWorks";
import SolvingProblemSlider from "@/shared/ui/SolvingProblemSlider";
import SubsHero from "@/shared/ui/SubsHero";
import hw1 from "@/shared/assets/home/howWork1.png";
import hw2 from "@/shared/assets/home/howWork2.png";
import hw3 from "@/shared/assets/home/howWork3.png";
import hw4 from "@/shared/assets/home/howWork4.png";
import React, { useState } from "react";
import ReviewsSlider from "@/shared/ui/Rewiews";
import WhyWe from "@/shared/ui/WhyWe";
import { whywe } from "@/app/moki";
import SolveNow from "@/shared/ui/SolveNow";
import Modal from "@/shared/ui/Modal.tsx";
import ModalBonus from "@/entities/ModalBonus";

const HelpExamPage = () => {
  const [isOpenBonus, setIsOpenBonus] = useState(false);
  return (
    <div>
      <SubsHero
        title="Помочь с контрольной"
        description="Просто введи условие или прикрепи фото — мы быстро подготовим решение для тебя."
      />
      <SolvingProblemSlider />
      <HowItWorks
        slides={[
          {
            title: "Выбери ИИ-агента",
            text: "Хотите написать текст, решить задачу или получить совет? У нас есть агент для каждой цели — просто выберите того, кто вам подходит.",
            image: hw1.src,
          },
          {
            title: "Загрузи задание или вопрос",
            text: "Напишите вопрос, тему задания или задачу в удобной форме. Чем точнее запрос, тем лучше результат.",
            image: hw2.src,
          },
          {
            title: "Получи готовый результат",
            text: "ИИ анализирует ваш запрос и выдает готовое решение, советы или идеи — понятно и без лишней воды.",
            image: hw3.src,
          },
          {
            title: "Продолжай общение",
            text: "Не останавливайтесь на одном ответе! Задавайте уточняющие вопросы и развивайте тему в диалоге.",
            image: hw4.src,
          },
        ]}
      />
      <ReviewsSlider />
      <WhyWe whyme={whywe} />
      <SolveNow onClick={() => setIsOpenBonus(true)} />

      <Modal maxWidth="893" isOpen={isOpenBonus} padding="0" onClose={() => setIsOpenBonus(false)}>
        <ModalBonus />
      </Modal>
    </div>
  );
};

export default HelpExamPage;

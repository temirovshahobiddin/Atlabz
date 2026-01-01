/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

import Button from "@/shared/ui/Button";
import pc1 from "@/shared/assets/home/LabPchycho1.png";
import pc2 from "@/shared/assets/home/LabPchycho2.png";
import pc3 from "@/shared/assets/home/LabPchycho3.png";
import pc4 from "@/shared/assets/home/LabPchycho4.png";
import hw1 from "@/shared/assets/home/howWork1.png";
import hw2 from "@/shared/assets/home/howWork2.png";
import hw3 from "@/shared/assets/home/howWork3.png";
import hw4 from "@/shared/assets/home/howWork4.png";

import aLTg from "@/shared/assets/home/AtlabTG.png";
import hero from "@/shared/assets/home/hero.png";
import FAQ from "@/shared/ui/faq";
import WhyWe from "@/shared/ui/WhyWe";
import { faq, whywe } from "@/app/moki";
import ReviewsSlider from "@/shared/ui/Rewiews";
import SmartHelpSlider from "@/shared/ui/SmartHelp";
import AtlabFullAccess from "@/shared/ui/AtlabFullAccess/ui/AtlabFullAccess";
import HeroBlock from "@/shared/ui/HeroBlock";
import HowItWorks from "@/shared/ui/HowItWorks";
import TryNow from "@/shared/ui/TryNow";
import CardsBlock from "@/shared/ui/CardsBlock";
import Logo from "@/shared/assets/icons/Logo";
import Modal from "@/shared/ui/Modal.tsx";
import InputForm from "@/shared/ui/InputForm";

import ModalBonus from "@/entities/ModalBonus";
import BonusBanner from "@/entities/BonusBanner";
import ModalCookie from "@/entities/ModalCookie";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [isOpenBonus, setIsOpenBonus] = useState(false);
  const [isOpenCookie, setIsOpenCookie] = useState(true);
  return (
    <div>
      <HeroBlock
        sliderText="Помощь с учебой"
        title="Твой персональный AI-ассистент на каждый день"
        description="Решай задачи, принимай решения, развивайся — всё в одном месте."
        img={hero.src}
        openModal={() => setIsOpenBonus(true)}
      />

      <CardsBlock
        title="Четыре лаборатории — один личный кабинет"
        cards={[
          {
            title: "Лаборатория обучения",
            imageSrc: pc4.src,
            description: "Сэкономь 10 часов на подготовке, 99% студентов с нами получают “4+ и 5”",
            buttonText: "Помощь с учебой",
            link: "/home-problem-solve",
          },
          {
            title: "Лаборатория психологии",
            imageSrc: pc3.src,
            description: "Когда тревожно или тяжело — мы рядом, 24/7 поддержка, когда никто не отвечает",
            buttonText: "В разработке",
            modal: () => setOpen(true),
          },
          {
            title: "Лаборатория развития",
            imageSrc: pc2.src,
            description:
              "Хочешь расти в карьере и жизни? 99% наших клиентов находят новые точки роста уже на 1-й неделе",
            buttonText: "В разработке",
            modal: () => setOpen(true),
          },
          {
            title: "Лаборатория финансов",
            imageSrc: pc1.src,
            description: "Накопи первые 100 000 ₽ уже за год — с нашей стратегией это реально",
            buttonText: "В разработке",
            modal: () => setOpen(true),
          },
        ]}
      />

      <div className="grid grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-[15px] mt-[60px] lg:mt-[100px]">
        <div className="bg-(--blue) text-white 2xl:max-w-[439px] w-full h-40 sm:h-[250px] xl:h-[300px] rounded-[40px] flex flex-col items-center justify-center">
          <h5 className="text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-[100%]">50 000+</h5>
          <p className="text-[14px] sm:text-[20px] ">пользователей</p>
        </div>
        <div className="bg-white text-black 2xl:max-w-[439px] w-full  h-40 sm:h-[250px] xl:h-[300px] rounded-full flex flex-col items-center justify-center">
          <h5 className="text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-[100%]">97%</h5>
          <p className="text-[14px] sm:text-[20px]  w-full max-w-[142px] sm:max-w-[257px] text-center">
            клиентов возвращаются повторно
          </p>
        </div>
        <div className="bg-black text-white 2xl:max-w-[439px] w-full h-40 sm:h-[250px] xl:h-[300px] rounded-r-full flex flex-col items-center justify-center">
          <h5 className="text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-[100%]">1000+</h5>
          <p className="text-[14px] sm:text-[20px] ">учебных работ</p>
        </div>
        <div className="bg-[#E7EBEE] text-(--blue) 2xl:max-w-[439px] w-full h-40 sm:h-[250px] xl:h-[300px] rounded-tl-[1000px] rounded-t-[40px] rounded-b-[40px] flex flex-col items-center justify-center">
          <h5 className="text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-[100%] uppercase">1 млн +</h5>
          <p className="text-[14px] sm:text-[20px] ">решенных задач</p>
        </div>
      </div>

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

      <TryNow />

      <ReviewsSlider />
      <SmartHelpSlider />

      <div className="mt-[60px] lg:mt-[165px]">
        <AtlabFullAccess />
        <div className="mt-[60px] lg:mt-[150px]">
          <h3 className="text-(--blue) text-[28px] sm:text-[40px] xl:text-[64px] font-bold uppercase">
            AtLabs в Telegram
          </h3>
          <p className="text-[#3831BF]/60 font-medium text-[16px] sm:text-[20px] xl:text-[32px] leading-[120%]">
            Ваш AI-помощник всегда в мессенджере: отвечает на вопросы, генерирует тексты, решает задачи и помогает
            учиться.
          </p>
          <div className="w-full flex items-center mt-[30px] lg:mt-0 justify-center">
            <img src={aLTg.src} className="w-[200px] sm:w-[600px] lg:w-[1000px]" alt="" />
          </div>
          <Button variant={1}>Открыть в Telegram</Button>
        </div>

        <div className="mt-[60px] lg:mt-[150px]">
          <h3 className="text-(--blue) mb-[15px] text-[28px] sm:text-[40px] xl:text-[64px] leading-[100%] tracking-[-0.05em] font-bold uppercase max-md:text-[40px] max-sm:text-[28px]">
            О продукте
          </h3>
          <div className="flex justify-center my-2.5 py-3.5 bg-white sm:hidden ">
            <Logo />
          </div>
          <div className="w-full sm:bg-white rounded-[40px] sm:p-[30px] text-[40px] font-medium leading-[120%] tracking-[-0.05em] flex flex-col gap-[16px]">
            <p className="text-[18px] sm:text-[32px] font-medium leading-[120%] tracking-[-0.05em]">
              <span className="text-(--blue) text-[20px] sm:text-[32px] font-bold">Это</span> не просто AI, а
              персональные онлайн-сервисы, которые помогают решать реальные задачи. Наши инструменты помогают студентам
              и школьникам решать задачи, писать рефераты, эссе и курсовые, готовиться к экзаменам.
            </p>
            <p className="text-[18px] sm:text-[32px] font-medium leading-[120%] tracking-[-0.05em]">
              AtLabs — это{" "}
              <span className="text-(--blue) text-[20px] sm:text-[32px] font-bold">Персональный комплекс сервисов</span>
              , который экономит ваше время, помогает принимать решения и двигаться вперёд.
            </p>
            <p className="text-[18px] sm:text-[32px] font-medium leading-[120%] tracking-[-0.05em]">
              <span className="text-(--blue) text-[20px] sm:text-[32px] font-bold">Личный финансовый помощник</span>{" "}
              подскажет, как планировать бюджет, распределять расходы и сделать первые инвестиции. Коуч по развитию
              поможет выстроить план развития, проведет карьерную консультацию, поделится полезными материалами.
            </p>
            <p className="text-[18px] sm:text-[32px] font-medium leading-[120%] tracking-[-0.05em]">
              <span className="text-(--blue) text-[20px] sm:text-[32px] font-bold">ИИ Психолог</span> поможет заглянуть
              вглубь себя, проанализировать ситуацию, посмотреть с другого ракурса.{" "}
            </p>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[130px] flex flex-col gap-[30px] lg:gap-[72px]">
          <h3 className="text-(--blue) text-[28px] sm:text-[40px] xl:text-[64px] font-bold uppercase">
            Арсенал AtLabs:
          </h3>
          <div className="grid grid-cols-2 gap-[15px]">
            <div className="bg-white rounded-[10px] min-h-9 sm:min-h-[90px] px-5 flex items-center text-[36px] font-semibold uppercase max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Лаборатория
            </div>
            <div className="bg-white rounded-[10px] min-h-9 sm:min-h-[90px] px-5 flex items-center text-[36px] font-semibold uppercase max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Что умеет
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px]  leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Лаборатория обучения
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Персональная помощь с решением задач, контрольных и тестов, написание работ (рефераты, эссе, курсовые).
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Лаборатория финансов
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Личный финансовый советник: анализ бюджета, планирование расходов, советы по накоплениям и инвестициям.
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Лаборатория развития
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Персональные стратегии роста, карьерные консультации, тесты и планы развития.
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Лаборатория Психологии
            </div>
            <div className="bg-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Онлайн-психологическая поддержка 24/7: помощь при тревоге, стрессе и выгорании. Поможем разобраться в
              мыслях, снять стресс и вернуть внутренний баланс. Всё анонимно и безопасно.
            </div>
            <div className="bg-(--blue) text-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[36px] font-bold py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Комбо AtLabs
            </div>
            <div className="bg-(--blue) text-white rounded-[10px] min-h-[90px] px-5 flex items-center text-[32px] font-medium py-5 max-lg:text-[28px] max-md:text-[16px] leading-[100%] tracking-[-0.05em] max-sm:text-[14px]">
              Все сервисы сразу: учёба, финансы, развитие и Таро — персональный помощник на каждый день.
            </div>
          </div>
        </div>
        <WhyWe whyme={whywe} />
        <FAQ faq={faq} />
      </div>

      <Modal maxWidth="1363" isOpen={open} rounded="40" padding="0" showClose={false} onClose={() => setOpen(false)}>
        <div className="w-full flex flex-col p-[30px] md:p-[75px] lg:p-20 gap-2 sm:gap-[26px] lg:gap-20">
          <div className="flex flex-col gap-2 sm:gap-5 lg:text-center  w-full ">
            <h1 className="leading-[100%] text-[#3831BF] font-bold uppercase tracking-[-0.05em] text-[24px] sm:text-[48px] lg:text-[64px]">
              Скоро запуск новой лаборатории!
            </h1>
            <p className="text-[14px] sm:text-[24px] lg:text-[32px] text-[#1D1D1D] leading-[100%] tracking-[-0.05em]">
              Получите уведомление о запуске и бонус при старте.
            </p>
          </div>
          <form action="" className="max-w-[892px] flex flex-col gap-2 sm:gap-[30px] w-full mx-auto">
            <InputForm label="Введите почту" placeholder="email.com" name={"email"} />
            <Button type="submit">Отправить</Button>
          </form>
        </div>
      </Modal>

      <Modal maxWidth="893" isOpen={isOpenBonus} padding="0" onClose={() => setIsOpenBonus(false)}>
        <ModalBonus />
      </Modal>

      <ModalCookie isClosed={isOpenCookie} close={() => setIsOpenCookie(false)} />

      <BonusBanner openModal={() => setIsOpenBonus(true)} />
    </div>
  );
};

export default HomePage;

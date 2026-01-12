import ac1 from "@/shared/assets/home/Access1.png";
import ac2 from "@/shared/assets/home/Access2.png";
import ac3 from "@/shared/assets/home/Access3.png";

export const SUB_TABS = [
  { id: "works", title: "Учебные работы" },
  { id: "exam", title: "Помощь с контрольной" },
  { id: "tasks", title: "Решение задач" },
  { id: "combo", title: "Комбо тариф" },
];

export const subTabsData = {
  works: {
    benefitCards: [
      {
        title: "1 учебная работа",
        subtitle: "(реферат, эссе, курсовая)",
        img: ac1.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "Проверка уникальности",
        subtitle: "антиплагиат",
        img: ac2.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "Оформление по ГОСТ",
        subtitle: "автоматически",
        img: ac3.src,
        imgClass: "w-[234px] h-[124px] top-6",
        className: "col-span-2 xl:max-w-[547px]",
      },
    ],
    tickets: [
      {
        label: "1 работа",
        price: "169",
        pricePerUnit: "169 руб./ работа",
        multiplier: "x1",
      },
      {
        label: "3 работы",
        price: "450",
        pricePerUnit: "150 руб./ работа",
        savings: "экономия ~11%",
        multiplier: "x3",
      },
      {
        label: "10 работ",
        price: "1200",
        pricePerUnit: "120 руб./ работа",
        savings: "экономия ~29%",
        multiplier: "x10",
      },
    ],
    addons: [
      { id: "bibliography", title: "Список литературы", price: 99 },
      { id: "images", title: "Изображения в тексте", price: 69 },
      { id: "hide", title: "Скрыть реферат", price: 69 },
      { id: "presentation", title: "Презентация", price: 99, description: "Сгенерируем презентацию (10 слайдов) в Power Point" },
    ],
  },
  exam: {
    benefitCards: [
      {
        title: "Помощь на экзамене",
        subtitle: "в реальном времени",
        img: ac1.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "Решение билетов",
        subtitle: "с подробным разбором",
        img: ac2.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "160+ предметов",
        subtitle: "доступно для помощи",
        img: ac3.src,
        imgClass: "w-[234px] h-[124px] top-6",
        className: "col-span-2 xl:max-w-[547px]",
      },
    ],
    tickets: [
      {
        label: "1 экзамен",
        price: "399",
        pricePerUnit: "399 руб./ экзамен",
        multiplier: "x1",
      },
      {
        label: "3 экзамена",
        price: "999",
        pricePerUnit: "333 руб./ экзамен",
        savings: "экономия ~17%",
        multiplier: "x3",
      },
      {
        label: "10 экзаменов",
        price: "2999",
        pricePerUnit: "300 руб./ экзамен",
        savings: "экономия ~25%",
        multiplier: "x10",
      },
    ],
    addons: [
      { id: "exam5", title: "Решить экзамен на 5+", price: 0 },
    ],
  },
  tasks: {
    benefitCards: [
      {
        title: "Решение задач",
        subtitle: "по любым предметам",
        img: ac1.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "Подробный разбор",
        subtitle: "пошаговое решение",
        img: ac2.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "160+ предметов",
        subtitle: "математика, физика и др.",
        img: ac3.src,
        imgClass: "w-[234px] h-[124px] top-6",
        className: "col-span-2 xl:max-w-[547px]",
      },
    ],
    tickets: [
      {
        label: "1 месяц",
        price: "330",
        pricePerUnit: "330 руб./ мес.",
        multiplier: "x1",
      },
      {
        label: "3 месяца",
        price: "820",
        pricePerUnit: "273 руб./ мес.",
        savings: "экономия ~17%",
        multiplier: "x3",
      },
      {
        label: "12 месяцев",
        price: "2890",
        pricePerUnit: "241 руб./ мес.",
        savings: "экономия ~27%",
        multiplier: "x12",
      },
    ],
    addons: [],
  },
  combo: {
    benefitCards: [
      {
        title: "2 учебные работы",
        subtitle: "в месяц",
        img: ac1.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "3 контрольные",
        subtitle: "с разбором",
        img: ac2.src,
        imgClass: "w-[110px] h-[177px]",
        className: "xl:max-w-[439px]",
      },
      {
        title: "Решение задач",
        subtitle: "безлимитно",
        img: ac3.src,
        imgClass: "w-[234px] h-[124px] top-6",
        className: "col-span-2 xl:max-w-[547px]",
      },
    ],
    tickets: [
      {
        label: "1 месяц",
        price: "799",
        pricePerUnit: "799 руб./ мес.",
        multiplier: "x1",
      },
      {
        label: "3 месяца",
        price: "1999",
        pricePerUnit: "666 руб./ мес.",
        savings: "экономия ~17%",
        multiplier: "x3",
      },
      {
        label: "12 месяцев",
        price: "5999",
        pricePerUnit: "500 руб./ мес.",
        savings: "экономия ~37%",
        multiplier: "x12",
      },
    ],
    addons: [],
  },
};

export type SubTabKey = keyof typeof subTabsData;

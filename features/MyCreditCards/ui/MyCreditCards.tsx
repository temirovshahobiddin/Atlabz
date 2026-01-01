"use client";

import CardCredit, { CardCreditProps } from "@/entities/CardCredit/ui/CardCredit";
import Button from "@/shared/ui/Button";
import React, { useEffect, useRef, useState } from "react";

interface MyCardsProps {
  cards: CardCreditProps[];
  onDelete?: () => void;
}

const MyCreditCards = ({ cards, onDelete }: MyCardsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [deletedCardCredit, setDeletedCardCredit] = useState<boolean>(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const maxThumbMove = clientHeight - 31; // высота контейнера минус высота ползунка
    const percent = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbMove : 0;
    setScrollPercent(percent);
  };

  // Для плавной анимации при изменении размера
  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;
    const resizeObserver = new ResizeObserver(() => handleScroll());
    resizeObserver.observe(ref);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-[15px] sm:gap-0 justify-between bg-white p-6 rounded-[20px] w-full h-[364px] sm:h-[572px] lg:h-[438px]">
      <div className="flex flex-col gap-[15px]">
        <h3 className="text-[24px] sm:text-[32px] w-full">Мои карты</h3>
        <div className="relative w-full h-[100px] sm:h-[200px] lg:h-[180px]">
          {/* Скролл контейнер */}
          <div ref={scrollRef} onScroll={handleScroll} className="h-full overflow-y-scroll no-scrollbar pr-4">
            <div className="flex flex-col gap-2">
              {cards.map((item, idx) => (
                <CardCredit
                  key={idx}
                  deleted={deletedCardCredit}
                  icon={item.icon}
                  number={item.number}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>

          {/* Тонкий трек 1px */}
          <div className="absolute top-0 right-0 w-px h-full bg-gray-100 rounded-full" />

          {/* Ползунок 10px */}
          <div
            className="absolute top-0 h-[31px] bg-[#3831BF] rounded-full z-20"
            style={{
              width: "10px",
              right: "-3.8px",
              transform: `translateY(${scrollPercent}px)`,
            }}
          />

          {/* Нижний fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[60px] z-10 bg-linear-to-t from-white to-transparent"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[15px] w-full">
        <Button onClick={() => setDeletedCardCredit(!deletedCardCredit)} className="py-[9px] sm:py-5" variant={3}>
          Отвязать
        </Button>
        <Button className="py-[9px] sm:py-5" variant={3}>
          Привязать
        </Button>
      </div>
    </div>
  );
};

export default MyCreditCards;

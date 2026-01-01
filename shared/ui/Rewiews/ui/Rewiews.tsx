/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Button from "@/shared/ui/Button";
import rewiewImg from "@/shared/assets/home/rewiew.png";

export default function ReviewsSlider() {
  // --- данные (можно динамически) ---
  const items = ["first", "second", "third", "fourth", "fifth", "six"];

  // --- создаём бесконечную ленту (клонируем) ---
  const slides = [items[items.length - 1], ...items, items[0]];

  // --- рефы и состояние для размеров и трансформации ---
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // индекс в массиве slides (с клонами). начинаем на 1 (первый реальный)
  const [index, setIndex] = useState(1);
  const [isTransition, setIsTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // gap между слайдами в px
  const gap = 30;

  // при ресайзе измеряем контейнер
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // --- вычисления ширины слайда и оффсета ---
  // логика: хотим, чтобы центр занимал ~60% ширины, а по краям виднелась часть соседних (~20% слева + ~20% справа)
  const isMobile1280 = containerWidth <= 1280;

  const centerRatio = isMobile1280 ? 1 : 0.6;

  const slideWidth = containerWidth
    ? Math.min(isMobile1280 ? containerWidth : 892, Math.round(containerWidth * centerRatio))
    : 892;
  const step = slideWidth + gap;

  // Чтобы центрированный слайд оказался по центру видимой области,
  // общий translateX = index * step - (containerWidth - slideWidth)/2
  const computeTranslate = (idx: number) => {
    const base = idx * step;
    const centerOffset = containerWidth ? (containerWidth - slideWidth) / 2 : 0;
    return base - centerOffset;
  };

  // --- бесконечная логика: при достижении клона делаем "без-перехода" перескок ---
  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (index === slides.length - 1) {
      // дошли до правого клона (после реального последнего) - через анимацию перескакиваем к первому реальному
      timeoutId = setTimeout(() => {
        setIsTransition(false);
        setIndex(1);
        // включаем transition обратно немного позже (следующий tick)
        setTimeout(() => {
          setIsTransition(true);
          setIsAnimating(false);
        }, 50);
      }, 500); // совпадает с transition-duration
    } else if (index === 0) {
      // дошли до левого клона - перескакиваем к последнему реальному
      timeoutId = setTimeout(() => {
        setIsTransition(false);
        setIndex(slides.length - 2);
        // включаем transition обратно немного позже (следующий tick)
        setTimeout(() => {
          setIsTransition(true);
          setIsAnimating(false);
        }, 50);
      }, 500);
    } else {
      // обычный слайд - снимаем блокировку после анимации
      timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, slides.length]);

  // --- кнопки "вперёд/назад" ---
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(i => i + 1);
  };
  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex(i => i - 1);
  };

  // --- optional: клавиши ← → ---
  useEffect(() => {
    const onKey = (e: { key: string }) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // --- свайп для мобильных ---
  useEffect(() => {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        // минимальный порог свайпа
        if (diff > 0) next();
        else prev();
      }
      isDragging = false;
      startX = 0;
      currentX = 0;
    };

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [containerRef, next, prev]);

  // --- вычисляем translateX в px для inline style ---
  const translateX = computeTranslate(index);

  return (
    <div
      id="reviews"
      className="mt-[60px] xl:mt-[150px] max-md:mt-[80px] max-sm:mt-[64px] flex flex-col gap-[30px] w-full"
    >
      <div className="flex justify-between  items-start">
        <h3 className="text-[var(--blue)] mx-auto sm:mx-0 text-[28px] sm:text-[40px] xl:text-[64px] leading-[100%] font-bold uppercase max-sm:text-[28px] max-sm:text-center">
          Отзывы
        </h3>

        <div className="flex gap-[15px] max-sm:hidden">
          <Button variant={4} onClick={prev}>
            {"<"}
          </Button>
          <Button variant={4} onClick={next}>
            {">"}
          </Button>
        </div>
      </div>

      {/* внешний контейнер */}
      <div ref={containerRef} className="relative w-full overflow-hidden h-[383px] max-md:h-[337px]">
        {/* Леваая маска (туман) */}
        <div
          className="hidden lg:block pointer-events-none absolute left-0 top-0 h-full z-30"
          style={{
            width: Math.max(120, Math.round(containerWidth * 0.18)), // около 18% ширины, минимум 120px
            background: "linear-gradient(90deg, rgba(237,237,237,1), rgba(237,237,237,0) 40%)",
          }}
        />

        {/* Правая маска (туман) */}
        <div
          className="hidden lg:block pointer-events-none absolute right-0 top-0 h-full z-30"
          style={{
            width: Math.max(120, Math.round(containerWidth * 0.18)),
            background: "linear-gradient(270deg, rgba(237,237,237,1), rgba(237,237,237,0) 40%)",
          }}
        />

        {/* лента */}
        <div
          className="flex items-stretch h-full"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${translateX}px)`,
            transition: isTransition ? "transform 0.5s ease" : "none",
            alignItems: "stretch",
          }}
        >
          {slides.map((s, i) => {
            // расстояние от активного (по индексам в slides)
            const dist = Math.abs(i - index);

            // делаем opacity/scale в зависимости от расстояния:
            // активный (dist=0) => opacity 1, scale 1
            // сосед (dist=1) => opacity 0.6, scale 0.96
            // дальше (dist>=2) => opacity 0.28, scale 0.92
            let opacity = 1;
            let scale = 1;
            if (dist === 1) {
              opacity = 0.6;
              scale = 0.97;
            } else if (dist >= 2) {
              opacity = 0.28;
              scale = 0.92;
            }

            // Чтобы боковые карточки выглядели "неактивными" — можно дополнительно сделать grayscale
            const filter = dist === 0 ? "none" : "grayscale(0.25) saturate(0.9)";

            return (
              <div
                key={i + "_slide"}
                className="shrink-0 h-full"
                style={{
                  width: `${slideWidth}px`,
                  opacity,
                  transform: `scale(${scale})`,
                  transition: "transform 0.45s ease, opacity 0.45s ease",
                  filter,
                }}
              >
                {/* ---------- Содержимое карточки: использую твой HTML ---------- */}
                <div className="w-full  bg-white rounded-[20px] p-[16px] sm:p-6 box-border flex flex-col">
                  <div className="bg-[var(--blue)] mx-auto flex gap-[10px] max-w-[210px] sm:max-w-[298px] w-full h-[36px] sm:h-[61px] items-center justify-center rounded-[40px] text-white">
                    <svg
                      className="w-4 h-4 sm:w-[27px] sm:h-[27px]"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.8123 9.56283L13.498 0.908203L0.183594 9.56283L13.498 18.2163L22.498 12.3663V18.0003H24.748V10.905L26.8123 9.56283Z"
                        fill="white"
                      />
                      <path
                        d="M5.62891 19.6876V15.5645L13.5039 20.6832L21.3789 15.5645V19.6876C21.3789 21.3413 20.2382 22.6295 18.8443 23.4428C17.4223 24.2731 15.5312 24.7501 13.5039 24.7501C11.4767 24.7501 9.58666 24.2731 8.16353 23.4428C6.76966 22.6295 5.62891 21.3413 5.62891 19.6876Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-[14px] sm:text-[20px] font-semibold">Лаборатория обучения</p>
                  </div>

                  <div className="flex justify-between items-center border-[#1D1D1D]/20 border sm:h-[140px] mt-[15px] rounded-[20px] p-[10px]">
                    <div className="flex gap-[8px] items-center">
                      <img
                        src={rewiewImg.src}
                        alt=""
                        className="h-[62px] w-[62px] sm:h-[120px] sm:w-[120px] object-cover"
                      />
                      <div>
                        <p className="text-[40px] font-semibold max-md:text-[36px] max-sm:text-[24px]">Анна</p>
                        <p className="text-[32px] font-medium max-md:text-[24px] max-sm:text-[15px]">Студент</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="text-[40px] font-bold max-sm:text-[32px]">5.0</p>
                      <div className="flex gap-[2px]">
                        {[1, 2, 3, 4, 5].map(id => (
                          <svg
                            key={id}
                            width="30"
                            height="29"
                            viewBox="0 0 30 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg "
                            className="max-sm:hidden"
                          >
                            <path
                              d="M12.969 1.38144C13.5677 -0.461178 16.1745 -0.461177 16.7732 1.38144L18.9123 7.96504C19.1801 8.78908 19.948 9.347 20.8145 9.347H27.7369C29.6743 9.347 30.4799 11.8262 28.9124 12.965L23.3121 17.0339C22.6111 17.5432 22.3178 18.4459 22.5855 19.27L24.7247 25.8536C25.3234 27.6962 23.2144 29.2285 21.647 28.0896L16.0467 24.0208C15.3457 23.5115 14.3965 23.5115 13.6955 24.0208L8.09518 28.0896C6.52776 29.2285 4.4188 27.6962 5.0175 25.8536L7.15664 19.27C7.42439 18.4459 7.13107 17.5432 6.4301 17.0339L0.829759 12.965C-0.737668 11.8262 0.0678835 9.347 2.00533 9.347H8.92773C9.79418 9.347 10.5621 8.78908 10.8298 7.96504L12.969 1.38144Z"
                              fill="#FDE049"
                            />
                          </svg>
                        ))}
                        {[1, 2, 3, 4, 5].map(id => (
                          <svg
                            key={id}
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:hidden"
                          >
                            <path
                              d="M6.48254 0.690722C6.78189 -0.230589 8.0853 -0.230588 8.38465 0.690722L9.45422 3.98252C9.58809 4.39454 9.97205 4.6735 10.4053 4.6735H13.8665C14.8352 4.6735 15.238 5.91312 14.4543 6.48252L11.6541 8.51696C11.3036 8.7716 11.1569 9.22297 11.2908 9.63499L12.3604 12.9268C12.6597 13.8481 11.6053 14.6142 10.8215 14.0448L8.02138 12.0104C7.67089 11.7557 7.1963 11.7557 6.84581 12.0104L4.04564 14.0448C3.26192 14.6142 2.20745 13.8481 2.5068 12.9268L3.57637 9.63499C3.71024 9.22297 3.56358 8.7716 3.2131 8.51696L0.412926 6.48252C-0.370787 5.91312 0.0319886 4.6735 1.00071 4.6735H4.46191C4.89514 4.6735 5.27909 4.39454 5.41297 3.98252L6.48254 0.690722Z"
                              fill="#E6C628"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-[15px]">
                    <p className="text-[20px] sm:text-[28px] lg:text-[36px] font-medium leading-[100%] max-md:text-[28px] max-sm:text-[20px]">
                      «Я думала, не успею к экзамену. Но всё сдала и спокойно спала впервые за семестр»
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

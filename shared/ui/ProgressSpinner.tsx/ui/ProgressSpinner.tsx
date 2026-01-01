/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import SpinnerEnd from "@/shared/assets/icons/SpinnerEnd";

interface Props {
  time: number; // секунды
  stages: string[];
  autoStart?: boolean;
  size?: number; // общий размер контейнера (px). по умолчанию 264
  thickness?: number; // толщина линии (strokeWidth). по умолчанию 33
}

export default function ProgressSpinner({ time, stages, autoStart = false, size = 264, thickness = 33 }: Props) {
  // расчёты геометрии
  const center = size / 2;
  const radius = center - thickness / 2;
  const circumference = 2 * Math.PI * radius;

  // состояние
  const [isRunning, setIsRunning] = useState<boolean>(autoStart);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [displayTime, setDisplayTime] = useState<number>(time);
  const [showAlmostDone, setShowAlmostDone] = useState<boolean>(false);

  // motion values
  const progress = useMotionValue(0);
  const dashOffset = useTransform(progress, v => circumference - (v / 100) * circumference);
  const iconX = useMotionValue(center);
  const iconY = useMotionValue(center - radius);

  // длительность одной стадии
  const stageDuration = time / Math.max(stages.length, 1);

  // обновление позиции иконки на основе прогресса
  useEffect(() => {
    const unsubscribe = progress.on("change", latestProgress => {
      const angle = (latestProgress / 100) * Math.PI * 2 - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      iconX.set(x);
      iconY.set(y);

      // обновление стадии
      const currentTime = time * (1 - latestProgress / 100);
      const stageProgress = (time - currentTime) / stageDuration;
      const idx = Math.min(stages.length - 1, Math.floor(stageProgress));
      setStageIndex(idx);

      // обновление отображаемого времени
      const newDisplayTime = Math.ceil(currentTime);
      setDisplayTime(newDisplayTime);

      // показываем надпись "Осталось совсем чуть-чуть" когда время 00:00
      setShowAlmostDone(newDisplayTime === 0);
    });

    return () => unsubscribe();
  }, [time, stages.length, stageDuration, center, radius, progress, iconX, iconY]);

  // управление анимацией
  useEffect(() => {
    if (!isRunning) return;

    // плавная анимация прогресса от 0 до 100 за указанное время
    const animation = animate(progress, 100, {
      duration: time,
      ease: "linear",
      onComplete: () => {
        setIsRunning(false);
      },
    });

    return () => {
      animation.stop();
    };
  }, [isRunning, time, progress]);

  // автозапуск
  useEffect(() => {
    if (autoStart) {
      setIsRunning(true);
    }
  }, [autoStart]);

  const formattedTime = `${String(Math.floor(displayTime / 60)).padStart(2, "0")}:${String(displayTime % 60).padStart(
    2,
    "0",
  )}`;

  // контролы
  const start = () => {
    progress.set(0);
    setShowAlmostDone(false);
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    progress.set(0);
    setStageIndex(0);
    setDisplayTime(time);
    setShowAlmostDone(false);
    iconX.set(center);
    iconY.set(center - radius);
  };

  return (
    <div className="relative flex flex-col xl:flex-row gap-5 xl:gap-28">
      <div className="relative flex flex-col xl:flex-row gap-28">
        {/* Контейнер спиннера */}
        <div className="relative mx-auto" style={{ width: size, height: size }}>
          {/* SVG */}
          <svg
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            height={size}
            className="-rotate-90 block"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Фон */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#E4E4E7"
              fill="none"
              strokeWidth={thickness}
              strokeLinecap="round"
            />

            {/* Активная дуга */}
            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#3831BF"
              fill="none"
              strokeWidth={thickness}
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{
                strokeDashoffset: dashOffset,
              }}
            />
          </svg>

          {/* Наконечник */}
          <motion.div
            className="absolute"
            style={{
              left: iconX,
              top: iconY,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            {/* Разные размеры для адаптива */}
            <div className="hidden xl:block" style={{ width: 66 * (thickness / 45), height: 66 * (thickness / 45) }}>
              <SpinnerEnd />
            </div>
            <div className="block xl:hidden" style={{ width: 66 * (thickness / 25), height: 66 * (thickness / 30) }}>
              <SpinnerEnd />
            </div>
          </motion.div>

          {/* Время по центру */}
          <div
            className="absolute flex xl:hidden flex-col items-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-[#1D1D1D99] text-[12px] leading-[120%] tracking-[-0.05em] font-bold">осталось:</div>
            <div className="text-[#1D1D1D] text-[24px] leading-[120%] tracking-[-0.05em] font-bold">
              {formattedTime}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="hidden flex-col items-center xl:items-start justify-center gap-[3px] lg:flex">
          {!showAlmostDone && (
            <div className="text-[#1D1D1D99] text-[24px] leading-[120%] tracking-[-0.05em] font-bold">осталось:</div>
          )}
          <div className="text-[#1D1D1D] text-[48px] leading-[120%] tracking-[-0.05em] font-bold">
            {showAlmostDone ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-[#1D1D1D]"
              >
                Осталось совсем чуть-чуть
              </motion.div>
            ) : (
              formattedTime
            )}
          </div>
        </div>

        <div className=" relative text-center mx-auto xl:mx-0  xl:text-start h-[100px] xl:h-[145px] w-[200px] xl:w-[650px] overflow-hidden flex flex-col items-center justify-center">
          {stages.map((s, i) => {
            const offset = i - stageIndex;
            const isActive = offset === 0;
            const isNear = Math.abs(offset) === 1;

            return (
              <motion.div
                key={i}
                animate={{
                  y: offset * 40,
                  scale: isActive ? 1 : isNear ? 1 : 0.7,
                  opacity: isActive ? 1 : isNear ? 1 : 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
                className={`absolute left-0 w-full whitespace-nowrap  xl:text-start font-bold leading-[120%] tracking-[-0.05em] ${
                  isActive ? "text-[#3831BF] text-[20px] xl:text-[40px]" : "text-[#1D1D1D99] text-[16px] xl:text-[24px]"
                }`}
              >
                {s}
              </motion.div>
            );
          })}
        </div>

        {!autoStart && (
          <div className="justify-center" style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <button
              onClick={start}
              style={{ background: "#3831BF", color: "#fff", padding: "6px 10px", borderRadius: 6 }}
            >
              Start
            </button>
            <button
              onClick={reset}
              style={{ background: "#1D1D1D", color: "#fff", padding: "6px 10px", borderRadius: 6 }}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

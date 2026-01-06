"use client";

import ChatSend from "@/shared/ui/ChatSend";
import React, { useState } from "react";

// Статичные данные для демонстрации
const userQuestion = `На рёбрах AB и BC треугольной пирамиды ABCD отмечены точки M и N соответственно, причём AM:MB=CN:NB=1:2. Точки P и Q - середины рёбер DA и DC соответственно. Докажите, что точки P, Q, M и N лежат в одной плоскости. Найдите, в каком отношении эта плоскость делит объём пирамиды`;

const aiResponse = {
  title: "1. Доказательство того, что точки P, Q, M, N лежат в одной плоскости",
  content: `Дано:
• P − середина DA ⇒ AP : PD = 1 : 1
• Q − середина DC ⇒ CQ : QD = 1 : 1
• M ∈ AB, AM : MB = 1 : 2
• N ∈ BC, CN : NB = 1 : 2

Доказательство:
1. Рассмотрим гомотетию (центральное подобие):
   • Точки P и Q − середины боковых рёбер DA и DC в треугольнике ADC.
     Отрезок PQ является средней линией треугольника ADC.
   • По свойству средней линии, PQ ∥ AC и PQ = (1/2) * AC.`,
};

const ChatAI = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка сообщения:", message);
    setMessage("");
  };

  const handleAttach = (files: FileList) => {
    console.log("Прикрепленные файлы:", files);
  };

  return (
    <section className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-5 mb-5">
        {/* Вопрос пользователя */}
        <div className="bg-[#3831BF] text-white rounded-[20px] p-5 w-full">
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[140%]">
            {userQuestion}
          </p>
        </div>

        {/* Ответ AtLabs */}
        <div className="flex gap-4 w-full">
          {/* Логотип */}
          <div className="shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#3831BF] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-[14px] sm:text-[16px]">At</span>
            </div>
          </div>

          {/* Контент ответа */}
          <div className="flex-1">
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#3831BF] mb-3">
              AtLabs
            </h3>
            <div className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[160%] text-[#1D1D1D]">
              <p className="font-semibold mb-2">{aiResponse.title}</p>
              <pre className="whitespace-pre-wrap font-sans">{aiResponse.content}</pre>
            </div>

            {/* Иконки действий */}
            <div className="flex gap-3 mt-4">
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke="#1D1D1D" strokeWidth="2"/>
                  <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="#1D1D1D" strokeWidth="2"/>
                </svg>
              </button>
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 6L12 11L17 6" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="cursor-pointer hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 5L17 10" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14L12 19L17 14" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Кнопка "Я не понял" */}
        <div className="flex justify-end w-full">
          <button className="border border-[#1D1D1D33] rounded-[10px] px-5 py-3 text-[14px] sm:text-[16px] text-[#1D1D1D] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
            Я не понял(
          </button>
        </div>
      </div>

      {/* Поле ввода */}
      <div className="w-full">
        <ChatSend
          value={message}
          onChange={e => setMessage(e.target.value)}
          onSubmit={handleSubmit}
          onAttach={handleAttach}
          placeholder="Напиши Atlabs"
        />
      </div>
    </section>
  );
};

export default ChatAI;

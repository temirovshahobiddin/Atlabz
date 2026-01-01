"use client";
import ChatSend from "@/shared/ui/ChatSend/ui/ChatSend";
import React, { useState } from "react";

const SupportPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка сообщения:", message);
    setMessage("");
  };

  const handleAttach = (files: FileList) => {
    console.log("Прикрепленные файлы:", files);
    // Здесь можно обработать файлы - загрузить на сервер, показать превью и т.д.
  };
  return (
    <section>
      <div className="flex flex-col gap-[15px] xl:max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Поддержка</h1>
        <div className="text-[16px] text-center sm:text-[20px] bg-white px-[41px] py-3 w-full xl:max-w-[361px] rounded-[20px] text-[#1D1D1D] font-medium leading-[120%]">
          Ответ в среднем за 5 минут
        </div>
      </div>
      <ChatSend
        value={message}
        onChange={e => setMessage(e.target.value)}
        onSubmit={handleSubmit}
        onAttach={handleAttach}
        placeholder="Напиши Atlabs"
      />
    </section>
  );
};

export default SupportPage;

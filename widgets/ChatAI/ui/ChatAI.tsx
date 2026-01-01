"use client";

import ChatSend from "@/shared/ui/ChatSend";
import React, { useState } from "react";

const ChatAI = () => {
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
      <div className="flex flex-col gap-[15px] max-w-[893px] w-full mb-[30px]">
        <h1 className="title-1">Скоро</h1>
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

export default ChatAI;

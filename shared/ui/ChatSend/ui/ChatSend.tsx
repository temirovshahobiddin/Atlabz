import Camera from "@/shared/assets/icons/Camera";
import FileSend from "@/shared/assets/icons/FileSend";
import ImgSend from "@/shared/assets/icons/ImgSend";

import React, { useRef } from "react";

interface ChatSendProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onAttach?: (files: FileList) => void;
  placeholder?: string;
  className?: string;
}

const ChatSend: React.FC<ChatSendProps> = ({
  value,
  onChange,
  onSubmit,
  onAttach,
  placeholder = "Введите сообщение...",
  className = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && onAttach) {
      onAttach(e.target.files);
      e.target.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white flex-col rounded-[20px] p-[30px] shadow-lg flex items-center gap-4 ${className}`}
    >
      <textarea
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
        className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3831BF] resize-none leading-6 text-base auto-resize-textarea"
      />
      <div className="flex justify-between  w-full">
        <div className="flex items-center gap-10 border border-[#3831BF] p-2 rounded-[10px]">
          <button
            type="button"
            onClick={handleAttachClick}
            className="cursor-pointer shrink-0 hover:opacity-90 transition-opacity"
          >
            <Camera />
          </button>
          <button
            type="button"
            onClick={handleAttachClick}
            className="cursor-pointer shrink-0 hover:opacity-90 transition-opacity"
          >
            {" "}
            <ImgSend />
          </button>

          <button
            type="button"
            onClick={handleAttachClick}
            className="cursor-pointer shrink-0 hover:opacity-90 transition-opacity"
          >
            <FileSend />
          </button>

          {/* Скрытый input для файлов */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            multiple
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
          />
        </div>

        {/* Кнопка отправки */}
        <button type="submit" className="shrink-0 hover:opacity-90 transition-opacity cursor-pointer">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <rect width="44" height="44" rx="10" fill="#3831BF" />
            <path
              d="M32 12L21 23M32 12L25 32L21 23L12 19L32 12Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatSend;

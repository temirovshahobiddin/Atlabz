/* eslint-disable react-hooks/set-state-in-effect */
import React, { ReactNode, useEffect, useState } from "react";
import Closed from "@/shared/assets/icons/Closed";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth: string;
  padding?: string;
  rounded?: string;
  showClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth,
  padding = "50",
  rounded = "61",
  showClose = true,
}) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);

      // небольшая задержка, чтобы сработал transition
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);

      // после окончания анимации скрываем полностью
      const timeout = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  return (
    <div className={`fixed inset-0 z-60 flex items-center justify-center px-4 sm:px-5`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Контейнер модалки */}
      <div
        style={{
          padding: `${padding}px`,
          maxWidth: `${maxWidth}px`,
          borderRadius: `${rounded}px`,
        }}
        className={`relative bg-white shadow-lg w-full z-10 transform transition-all duration-300
          ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          max-h-[80vh] overflow-y-auto
        `}
      >
        {children}

        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-[30px] right-[30px] md:top-[50px] md:right-[50px] cursor-pointer text-gray-500 hover:text-gray-800"
          >
            <Closed />
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;

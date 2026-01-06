/* eslint-disable jsx-a11y/alt-text */
"use client";

/* eslint-disable @next/next/no-img-element */
import Paperclimb from "@/shared/assets/icons/Paperclimb";
import React, { useCallback } from "react";
import Button from "../../Button";
import { useDropzone } from "react-dropzone";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onAttach?: (files: FileList) => void;
  onClick?: (hasFile: boolean) => void;
}

const Textarea: React.FC<TextareaProps> = ({ onAttach, onClick, ...props }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [attachments, setAttachments] = React.useState<{ file: File; preview: string; id: string }[]>([]);
  const [dragPreview, setDragPreview] = React.useState<string | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;
      const file = acceptedFiles[0];
      const newAttachment = {
        file,
        preview: URL.createObjectURL(file),
        id: Math.random().toString(36).slice(2),
      };
      setAttachments([newAttachment]);

      const dt = new DataTransfer();
      dt.items.add(file);
      onAttach?.(dt.files);

      setDragPreview(null);
      setIsDragging(false);
    },
    [onAttach],
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    noKeyboard: true,
    accept: { "image/*": [], "video/*": [], "audio/*": [], "application/pdf": [] },
    onDragEnter: e => {
      const f = e.dataTransfer?.items?.[0];
      if (f && f.type.startsWith("image/")) {
        const file = e.dataTransfer.files?.[0];
        if (file) setDragPreview(URL.createObjectURL(file));
      }
      setIsDragging(true);
    },
    onDragLeave: () => setIsDragging(false),
  });

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="bg-white py-6 px-[25px] rounded-[20px] max-w-[1346px] w-full">
      <form action="">
        <div className="w-full">
          <div
            {...getRootProps()}
            className="relative p-4 sm:p-5 lg:p-[30px] bg-[#E7EBEE] border border-[#0000001A] rounded-[10px] h-[198px] lg:h-[299px] mb-1 sm:mb-2 lg:mb-[15px] overflow-hidden"
          >
            <input {...getInputProps()} />

            {/* Attachments list */}
            {attachments.length > 0 && (
              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-3 pr-12">
                {attachments.map(item => (
                  <div
                    key={item.id}
                    style={{ maxWidth: "calc(100% - 10%)" }}
                    className="relative bg-white border border-[#00000022] rounded-md p-1 w-full h-full flex items-center justify-center overflow-hidden"
                  >
                    {item.file.type.startsWith("image/") ? (
                      <img src={item.preview} alt="" className="object-cover w-full h-full rounded" />
                    ) : (
                      <div className="text-[10px] text-center px-1 break-all">{item.file.name}</div>
                    )}

                    <button
                      type="button"
                      className="absolute cursor-pointer top-0 right-0 bg-black/70 text-white text-[10px] px-1 rounded-bl"
                      onClick={() => removeAttachment(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Drag overlay */}
            {(isDragActive || isDragging) && (
              <div className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center text-white rounded-[10px] pointer-events-none">
                {dragPreview ? (
                  <img
                    src={dragPreview}
                    style={{ maxWidth: "calc(100% - 200px)" }}
                    className="max-h-full object-contain z-10"
                  />
                ) : (
                  <p className="text-lg font-medium">Перетащите файл сюда</p>
                )}
              </div>
            )}

            <textarea
              className="w-full min-h-40 lg:min-h-60 resize-none outline-none transition bg-transparent relative z-0"
              {...props}
            />

            <button
              type="button"
              onClick={open}
              className="absolute cursor-pointer top-2 right-2 sm:top-5 sm:right-5 lg:top-[30px] lg:right-[30px]"
            >
              <Paperclimb />
            </button>
          </div>

          <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-[15px] text-center">
            <Button onClick={() => onClick?.(attachments.length > 0)} type="button">
              Получить решение
            </Button>
            <p className="text-[14px] lg:text-[24px] text-[#1D1D1D99] leading-[120%] tracking-[0%] font-medium">
              <span>5</span> токенов ~ <span>1</span> задача
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Textarea;

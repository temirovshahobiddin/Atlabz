import ChapterArrow from "@/shared/assets/icons/ChapterArrow";
import { useState } from "react";

export interface Subchapter {
  id: number;
  title: string;
}

export interface ChapterType {
  id: number;
  title: string;
  subchapters: Subchapter[];
}

// CHAPTER COMPONENT
const Chapter = ({
  data,
  index,
  moveUp,
  moveDown,
  moveSubUp,
  moveSubDown,
}: {
  data: ChapterType;
  index: number;
  moveUp: (i: number) => void;
  moveDown: (i: number) => void;
  moveSubUp: (chapterIndex: number, subIndex: number) => void;
  moveSubDown: (chapterIndex: number, subIndex: number) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" border border-[#0000001A] rounded-[10px] mb-3  group/chapter">
      <div
        className="flex justify-between bg-[#E7EBEE] py-[17px] px-5 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[20px] font-semibold">{data.title}</span>

        <div className="flex  gap-0.5 opacity-0 group-hover/chapter:opacity-100 transition">
          <button
            onClick={e => {
              e.stopPropagation();
              moveUp(index);
            }}
            className="cursor-pointer"
          >
            <ChapterArrow />
          </button>

          <button
            onClick={e => {
              e.stopPropagation();
              moveDown(index);
            }}
            className="cursor-pointer rotate-180"
          >
            <ChapterArrow />
          </button>

          <button className="p-[7.5px] rounded bg-white shadow cursor-pointer">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.25 3.75L3.75 11.25"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.75 3.75L11.25 11.25"
                stroke="black"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Subchapters */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] mt-3" : "max-h-0"}`}
      >
        <div>
          {data.subchapters.map((item, subIndex) => (
            <div key={item.id} className="py-2 px-4 bg-white rounded mb-1 flex justify-between items-center group/sub">
              <span>{`${subIndex + 1}. ${item.title}`}</span>

              {/* Subchapter controls */}
              <div className="flex gap-0.5 opacity-0 group-hover/sub:opacity-100 transition">
                <button onClick={() => moveSubUp(index, subIndex)} className="cursor-pointer">
                  <ChapterArrow />
                </button>
                <button onClick={() => moveSubDown(index, subIndex)} className="cursor-pointer rotate-180">
                  <ChapterArrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;

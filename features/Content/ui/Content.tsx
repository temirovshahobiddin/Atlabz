"use client";

import Chapter, { ChapterType } from "@/entities/Chapter/ui/Chapter";
import Button from "@/shared/ui/Button";
import { useState } from "react";

// CONTENT COMPONENT
const Content = ({ chapters = [] }: { chapters?: ChapterType[] }) => {
  const [list, setList] = useState(chapters);

  // Move whole chapters
  const moveUp = (i: number) => {
    if (i === 0) return;
    const copy = [...list];
    [copy[i - 1], copy[i]] = [copy[i], copy[i - 1]];
    setList(copy);
  };

  const moveDown = (i: number) => {
    if (i === list.length - 1) return;
    const copy = [...list];
    [copy[i + 1], copy[i]] = [copy[i], copy[i + 1]];
    setList(copy);
  };

  // Move subchapters
  const moveSubUp = (chapterIndex: number, subIndex: number) => {
    if (subIndex === 0) return;
    const copy = [...list];
    const subs = [...copy[chapterIndex].subchapters];
    [subs[subIndex - 1], subs[subIndex]] = [subs[subIndex], subs[subIndex - 1]];
    copy[chapterIndex].subchapters = subs;
    setList(copy);
  };

  const moveSubDown = (chapterIndex: number, subIndex: number) => {
    const copy = [...list];
    const subs = [...copy[chapterIndex].subchapters];
    if (subIndex === subs.length - 1) return;
    [subs[subIndex + 1], subs[subIndex]] = [subs[subIndex], subs[subIndex + 1]];
    copy[chapterIndex].subchapters = subs;
    setList(copy);
  };

  return (
    <div className="bg-white rounded-[20px] p-5 w-full">
      {list.map((ch, index) => (
        <Chapter
          key={ch.id}
          data={ch}
          index={index}
          moveUp={moveUp}
          moveDown={moveDown}
          moveSubUp={moveSubUp}
          moveSubDown={moveSubDown}
        />
      ))}

      <div className="flex gap-[15px] mt-2.5">
        <Button>Добавить главу</Button>
        <Button>Добавить пункт</Button>
      </div>
    </div>
  );
};

export default Content;

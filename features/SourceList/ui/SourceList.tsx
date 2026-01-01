"use client";

import SourceItem from "@/entities/SourceItem";
import Button from "@/shared/ui/Button";
import Link from "next/link";
import { useState } from "react";

type SourceType = {
  id: string;
  title: string;
  author: string;
  journal: string;
  description: string;
};

const SourceList = ({ items = [] }: { items: SourceType[] }) => {
  const [list, setList] = useState(items);

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

  const remove = (i: number) => {
    setList(list.filter((_, idx) => idx !== i));
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div className="bg-white  rounded-[20px] p-5 w-full">
        {list.map((src, idx) => (
          <SourceItem key={src.id} data={src} index={idx} moveUp={moveUp} moveDown={moveDown} remove={remove} />
        ))}
      </div>
      <div className="flex gap-[15px] mt-[5px]">
        <Button variant={4}>Загрузить</Button>
        <Button variant={4}>Найти еще</Button>
      </div>
      <Link href={"/premium/title-page"}>
        <Button>Написать</Button>
      </Link>
    </div>
  );
};

export default SourceList;

"use client";

import SourceItem from "@/entities/SourceItem";
import Button from "@/shared/ui/Button";
import { useRouter } from "next/navigation";
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
  const [newSource, setNewSource] = useState("");
  const [showAddInput, setShowAddInput] = useState(false);
  const router = useRouter();

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

  const addCustomSource = () => {
    if (!newSource.trim()) return;
    const newItem: SourceType = {
      id: Math.random().toString(36).slice(2),
      title: newSource,
      author: "Пользовательский источник",
      journal: "",
      description: "",
    };
    setList([...list, newItem]);
    setNewSource("");
    setShowAddInput(false);
  };

  const handleContinue = () => {
    router.push("/premium/title-page");
  };

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div className="bg-white rounded-[20px] p-5 w-full">
        {list.map((src, idx) => (
          <SourceItem key={src.id} data={src} index={idx} moveUp={moveUp} moveDown={moveDown} remove={remove} />
        ))}
        
        {/* Добавление своего источника */}
        {showAddInput ? (
          <div className="mt-4 flex flex-col gap-2">
            <textarea
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              placeholder="Введите название источника (книга, статья, ссылка и т.д.)"
              className="w-full p-3 border border-[#3831BF] rounded-[10px] resize-none min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#3831BF]"
            />
            <div className="flex gap-2">
              <Button variant={4} onClick={addCustomSource}>Добавить</Button>
              <Button variant={3} onClick={() => { setShowAddInput(false); setNewSource(""); }}>Отмена</Button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex gap-[15px] mt-[5px]">
        <Button variant={4}>Загрузить</Button>
        <Button variant={4}>Найти еще</Button>
        <Button variant={4} onClick={() => setShowAddInput(true)}>Добавить свой</Button>
      </div>
      <Button onClick={handleContinue}>Продолжить</Button>
    </div>
  );
};

export default SourceList;

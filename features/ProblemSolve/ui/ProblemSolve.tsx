"use client";

import CardProblemSolve from "@/entities/CardProblemSolve";
import React from "react";

import task from "@/shared/assets/cabinet/task.png";
import Plus from "@/shared/assets/icons/Plus";

import { useRouter } from "next/navigation";

const ProblemSolve = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-[15px]">
        <CardProblemSolve tasks={task.src} subject={"Математика"} time={"16:30"} />
        <CardProblemSolve tasks={task.src} subject={"Математика"} time={"16:30"} />
        <CardProblemSolve tasks={task.src} subject={"Математика"} time={"16:30"} />

        <div
          onClick={() => router.push("/profile/choose-type-job")}
          className="flex items-center xl:max-w-[439px]  bg-white w-full rounded-[10px] xl:rounded-[20px] max-w-full  overflow-hidden cursor-pointer"
        >
          <div className="flex mx-auto ">
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolve;

import RegPassword from "@/widgets/RegPassword";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Загрузка...</div>}>
      <RegPassword />
    </Suspense>
  );
};

export default page;

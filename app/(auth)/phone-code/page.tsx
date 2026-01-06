import PhoneCode from "@/widgets/PhoneCode/ui/PhoneCode";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Загрузка...</div>}>
      <PhoneCode />
    </Suspense>
  );
};

export default page;

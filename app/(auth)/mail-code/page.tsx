import MailCode from "@/widgets/MailCode";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Загрузка...</div>}>
      <MailCode />
    </Suspense>
  );
};

export default page;

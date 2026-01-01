import RegPage from "@/widgets/RegPage";
import React from "react";

const page = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RegPage />
    </React.Suspense>
  );
};

export default page;

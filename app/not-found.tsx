// app/not-found.tsx

import Link from "next/link";
import nf from '@/shared/assets/404/404.png'
import Button from "@/shared/ui/Button";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  p-6">
      <h1 className="text-[var(--blue)] text-[64px] font-bold uppercase leading-[100%] max-w-[1020px] w-full max-md:text-[40px] max-sm:text-[32px]">Страница не существует или не найдена</h1>
      <img src={nf.src} alt="" />
      <Link
        href="/"
        className="max-w-[892px] w-full mt-[51px]"
      >
        <Button variant={1}>Главная</Button>
      </Link>
    </div>
  );
}

export default NotFound

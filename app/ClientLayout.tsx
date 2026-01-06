"use client";

import PageTransition from "@/shared/ui/PageTransition";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

// Страницы без футера
const noFooterPages = ["/chat-ai"];

const ClientLayout = ({ children, footer }: ClientLayoutProps) => {
  const pathname = usePathname();
  const showFooter = !noFooterPages.includes(pathname);

  return (
    <>
      <PageTransition>{children}</PageTransition>
      {showFooter && footer}
    </>
  );
};

export default ClientLayout;

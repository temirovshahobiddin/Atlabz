"use client";

import PageTransition from "@/shared/ui/PageTransition";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <PageTransition>{children}</PageTransition>;
};

export default ClientLayout;

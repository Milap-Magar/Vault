import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Siderbar from "@/components/Siderbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <Siderbar />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;

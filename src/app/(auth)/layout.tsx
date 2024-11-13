import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={124}
            height={84}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your file in the bestest way possible</h1>
            <p className="body-1">
              Here you can store all you files and other stuffs.
            </p>
          </div>
          <Image
            src="/Illustration1.png"
            alt="Files"
            width={242}
            height={242}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg-py-10">
        <div className="mb-16 ">{children}</div>
      </section>
    </div>
  );
};

export default Layout;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "../../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Siderbar = () => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <Link href={"/"}>
        <Image
          src="/Image/Logo.png"
          alt="brand-logo"
          width={100}
          height={50}
          className="hidden h-auto lg:block"
        />
        <Image
          src="/Image/Logo.png"
          alt="brand-logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className="lg:w-full ">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathName === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathName === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Siderbar;

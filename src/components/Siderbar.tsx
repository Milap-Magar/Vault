"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "../../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Simulate loading state
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing as needed
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    // Loading skeleton
    return (
      <aside className="sidebar flex flex-col items-center justify-center gap-4 p-4">
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded-lg w-40 h-10 mb-4"></div>
          <div className="bg-gray-300 rounded-lg w-10 h-10"></div>
        </div>
        <ul className="flex flex-col gap-4">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 rounded-lg h-10 w-32 animate-pulse"
            ></div>
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside className="sidebar">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/assets/Logo.png"
          alt="logo"
          width={160}
          height={50}
          priority
          className="hidden h-auto lg:block"
        />
        <Image
          src="/assets/image/Logo.png"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <li key={name}>
              <Link href={url} className="lg:w-full">
                <div
                  className={cn(
                    "sidebar-nav-item flex items-center gap-2 p-2 transition-all duration-300",
                    pathname === url && "shad-active"
                  )}
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    priority={false}
                    className={cn(
                      "nav-icon",
                      pathname === url && "nav-icon-active"
                    )}
                  />
                  <p className="hidden lg:block">{name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Image
        src="/assets/image/Illustration1.png"
        alt="Illustration"
        width={506}
        height={418}
        priority={false}
        className="w-full"
      />

      <div className="sidebar-user-info flex items-center gap-2 p-4">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="rounded-full"
          priority={false}
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption text-sm">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

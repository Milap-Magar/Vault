"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-white"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M7 12h10" />
              <path d="M12 7v10" />
            </svg>
          </div>
          <span className="text-xl font-bold">Vault Inc.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-purple-600 hover:text-purple-900"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-purple-600 hover:text-purple-900"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-purple-600 hover:text-purple-900"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-purple-600 hover:text-purple-900"
          >
            FAQ
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/sign-in">
              <Button variant="outline" className="h-9">
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="h-9 bg-purple-900 hover:bg-purple-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-purple-500 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="#features"
              className="text-sm font-medium text-purple-600 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-purple-600 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-purple-600 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-purple-600 hover:text-purple-900"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-purple-900 hover:bg-purple-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

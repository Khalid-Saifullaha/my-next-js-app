"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-100 shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">NextJs</Link>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            pathname === "/products"
              ? "text-blue-500 font-semibold underline"
              : "text-black"
          }`}
        >
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-blue-500 font-semibold underline"
                : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-blue-500 font-semibold underline"
                : "text-black"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/products"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            Products
          </Link>
          <Link
            href="/login"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

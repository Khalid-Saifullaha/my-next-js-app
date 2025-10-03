"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-md shadow-md hover:bg-gray-200 transition md:hidden"
        onClick={toggleSidebar}
      >
        {/* Simple unicode icons */}
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">MyWebsite</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-gray-800">MyWebsite</div>

        {/* Menu Links */}
        <div className="flex space-x-6">
          <a
            href="/about"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            Contact
          </a>
          <a
            href="/login"
            className="text-gray-800 px-3 py-1 rounded hover:bg-purple-100 hover:text-purple-700 transition-colors font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

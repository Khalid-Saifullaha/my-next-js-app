import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p>&copy; {new Date().getFullYear()} NextJs. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="hover:text-purple-600 transition-colors">
            About
          </a>
          <a
            href="/contact"
            className="hover:text-purple-600 transition-colors"
          >
            Contact
          </a>
          <a href="/login" className="hover:text-purple-600 transition-colors">
            Login
          </a>
        </div>
      </div>
    </footer>
  );
}

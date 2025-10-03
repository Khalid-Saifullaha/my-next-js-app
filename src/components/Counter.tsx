"use client";

import React, { useState } from "react";

type CounterProps = {
  onRegister?: (count: number) => void;
};

export default function Counter({ onRegister }: CounterProps) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(0, prev - 1));

  const handleRegister = () => {
    if (onRegister) onRegister(count);
    alert(`Registered with count: ${count}`);
    setCount(0); // reset count after register
  };

  return (
    <div className="max-w-sm mx-auto p-6 mt-20 border rounded-xl shadow-lg bg-white text-center">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Counter</h2>

      <div className="flex items-center justify-center gap-6 mb-6">
        <button
          onClick={decrement}
          className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition"
        >
          -
        </button>

        <span className="text-3xl font-extrabold text-gray-900">{count}</span>

        <button
          onClick={increment}
          className="w-12 h-12 flex items-center justify-center text-xl font-bold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>

      <button
        onClick={handleRegister}
        className="w-full py-3 rounded-xl font-semibold shadow-lg transition bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
      >
        Register
      </button>
    </div>
  );
}

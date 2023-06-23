"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center justify-center w-full h-screen">
        <button
          onClick={increment}
          className="rounded-full h-16 w-16 inline-block bg-red-500 text-white text-lg mx-2 hover:bg-red-600 transition-colors duration-200"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="rounded-full h-16 w-16 inline-block bg-blue-500 text-white text-lg mx-2 hover:bg-blue-600 transition-colors duration-200"
        >
          -1
        </button>
      </div>
      <span className="text-black text-center opacity-5 absolute z-0 align-text-bottom  block tracking-[-0.1em] leading-[0] top-[50vh] mr-[0.1em] text-[110vw] pointer-events-none">
        {count}
      </span>
    </main>
  );
}

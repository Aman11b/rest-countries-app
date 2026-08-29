"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <header className="bg-(--element) shadow-sm transition-colors duration-300">
      <div className="mx-auto flex max-w-full justify-between items-center  px-6 md:px-10 py-5">
        <Link
          href="/"
          className="text-base sm:text-lg font-extrabold whitespace-nowrap"
        >
          <h1>Where in the world?</h1>
        </Link>
        <button
          type="button"
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer"
          onClick={toggleDarkMode}
        >
          {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
}

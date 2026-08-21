"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <header className="bg-(--element) shadow-sm transition-colors duration-300">
      <div className="mx-auto flex max-w-full justify-between items-center px-6 py-4">
        <h1 className="text-lg font-extrabold">Where in the world?</h1>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 "
          onClick={toggleDarkMode}
        >
          {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
}

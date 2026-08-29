"use client";

import { Search } from "lucide-react";
import { SearchProps } from "../lib/types";
export default function Searchbar({ search, setSearch }: SearchProps) {
  return (
    <div className="flex md:w-[70%] w-full items-center gap-4 rounded-md px-6 py-3 shadow-sm bg-(--element)">
      <Search size={20} />
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a Country"
        className="w-full px-2 py-1 text-(--foreground) bg-transparent outline-none placeholder:text-(--input)"
      />
    </div>
  );
}

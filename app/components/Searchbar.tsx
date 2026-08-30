"use client";

import { Search } from "lucide-react";
import { SearchProps } from "../lib/types";
export default function Searchbar({ search, setSearch }: SearchProps) {
  return (
    <div
      className="flex md:w-[70%] w-full items-center gap-4 rounded-md px-6 py-3 shadow-sm bg-(--element) has-focus-visible:outline-2
        has-focus-visible:outline-offset-2
        has-focus-visible:outline-(--foreground) "
    >
      <Search size={20} />
      <input
        type="text"
        aria-label="Search for a country"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a Country"
        className="w-full rounded-sm bg-transparent px-2 py-1 text-(--foreground) placeholder:text-(--input) outline-none"
      />
    </div>
  );
}

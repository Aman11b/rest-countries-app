import { Search } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex items-center gap-4 rounded-md bg-(--element) px-6 py-3 shadow-sm sm:w-120">
      <Search size={20} />
      <input
        type="text"
        placeholder="Search for a Country"
        className="w-full px-2 py-1"
      />
    </div>
  );
}

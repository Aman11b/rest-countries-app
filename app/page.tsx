import Filter from "./components/Filter";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <main className="px-6 py-8">
      {/* Search and filter */}
      <section className="flex flex-col justify-between sm:flex-row sm:items-center sm:justify-between">
        <Searchbar />
        <Filter />
      </section>
    </main>
  );
}

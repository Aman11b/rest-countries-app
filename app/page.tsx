import CountryList from "./components/CountryList";
import countires from "./data/data.json";

export default function Home() {
  return (
    <main className="p-10">
      <CountryList countries={countires} />
    </main>
  );
}

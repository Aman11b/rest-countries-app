import CountryList from "./components/CountryList";
import countiresData from "./data/data.json";

export default function Home() {
  const countries = countiresData.map(
    ({ name, alpha3Code, region, population, capital, flags }) => ({
      name,
      alpha3Code,
      region,
      population,
      capital,
      flags: {
        png: flags.png,
      },
    }),
  );
  return (
    <main className="p-10">
      <CountryList countries={countries} />
    </main>
  );
}

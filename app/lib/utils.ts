import { Country } from "./types";

export function formatPopulation(population: number) {
  return population.toLocaleString("en-US");
}

export function filterCountries(
  countries: Country[],
  search: string,
  region: string,
) {
  const query = search.trim().toLowerCase();

  if (!query) {
    return countries;
  }
  return countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().startsWith(query);

    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });
}

export function getRegion(countries: Country[]) {
  return [...new Set(countries.map((country) => country.region))];
}

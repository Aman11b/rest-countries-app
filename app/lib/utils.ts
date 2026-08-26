import { Country } from "./types";

export function formatPopulation(population: number) {
  return population.toLocaleString("en-US");
}

export function filterCountries(countries: Country[], search: string) {
  const query = search.trim().toLowerCase();
  if (!query) {
    return countries;
  }
  return countries.filter((country) =>
    country.name.toLowerCase().startsWith(query),
  );
}

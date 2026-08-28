import { Country } from "./types";
import Countries from "../data/data.json";

export function formatPopulation(population: number) {
  return population.toLocaleString("en-US");
}

export function filterCountries(
  countries: Country[],
  search: string,
  region: string,
) {
  const query = search.trim().toLowerCase();

  return countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().startsWith(query);

    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });
}

export function getRegion(countries: Country[]) {
  return [...new Set(countries.map((country) => country.region))];
}

export function getCountry(code: string): Country | undefined {
  return Countries.find((country) => country.alpha3Code === code.toUpperCase());
}

export function getBorderCountries(borders: string[] | undefined): Country[] {
  if (!borders) {
    return [];
  }
  return Countries.filter((country) => borders.includes(country.alpha3Code));
}

"use client";

import { useState } from "react";
import { CountryListProps } from "../lib/types";
import Searchbar from "./Searchbar";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import { filterCountries } from "../lib/utils";

export default function CountryList({ countries }: CountryListProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = filterCountries(countries, search, region);

  return (
    <>
      <section className="flex flex-col gap-8 md:flex-row justify-between ">
        <Searchbar search={search} setSearch={setSearch} />
        <Filter countries={countries} region={region} setRegion={setRegion} />
      </section>

      {filteredCountries.length > 0 ? (
        <section className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
          {filteredCountries.map((country) => (
            <CountryCard key={country.numericCode} country={country} />
          ))}
        </section>
      ) : (
        <p className="mt-16 text-center text-lg font-semibold">
          No countries found.
        </p>
      )}
    </>
  );
}

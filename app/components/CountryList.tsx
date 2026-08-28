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
      <section className="flex justify-between">
        <Searchbar search={search} setSearch={setSearch} />
        <Filter countries={countries} region={region} setRegion={setRegion} />
      </section>

      <section className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {filteredCountries.map((country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </section>
    </>
  );
}

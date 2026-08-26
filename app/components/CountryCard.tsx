import Image from "next/image";
import { Country } from "../lib/types";
import { formatPopulation } from "../lib/utils";

type CountryCardProp = {
  country: Country;
};
export default function CountryCard({ country }: CountryCardProp) {
  return (
    <article className="overflow-hidden rounded-md bg-(--element) shadow-sm">
      <Image
        src={country.flags.svg}
        alt={`Flag of ${country.name}`}
        className="w-full object-cover h-48"
        width={640}
        height={360}
      />

      <div className="p-6 font-semibold">
        <h2 className="font-bold pb-2">{country.name}</h2>
        <h3>
          Population:{" "}
          <span className="font-medium">
            {formatPopulation(country.population)}
          </span>
        </h3>
        <h3>
          Region: <span className="font-medium">{country.region}</span>
        </h3>
        <h3>
          Capital: <span className="font-medium">{country.capital}</span>
        </h3>
      </div>
    </article>
  );
}

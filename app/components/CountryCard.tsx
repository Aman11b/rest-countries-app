import Image from "next/image";
import { Country } from "../lib/types";
import { formatPopulation } from "../lib/utils";
import Link from "next/link";

type CountryCardProp = {
  country: Country;
  priority?: boolean;
};
export default function CountryCard({
  country,
  priority = false,
}: CountryCardProp) {
  return (
    <Link
      href={`/country/${country.alpha3Code}`}
      className="block rounded-md transition-transform duration-200 hover:-translate-y-1 focus-visible::ring-2 focus-visible:ring-(--foreground)"
    >
      <article className="h-full overflow-hidden rounded-md bg-(--element) shadow-sm transition-shadow duration-200 hover:shadow-lg">
        <Image
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
          className="w-full object-cover h-48 sm:h-44 "
          width={640}
          height={360}
          loading={priority ? "eager" : "lazy"}
        />

        <div className="p-6 font-semibold md:p-5 sm:p-4 ">
          <h2 className="font-bold pb-2 text-base sm:text-lg">
            {country.name}
          </h2>
          <div className="space-y-1 text-sm sm:text-sm mg:text-base">
            <p>
              <span className="font-semibold">Population:</span>{" "}
              <span className="font-medium">
                {formatPopulation(country.population)}
              </span>
            </p>
            <p>
              <span className="font-semibold">Region:</span>{" "}
              <span className="font-medium">{country.region}</span>
            </p>
            <p>
              <span className="font-semibold">Capital:</span>{" "}
              <span className="font-medium">{country.capital || "N/A"}</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

import BackButton from "@/app/components/BackButton";
import { CountryPageProps } from "@/app/lib/types";
import {
  formatPopulation,
  getBorderCountries,
  getCountry,
} from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;

  const country = getCountry(code);

  const borderCountries = getBorderCountries(country?.borders);

  if (!country) {
    notFound();
  }
  return (
    <main className="px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
      <BackButton />
      <div className="mt-12 flex flex-col gap-10 sm:gap-12 md:mt-16 md:flex-row md:items-center  lg:gap-20 md:gap-16 ">
        <div className="w-full md:w-1/2">
          <Image
            src={country?.flags.png}
            height={860}
            width={1280}
            alt={`${country?.name} flag`}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            {country.name}
          </h1>
          <div className="mt-6 sm:mt-8 grid gap-8 sm:grid-cols-2">
            <div className="space-y-3 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Native Name: </span>{" "}
                {country.nativeName}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {formatPopulation(country.population)}
              </p>
              <p>
                <span className="font-semibold"> Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold"> Capital:</span>{" "}
                {country.capital || "N/A"}
              </p>
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Top Level Domain: </span>{" "}
                {country.topLevelDomain?.join(", ")}
              </p>
              <p>
                <span className="font-semibold"> Currencies:</span>{" "}
                {country.currencies
                  ?.map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p>
                <span className="font-semibold">Language: </span>{" "}
                {country.languages?.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:items-start sm:gap-4">
            <span className="font-semibold shrink-0"> Border Countries: </span>
            {borderCountries.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((borderCountry) => (
                  <Link
                    key={borderCountry.alpha3Code}
                    href={`/country/${borderCountry.alpha3Code}`}
                    className="rounded-md bg-(--element) px-4 py-2 text-sm shadow-sm transition-shadow hover:shadow-md"
                  >
                    {borderCountry.name}
                  </Link>
                ))}
              </div>
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

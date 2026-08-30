import { FilterProp } from "../lib/types";
import { getRegion } from "../lib/utils";

export default function Filter({ countries, region, setRegion }: FilterProp) {
  const regions = getRegion(countries);

  return (
    <div
      className="w-full md:w-[30%] rounded-md bg-(--element) py-4 px-5 shadow-sm has-focus-visible:outline-2
        has-focus-visible:outline-offset-2
        has-focus-visible:outline-(--foreground) "
    >
      <select
        aria-label="Filter countries by region"
        className="w-full cursor-pointer rounded-sm bg-transparent text-(--foreground) outline-none "
        value={region}
        onChange={(event) => setRegion(event.target.value)}
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="">All Region</option>

        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

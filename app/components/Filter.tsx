export default function Filter() {
  return (
    <div className="w-52 rounded-md bg-(--element) py-4 px-5 shadow-sm outline-none">
      <select
        defaultValue=""
        aria-label="Filter countries by region"
        className="w-full outline-none"
      >
        <option value="" hidden>
          Filter by Region
        </option>

        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

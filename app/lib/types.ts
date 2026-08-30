export type Country = {
  name: string;
  topLevelDomain?: string[];
  alpha3Code: string;
  region: string;
  population: number;
  numericCode?: string;
  nativeName?: string;
  subregion?: string;
  borders?: string[];
  flags: {
    png: string;
  };
  currencies?: {
    name: string;
  }[];
  languages?: {
    name: string;
  }[];
  capital?: string;
};

export type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

export type CountryCardData = {
  name: string;
  alpha3Code: string;
  region: string;
  population: number;
  capital?: string;
  flags: {
    png: string;
  };
};

export type CountryListProps = {
  countries: CountryCardData[];
};

export type FilterProp = {
  countries: CountryCardData[];
  region: string;
  setRegion: (region: string) => void;
};

export type CountryPageProps = {
  params: Promise<{
    code: string;
  }>;
};

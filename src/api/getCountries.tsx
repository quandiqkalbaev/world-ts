import axios from "axios";

export type Countries = {
  name: {
    common: string;
    official: string;
    nativeName: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  borders: string[];
  flags: {
    png: string;
    alt: string;
  };
  cca3: string;
  tld: string;
  currencies: Record<
    string,
    {
      symbol: string;
      name: string;
    }
  >;
  languages: Record<string, string>; 
};

const getCountries = async () => {
  const response = await axios.get<Countries[]>("https://restcountries.com/v3.1/all");
  return response.data;
};
export default getCountries;

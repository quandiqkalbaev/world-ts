import axios from "axios";

export type Countries = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
    alt: string;
  };
};

const getCountries = async () => {
  const response = await axios.get<Countries[]>("https://restcountries.com/v3.1/all");
  return response.data;
};
export default getCountries;

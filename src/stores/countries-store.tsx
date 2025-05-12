import type { Countries } from "../api/getCountries";
import { makeAutoObservable, runInAction } from "mobx";
import getCountries from "../api/getCountries";

class CountiresStore {
  countries: Countries[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  async fetchCountries() {
    const data = await getCountries();
    runInAction(() => {
      this.countries = data;
    });
  }
}
export default new CountiresStore();

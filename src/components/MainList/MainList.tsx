import { useContext } from "react";
import { RootStoreContext } from "../../contexts/root-store-context";
import { observer } from "mobx-react-lite";
import "./style.scss";
import { Link } from "react-router-dom";

interface MainListProps {
  searchValue: string;
  filterValue: string;
}
function MainList({ searchValue, filterValue }: MainListProps) {
  const store = useContext(RootStoreContext);
  const data = store?.country.countries;
  const sorted = data?.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
  const filtered = sorted?.filter((c) => {
    const matchesSearch = c.name.common.toLowerCase().includes(searchValue.toLowerCase());
    const matchesFilter = filterValue ? c.region === filterValue : true;
    return matchesSearch && matchesFilter;
  });
  function formatNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <ul className="main__list">
      {filtered?.map((country, i) => (
        <Link to={`/country/${country.cca3}`} key={i} className="main__card">
          <div className="main__card-img">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="main__card-info">
            <div className="main__card-country">{country.name.common}</div>
            <div className="main__card-population">Population : {formatNumber(country.population)}</div>
            <div className="main__card-region">Region : {country.region}</div>
            <div className="main__card-capital">Capital : {country.capital}</div>
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default observer(MainList);

import { useContext } from "react";
import { RootStoreContext } from "../../contexts/root-store-context";
import { observer } from "mobx-react-lite";
import "./style.scss";
import { Link } from "react-router";

interface MainListProps {
  searchValue: string;
}
function MainList({ searchValue }: MainListProps) {
  const store = useContext(RootStoreContext);
  const data = store?.country.countries;
  const sorted = data?.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
  const filtered = sorted?.filter((c) => c.name.common.toLocaleLowerCase().includes(searchValue.toLowerCase()));
  return (
    <ul className="main__list">
      {filtered?.map((country, i) => (
        <Link to={`/${country.name.common}`} key={i} className="main__card">
          <div className="main__card-img">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="main__card-info">
            <div className="main__card-country">{country.name.common}</div>

            <div className="main__card-population">Population : {country.population}</div>
            <div className="main__card-region">Region : {country.region}</div>
            <div className="main__card-capital">Capital : {country.capital}</div>
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default observer(MainList);

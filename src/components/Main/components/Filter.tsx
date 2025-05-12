import { useContext } from "react";
import { RootStoreContext } from "../../../contexts/root-store-context";
import { observer } from "mobx-react-lite";

function Filter() {
  const store = useContext(RootStoreContext);
  const data = store?.country.countries;
  const continents = Array.from(new Set(data?.map((c) => c.region).filter(Boolean)));

  return (
    <div className="main__select">
      <select className="main__select-select" onChange={() => console.log("")}>
        <option className="main__select-option" value="">
          Filter
        </option>
        {continents.map((continent, index) => (
          <option key={index} value={continent.toLowerCase()}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default observer(Filter);

import { useContext } from "react";
import { RootStoreContext } from "../../../contexts/root-store-context";
import { observer } from "mobx-react-lite";
interface FilterProps {
  value: string;
  setValue: (val: string) => void;
}
function Filter({ value, setValue }: FilterProps) {
  const store = useContext(RootStoreContext);
  const data = store?.country.countries;
  const continents = Array.from(new Set(data?.map((c) => c.region).filter(Boolean)));

  return (
    <div className="main__select">
      <select className="main__select-select" onChange={(e) => setValue(e.target.value)} value={value}>
        <option className="main__select-option" value="">
          Filter
        </option>
        {continents.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default observer(Filter);

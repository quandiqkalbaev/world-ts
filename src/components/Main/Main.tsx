import { useState } from "react";
import MainList from "../MainList/MainList";
import Filter from "./components/Filter";
import Search from "./components/Search";
import "./style.scss";

function Main() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="main">
      <div className="main__conteinar _container">
        <div className="main__top">
          <Search value={searchValue} setValue={setSearchValue} />
          <Filter />
        </div>
        <MainList searchValue={searchValue} />
      </div>
    </div>
  );
}

export default Main;

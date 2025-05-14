import { useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { RootStoreContext } from "./contexts/root-store-context";
import RootStore from "./stores/root-store";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage/CountryPage";
const store = new RootStore();
function App() {
  useEffect(() => {
    store.country.fetchCountries();
  }, []);

  return (
    <RootStoreContext.Provider value={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/country/:cca3" element={<CountryPage />} />
      </Routes>
    </RootStoreContext.Provider>
  );
}

export default App;

import { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { RootStoreContext } from "../../contexts/root-store-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.scss";
import { observer } from "mobx-react-lite";
function CountryPage() {
  const { cca3 } = useParams();
  const store = useContext(RootStoreContext);
  const data = store?.country.countries;
  const country = useMemo(() => {
    return data?.find((el) => el.cca3 === cca3);
  }, [cca3, data]);

  if (!country) {
    return <div className="_container _loading">Loading...</div>;
  }
  function getLastNativeName(nativeName: Record<string, { official: string; common: string }>) {
    const entries = Object.entries(nativeName);
    return entries.length ? entries[entries.length - 1][1].common : "";
  }
  function formatNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const currencyName = Object.values(country.currencies ?? "").map((currency) => currency.name) ?? "";
  const languages = Object.values(country.languages ?? "")
    .map((language) => language)
    .join(", ");

  // const formatedBorderCountries =
  //   country?.borders.reduce<string[]>((acc, cca3) => {
  //     const found = data?.find((el) => el.cca3 === cca3);
  //     if (found) {
  //       acc.push(found.name.common);
  //     }
  //     return acc;
  //   }, []) ?? [];

  return (
    <div className="country">
      <div className="country__container _container">
        <Link to="/" className="country__back">
          <ArrowBackIcon />
          Back
        </Link>
        <div className="country__wrapper">
          <div className="country__img">
            <img src={country?.flags.png} alt={country?.flags.alt} />
          </div>
          <div className="country__info">
            <h2 className="country__name">{country?.name.common}</h2>
            <div className="country__info-block">
              <div className="country__info-left">
                <p className="country__info-name">
                  <span>Native Name: </span>
                  {getLastNativeName(country?.name.nativeName || {})}
                </p>

                <p className="country__info-population">
                  <span>Population: </span>
                  {formatNumber(Number(country?.population))}
                </p>
                <p className="country__info-region">
                  <span>Region: </span>
                  {country.region}
                </p>
                <p className="country__info-subregion">
                  <span>Subregion: </span>
                  {country.subregion}
                </p>
                <p className="country__info-capital">
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="country__info-right">
                <p className="country__info-tld">
                  <span>Top Level Domain: </span>
                  {country.tld}
                </p>
                <p className="country__info-currency">
                  <span>Currency: </span>
                  {currencyName}
                </p>
                <p className="country__info-languages">
                  <span>Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
            {country.borders && (
              <div className="country__info-borders">
                <span>Bordered Countries: </span>

                <ul>
                  {country?.borders.map((c, index) => (
                    <li key={index}>
                      <Link to={`/country/${c}`}>{c}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(CountryPage);

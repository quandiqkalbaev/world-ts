import { useEffect, useState } from "react";
import "./style.scss";
function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const HandleClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <p className="theme" onClick={HandleClick}>
          {theme} Mode
        </p>
      </div>
    </header>
  );
}

export default Header;

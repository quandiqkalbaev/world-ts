import { useParams } from "react-router-dom";

function CountryPage() {
  const { name } = useParams();

  return (
    <div>
      <h1>Страна: {name}</h1>
    </div>
  );
}

export default CountryPage;

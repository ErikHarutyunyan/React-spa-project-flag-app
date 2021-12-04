import { useEffect, useState } from "react";

// Router
import { useParams, useNavigate } from "react-router-dom";

// For API
import axios from "axios";

// API config
import { searchByCountry } from "../api/config";

// React Icons
import { IoArrowBack } from "react-icons/io5";

// Components
import { Button } from "../components/Button";
import { Info } from "../components/InfoCountries";

export const InfoCountriesPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  // console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  // console.log(name);
  return (
    <div>
      <Button onClick={() => navigate(-1, { replace: true })}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navCountry={navigate} {...country} />}
    </div>
  );
};

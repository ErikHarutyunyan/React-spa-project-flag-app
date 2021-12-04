import { useState } from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";
import { InfoCountriesPage } from "../pages/InfoCountriesPage";

export const Routing = () => {
  const [countries, setCountries] = useState([]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<HomePage countries={countries} setCountries={setCountries} />}
      ></Route>
      <Route path="/country/:name" element={<InfoCountriesPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

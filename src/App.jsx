
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// For API
import axios from "axios";

// Components
import { Header } from "./components/Header";
import { Main } from "./components/Main";

// Pages
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { InfoCountriesPage } from "./pages/InfoCountriesPage";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}></Route>
          <Route path="/country/:name" element={<InfoCountriesPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// For API
import axios from "axios";

// Components
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";

// API config
import { ALL_COUNTRIES } from "../config";

export const HomePage = ({ setCountries, countries }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.lenght)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Controls />
      <List>
        {countries.map((c, id) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={(e) => navigate(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

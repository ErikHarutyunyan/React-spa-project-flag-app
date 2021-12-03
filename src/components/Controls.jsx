import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      {/* isClearable - ավելացնւմա x - որ մեր ընտրածը չեղարկենք */}
      {/* isSearchable={false} - անջատումա input-ի մեջ գրելու հնարավորությունը*/}
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

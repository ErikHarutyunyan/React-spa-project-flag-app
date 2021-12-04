// Styled Components
import styled from "styled-components";

// React Select
import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--color-text)",
      borderRadius: "var(--radii)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.isSelected
        ? "var(--color-bg)"
        : "var(--color-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--color-text) !important;
  }
  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;

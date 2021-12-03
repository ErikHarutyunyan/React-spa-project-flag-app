import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import { Link } from "react-router-dom";


const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  /* font-weight: var(--fw-bold); */
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderElement>
      <Container className="container">
        <Wrapper className="wrapper">
          <Title className="title">Where is the World?</Title>
          <ModeSwitcher onClick={toggleTheme} className="modeSwitcher">
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

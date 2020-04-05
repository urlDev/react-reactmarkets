import React from "react";

import { NavContainer, StyledLink } from "./Nav.styles";

const Nav = () => {
  return (
    <NavContainer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <StyledLink exact to="/">
        <i className="fas fa-home"></i>
      </StyledLink>

      <StyledLink to="/search">
        <i className="fas fa-search"></i>
      </StyledLink>

      <StyledLink to="/portfolio">
        <i className="fas fa-briefcase"></i>
      </StyledLink>

      <StyledLink to="/profile">
        <i className="fas fa-user"></i>
      </StyledLink>
    </NavContainer>
  );
};

export default Nav;

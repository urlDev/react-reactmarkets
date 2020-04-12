import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { NavContainer, StyledLink } from "./Nav.styles";

const Nav = () => {
  const { clearState } = useContext(FinanceContext);
  return (
    <NavContainer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledLink exact to="/" onClick={clearState}>
        <i className="fas fa-home"></i>
      </StyledLink>

      <StyledLink to="/search" onClick={clearState}>
        <i className="fas fa-search"></i>
      </StyledLink>

      <StyledLink to="/portfolio" onClick={clearState}>
        <i className="fas fa-briefcase"></i>
      </StyledLink>

      <StyledLink to="/profile" onClick={clearState}>
        <i className="fas fa-user"></i>
      </StyledLink>
    </NavContainer>
  );
};

export default Nav;

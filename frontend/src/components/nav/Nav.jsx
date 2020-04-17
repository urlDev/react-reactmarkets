import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { NavContainer, StyledLink } from "./Nav.styles";

const Nav = () => {
  const { clearState } = useContext(FinanceContext);
  return (
    <NavContainer>
      <StyledLink
        className="home responsiveMenuTabs"
        exact
        to="/"
        onClick={clearState}
      >
        <i className="fas fa-home fa-fw"></i>
      </StyledLink>

      <StyledLink
        className="search responsiveMenuTabs"
        to="/search"
        onClick={clearState}
      >
        <i className="fas fa-search fa-fw"></i>
      </StyledLink>

      <StyledLink
        className="portfolio responsiveMenuTabs"
        to="/portfolio"
        onClick={clearState}
      >
        <i className="fas fa-briefcase fa-fw"></i>
      </StyledLink>

      <StyledLink
        className="profile responsiveMenuTabs"
        to="/profile"
        onClick={clearState}
      >
        <i className="fas fa-user fa-fw"></i>
      </StyledLink>
    </NavContainer>
  );
};

export default Nav;

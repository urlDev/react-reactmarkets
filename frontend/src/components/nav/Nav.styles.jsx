import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  background: linear-gradient(
    135deg,
    rgba(156, 252, 247, 1) 0%,
    rgba(110, 123, 251, 1) 42%
  );
  border-radius: 10px 10px 0 0;
  padding: 0 20px 0 20px;
  position: fixed;
  height: 7vh;
  width: 100%;
  bottom: -1px;
  z-index: 10;
  h1 {
    margin: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark-blue);
  font-size: 1.5rem;
  text-decoration: none;
  &.active {
    color: var(--white);
  }
`;

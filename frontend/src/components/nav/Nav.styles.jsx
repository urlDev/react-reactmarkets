import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  background: linear-gradient(
    135deg,
    rgba(156, 252, 247, 1) 0%,
    rgba(110, 123, 251, 1) 42%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media (min-width: 768px) {
    position: relative;
    flex-direction: column;
    background: none;
    width: 15%;
    // padding: 0;
    height: 250px;
  }
  @media (min-width: 1024.1px) {
    width: 20%;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark-blue);
  font-size: 1.5rem;
  text-decoration: none;
  &.active {
    color: var(--white);
  }
  @media (min-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size:1rem;
    text-align:center;
    &.active {
      background: var(--purple);

      border-radius: 10px;
    }
  }
  @media (min-width: 1024.1px) {
    text-align: left;
    &.home {
      &:after {
        content: "Home";
        margin-left: 10px;
      }
    }
    &.search {
      &:after {
        content: "Search";
        margin-left: 10px;
      }
    }
    &.portfolio {
      &:after {
        content: "Portfolio";
        margin-left: 10px;
      }
    }
    &.profile {
      &:after {
        content: "Profile";
        margin-left: 10px;
      }
    }
  }
`;

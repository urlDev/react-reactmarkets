import styled from "styled-components";

import { Link } from "react-router-dom";

export const Input = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid var(--dark-blue);
  width: calc(100% - 27px);
  color: var(--dark-blue);
  &::placeholder,
  &:focus {
    font-family: var(--Raleway);
    color: var(--dark-blue);
    opacity: 0.5;
    font-size: var(--Text);
    padding: 2px 0 2px 0;
    outline: none;
    background: none;
    @media (min-width: 768px) {
      font-size: var(--MidText);
    }
  }
  &:focus {
    opacity: 1;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: var(--dark-blue);
  padding: 0;
  h1 {
    margin: 0;
  }
`;

export const ResultContainer = styled(Link)`
  height: 50px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 5px var(--purple);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  margin-bottom: 15px;
  text-decoration: none;
`;

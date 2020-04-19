import styled from "styled-components";
import { Link } from "react-router-dom";

export const Label = styled.label`
  font-family: var(--Mukta);
  font-size: var(--MidTitle);
  color: var(--dark-blue);
  font-weight: bold;
  margin: 0;
`;

export const SubmitButton = styled.button`
  background: var(--dark-blue);
  color: var(--white);
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 42px;
  font-family: var(--Montserrat);
  font-weight: bolder;
  font-size: var(--MidTitle);
  margin-top: 30px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--purple);
  }
`;
export const AccountLink = styled(Link)`
  text-align:center;
  font-family: var(--Raleway);
  font-size: var(--Text);
  color: var(--blue);
  margin: 0;
  text-decoration: none;
`;

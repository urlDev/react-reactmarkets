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
  &:focus {
    outline: none;
  }
`;
export const AccountLink = styled(Link)`
  text-align: center;
  font-family: var(--Raleway);
  font-size: var(--Text);
  color: var(--blue);
  margin: 0;
  text-decoration: none;
`;

export const NewsContainer = styled.div`
margin-top: 69px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-bottom: 3rem;
  }
`;

export const News = styled.a`
  text-decoration: none;
  height: 200px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--purple);
  padding: 20px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

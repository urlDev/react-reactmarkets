import "../../index";
import { Link } from "react-router-dom"

import styled from "styled-components";

export const Container = styled(Link)`
text-decoration: none;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 0 5px var(--pink);
  padding: 20px;
  background: var(--white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Title = styled.h1`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  font-family: var(--Montserrat);
  font-size: var(--BigTitle);
  color: var(--dark-blue);
  font-weight: 900;
`;

export const Text = styled.p`
  font-family: var(--Mukta);
  font-size: var(--MidTitle);
  color: var(--dark-blue);
  font-weight: bold;
  margin: 0;
`;

export const SmallText = styled.p`
  font-family: var(--Raleway);
  font-size: var(--Text);
  color: var(--blue);
  margin: 0;
`;

export const Chart = styled.div`
  height: 100%;
  width: 100%;
`;

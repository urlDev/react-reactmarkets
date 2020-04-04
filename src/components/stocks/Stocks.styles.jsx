import "../../index";

import styled from "styled-components";

export const Container = styled.div`
    height:150px;
    border-radius: 10px;
    box-shadow: 0 0 5px var(--pink);
`

export const Title = styled.h1`
margin-top: 60px;
  font-family: var(--Montserrat);
  font-size: var(--BigTitle);
  color: var(--dark-blue);
  font-weight: 900;
`;

export const Text = styled.p`
  font-family: var(--Mukta);
  font-size: var(--MidTitle);
  color: var(--dark-blue);
`;

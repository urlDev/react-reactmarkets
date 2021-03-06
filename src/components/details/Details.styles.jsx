import styled from "styled-components";

import { SmallText, Text, Percentage } from "../stocks/Stocks.styles";

export const DetailsChartContainer = styled.div`
  height: 235px;
  border: none;
  border-radius: 10px;
  background: var(--white);
  box-shadow: 0 0 5px var(--purple);
  padding: 20px;
  @media (min-width: 768px) {
    height: 450px;
    box-shadow: none;
    padding: 0;
  }
`;

export const Time = styled(Percentage)`
  background: var(--white);
  color: var(--dark-blue);
  cursor: pointer;
  &:hover {
    background: var(--purple);
    color: var(--white);
  }
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const DetailsText = styled(Text)`
  font-size: 15px;
`;

export const DetailsSmallText = styled(SmallText)`
  font-size: 15px;
`;

export const ResponsiveDetailsPage = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 20px;
    margin-bottom: 10px;
  }
`;

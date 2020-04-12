import styled from "styled-components";

import { SmallText, Text, Percentage } from "../stocks/Stocks.styles";

export const DetailsChartContainer = styled.div`
  height: 235px;
  border: none;
  border-radius: 10px;
  background: var(--white);
  box-shadow: 0 0 5px var(--purple);
  padding: 20px;
`;

export const Time = styled(Percentage)`
  background: var(--purple);
  // width: 30px;
`;

export const TimeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom:20px;
`;

export const DetailsText = styled(Text)`
    font-size: 15px;
`

export const DetailsSmallText = styled(SmallText)`
    font-size: 15px;
`

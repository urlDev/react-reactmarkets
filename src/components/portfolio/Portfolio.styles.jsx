import styled from "styled-components";

import { Text } from "../stocks/Stocks.styles";

export const StyledText = styled(Text)`
  font-weight: bold;
  color: var(--white);
  @media (min-width: 768px) {
    color: var(--dark-blue);
  }
`;

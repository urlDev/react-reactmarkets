import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { Title, Text, Container } from "../stocks/Stocks.styles";

const Forex = () => {
  const { forex } = useContext(FinanceContext);

  return (
    <div>
      {forex ? (
        <div>
          <Title>Forex</Title>
          {forex.map(pairs => {
            return (
              <Container>
                <Text key={pairs.ticker}>{pairs.ticker}</Text>
              </Container>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Forex;

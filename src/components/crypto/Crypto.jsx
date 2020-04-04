import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { Title, Text, Container } from "../stocks/Stocks.styles";

const Crypto = () => {
  const { crypto } = useContext(FinanceContext);

  return (
    <div>
      {crypto ? (
        <div>
          <Title>Crypto</Title>
          {crypto.map(crypto => {
           return (
              <Container>
                <Text key={crypto.name}>{crypto.name}</Text>
              </Container>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Crypto;

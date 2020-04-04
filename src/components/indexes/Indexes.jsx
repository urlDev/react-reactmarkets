import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { Title, Text, Container } from "../stocks/Stocks.styles";

const Indexes = () => {
  const { indexes } = useContext(FinanceContext);

  return (
    <div>
      {indexes ? (
        <div>
          <Title>Indexes</Title>
          {indexes.map(index => {
            return (
              <Container>
                <Text key={index.indexName}>{index.indexName}</Text>
              </Container>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Indexes;

import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";

import { Title, Text, Container } from "./Stocks.styles";


const params = {
  spaceBetween: 30,
  centeredSlides: true,
  rebuildOnUpdate: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};

const Stocks = () => {
  const { stocks } = useContext(FinanceContext);

  return (
    <div>
      {stocks ? (
        <>
          <Title>Stocks</Title>
          <Swiper {...params}>
            {stocks.map(stock => {
              return (
                <Container>
                  <Text key={stock.symbol}>{stock.symbol}</Text>
                </Container>
              );
            })}
          </Swiper>
        </>
      ) : null}
    </div>
  );
};

export default Stocks;

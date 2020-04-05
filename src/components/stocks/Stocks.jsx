import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line } from "recharts";

import { Title, Text, Container, SmallText, Chart } from "./Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
};

const Stocks = () => {
  const { stocks, hourly, handleClick } = useContext(FinanceContext);

  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 300, pv: 2200, amt: 2200 }
  ];

  return (
    <div>
      {stocks ? (
        <div>
          <Title>Stocks</Title>
          <Swiper {...params}>
            {stocks.map(stock => {
              return (
                <Container onClick={() => handleClick(stock.symbol)} to={`${stock.symbol}`} key={stock.symbol}>
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{stock.price}</Text>
                    <div>
                      <Text>{stock.symbol}</Text>
                      <SmallText>{stock.name}</SmallText>
                    </div>
                  </div>
                  <div>
                    <h1>Graphic</h1>
                  </div>
                </Container>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};

export default Stocks;

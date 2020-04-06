import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Title, Text, Container, SmallText } from "./Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
};

const Stocks = () => {
  const { stocks, stockChart, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {stocks ? (
        <div>
          <Title>Stocks</Title>
          <Swiper {...params}>
            {/* mapping two arrays */}
            {stocks.map((stock, index) => {
              // this will get the stocksChart in spesific index that stocks is
              const stocksChart = stockChart[index];
              return (
                <Container
                  onClick={() => handleClick(stock.symbol)}
                  to={`${stock.symbol}`}
                  key={stock.symbol}
                >
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{stock.price}</Text>
                    <div>
                      <Text>{stock.symbol}</Text>
                      <SmallText>{stock.name}</SmallText>
                    </div>
                  </div>
                  <ResponsiveContainer>
                    <LineChart data={stocksChart}>
                      <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#1d2d44"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
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

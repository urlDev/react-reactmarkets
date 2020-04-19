import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Loading } from "../../App.styles";
import { Title, Text, Container, SmallText, Percentage } from "./Stocks.styles";

const params = {
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  rebuildOnUpdate: true,
  breakpoints: {
    1150: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
};

const Stocks = () => {
  const { stocks, stockChart, handleClick } = useContext(FinanceContext);

  return (
    <>
      <Title>Featured</Title>
      {stockChart.length > 4 ? (
        <>
          <Swiper {...params}>
            {/* mapping two arrays */}
            {stocks.map((stock, index) => {
              // this will get the stocksChart in specific index that stocks is
              const stocksChart = stockChart[index];
              return (
                <Container
                  onClick={() => handleClick(stock.symbol)}
                  to={`/${stock.symbol}`}
                  key={stock.symbol}
                >
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{stock.price}</Text>
                    <div>
                      <Text>{stock.symbol}</Text>
                      {stock.name ? (
                        <SmallText>
                          {stock.name.split(" ").slice(0, 2).join(" ")}
                        </SmallText>
                      ) : null}
                    </div>
                  </div>
                  <>
                    <ResponsiveContainer width={180}>
                      <LineChart data={stocksChart}>
                        <Line
                          type="monotone"
                          dataKey="close"
                          stroke="#1d2d44"
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    {/* <Percentage>{stock.changesPercentage}</Percentage> */}
                  </>
                </Container>
              );
            })}
          </Swiper>
        </>
      ) : (
        <Loading className="main">
          <Text>Loading...</Text>
        </Loading>
      )}
    </>
  );
};

export default Stocks;

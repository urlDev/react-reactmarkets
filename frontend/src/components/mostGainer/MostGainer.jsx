import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  autoplay: {
    delay: 1850,
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

const MostGainer = () => {
  const { mostGainer, mostGainerChart, handleClick } = useContext(
    FinanceContext
  );

  return (
    <div>
      {mostGainerChart.length > 9 ? (
        <div>
          <Title>Most Gainer</Title>
          <Swiper {...params}>
            {mostGainer.map((stock, index) => {
              const gainerChart = mostGainerChart[index];
              return (
                <Container
                  onClick={() => handleClick(stock.ticker)}
                  to={`${stock.ticker}`}
                  key={stock.ticker}
                >
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{stock.price}</Text>
                    <div>
                      <Text>{stock.ticker}</Text>
                      {stock.companyName ? (
                        <SmallText>
                          {stock.companyName.split(" ").slice(0, 2).join(" ")}
                        </SmallText>
                      ) : null}
                    </div>
                  </div>
                  <ResponsiveContainer width={180}>
                    <LineChart data={gainerChart}>
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

export default MostGainer;

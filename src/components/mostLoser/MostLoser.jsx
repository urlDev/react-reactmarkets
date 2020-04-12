import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  rebuildOnUpdate: true,
  autoplay: {
    delay: 1750,
    disableOnInteraction: false,
  },
};

const MostLoser = () => {
  const { mostLoser, mostLoserChart, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {mostLoserChart.length > 9 ? (
        <div>
          <Title>Most Loser</Title>
          <Swiper {...params}>
            {mostLoser.map((stock, index) => {
              const loserChart = mostLoserChart[index];
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
                      <SmallText>{stock.companyName}</SmallText>
                    </div>
                  </div>
                  <ResponsiveContainer>
                    <LineChart data={loserChart}>
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

export default MostLoser;

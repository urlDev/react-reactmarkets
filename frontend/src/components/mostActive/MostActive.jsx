import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  autoplay: {
    delay: 2300,
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

const MostActive = () => {
  const { mostActive, handleClick, mostActiveChart } = useContext(
    FinanceContext
  );

  // mostActive.map((stock, index) => {
  //   return console.log(
  //     stock.ticker,
  //     stock.price,
  //     index,
  //     mostActiveChart[index]
  //   );
  // });

  return (
    <>
      {mostActiveChart.length > 9 ? (
        <>
          <Title>Most Active</Title>
          <Swiper {...params}>
            {mostActive.map((stock, index) => {
              const activeChart = mostActiveChart[index];
              // console.log(`This is stock: ${stock.companyName}, This is index: ${index}` )
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
                    <LineChart data={activeChart}>
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
        </>
      ) : null}
    </>
  );
};

export default MostActive;

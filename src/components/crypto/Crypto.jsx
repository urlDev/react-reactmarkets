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
    delay: 1500,
    disableOnInteraction: false,
  },
};

const Crypto = () => {
  const { crypto, cryptoChart, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {crypto ? (
        <div>
          <Title>Crypto</Title>
          <Swiper {...params}>
            {crypto.map((crypto, index) => {
              const cryptosChart = cryptoChart[index];
              return (
                <Container
                  onClick={() => handleClick(crypto.name)}
                  to={`${crypto.name}`}
                  key={crypto.ticker}
                >
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{crypto.price}</Text>
                    <div>
                      <Text>{crypto.symbol}</Text>
                      <SmallText>{crypto.name}</SmallText>
                    </div>
                  </div>
                  <ResponsiveContainer>
                    <LineChart data={cryptosChart}>
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

export default Crypto;

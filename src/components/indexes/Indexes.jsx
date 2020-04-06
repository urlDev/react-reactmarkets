import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";
import { LineChart, Line, ResponsiveContainer } from "recharts";

import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
};

const Indexes = () => {
  const { indexes, handleClick, indexChart } = useContext(FinanceContext);

  return (
    <div>
      {indexes ? (
        <div>
          <Title>Indexes</Title>
          <Swiper {...params}>
            {indexes.map(index => {
              return (
                <Container
                  onClick={() => handleClick(index.indexName)}
                  to={`${index.indexName}`}
                  key={index.indexName}
                >
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{index.price}</Text>
                    <div>
                      <Text>{index.ticker.slice(1)}</Text>
                      <SmallText>{index.indexName}</SmallText>
                    </div>
                  </div>
                  <ResponsiveContainer>
                    <LineChart data={indexChart}>
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

export default Indexes;

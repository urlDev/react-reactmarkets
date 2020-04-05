import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";

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
  const { indexes, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {indexes ? (
        <div>
          <Title>Indexes</Title>
          <Swiper {...params}>
            {indexes.map(index => {
              return (
                <Container onClick={() => handleClick(index.indexName)} to={`${index.indexName}`} key={index.indexName}>
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{index.price}</Text>
                    <div>
                      <Text>{index.ticker.slice(1)}</Text>
                      <SmallText>{index.indexName}</SmallText>
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

export default Indexes;

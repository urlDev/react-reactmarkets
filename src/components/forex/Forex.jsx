import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";

import { Title, Text, Container } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1750,
    disableOnInteraction: false
  }
};

const Forex = () => {
  const { forex, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {forex ? (
        <div>
          <Title>Forex</Title>
          <Swiper {...params}>
            {forex.map(pairs => {
              return (
                <Container onClick={() => handleClick(pairs.ticker)} to={`${pairs.ticker}`} key={pairs.ticker}>
                  <div>
                    <Text style={{ marginBottom: "50px" }}>{pairs.bid}</Text>
                    <div>
                      <Text>{pairs.ticker}</Text>
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

export default Forex;

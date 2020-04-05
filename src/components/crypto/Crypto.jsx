import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import Swiper from "react-id-swiper";

import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  }
};

const Crypto = () => {
  const { crypto, handleClick } = useContext(FinanceContext);

  return (
    <div>
      {crypto ? (
        <div>
          <Title>Crypto</Title>
          <Swiper {...params}>
            {crypto.map(crypto => {
              return (
                <Container onClick={() => handleClick(crypto.name)} to={`${crypto.name}`} key={crypto.ticker}>
                  <div>
                    <Text style={{ marginBottom: "30px" }}>{crypto.price}</Text>
                    <div>
                      <Text>{crypto.ticker}</Text>
                      <SmallText>{crypto.name}</SmallText>
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

export default Crypto;

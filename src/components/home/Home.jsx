import React from "react";

import Stocks from "../stocks/Stocks";
import Indexes from "../indexes/Indexes";
import Crypto from "../crypto/Crypto";
import Forex from "../forex/Forex";

import { HomeContainer, Background } from "./Home.styles";

const Home = () => {
  return (
    <>
      <Background />
      <HomeContainer>
        <Stocks />
        <Indexes />
        <Crypto />
        <Forex />
      </HomeContainer>
    </>
  );
};

export default Home;

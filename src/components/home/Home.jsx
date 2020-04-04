import React from "react";

import Stocks from "../stocks/Stocks";
import Indexes from "../indexes/Indexes";
import Crypto from "../crypto/Crypto";
import Forex from "../forex/Forex";

import { HomeContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Stocks />
      <Indexes />
      <Crypto />
      <Forex />
    </HomeContainer>
  );
};

export default Home;

import React from "react";

import Stocks from "../stocks/Stocks";
import Indexes from "../indexes/Indexes";
import Crypto from "../crypto/Crypto";
import Forex from "../forex/Forex";

import { PageContainer, Background } from "./Home.styles";

const Home = () => {
  return (
    <>
      <Background />
      <PageContainer>
        <Stocks />
        {/* <Indexes /> */}
        <Crypto />
        <Forex />
      </PageContainer>
    </>
  );
};

export default Home;

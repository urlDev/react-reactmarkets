import React from "react";

import Stocks from "../stocks/Stocks";
import MostActive from "../mostActive/MostActive";
import MostGainer from "../mostGainer/MostGainer";
import MostLoser from "../mostLoser/MostLoser";

import { PageContainer, Background } from "./Home.styles";

const Home = () => {
  return (
    <>
      <Background />
      <PageContainer>
        <Stocks />
        <MostActive/>
        <MostGainer />
        <MostLoser />
      </PageContainer>
    </>
  );
};

export default Home;

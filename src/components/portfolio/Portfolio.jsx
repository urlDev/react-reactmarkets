import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { PageContainer, Background } from "../home/Home.styles";
import { Title, Text, Percentage } from "../stocks/Stocks.styles";
import { ResultContainer } from "../search/Search.styles";
import { StyledText } from "./Portfolio.styles"

const Portfolio = () => {
  return (
    <>
      <Background />
      <PageContainer>
        <Title>Portfolio</Title>
        <StyledText>You have 10 stocks in your portfolio</StyledText>

        <div style={{ marginTop: "69px" }}>
          <ResultContainer>
            <Text>AAPL</Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ marginRight: "10px" }}>205.75</Text>
              <Percentage>+0.25%</Percentage>
            </div>
          </ResultContainer>
        </div>
      </PageContainer>
    </>
  );
};

export default Portfolio;

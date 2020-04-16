import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import uuid from "react-uuid";

import { PageContainer, Background } from "../home/Home.styles";
import { Title, Text, Percentage } from "../stocks/Stocks.styles";
import { ResultContainer } from "../search/Search.styles";
import { StyledText } from "./Portfolio.styles";

import { Added, Add } from "../details/Details";

const Portfolio = () => {
  const { portfolio, addPortfolio, handleClick } = useContext(FinanceContext);

  console.log(portfolio)
  return (
    <>
      <Background />
      <PageContainer>
        <Title>Portfolio</Title>
        <StyledText>
          You have <span style={{ color: "#dabafd" }}>{portfolio.length}</span>{" "}
          {portfolio.length > 1 ? "stocks" : "stock"} in your portfolio
        </StyledText>

        <div style={{ marginTop: "69px" }}>
          {portfolio.length > 0
            ? portfolio.map((stock) => {
                const { changesPercentage, price } = stock[0].profile;
                return (
                  <ResultContainer
                    onClick={() => handleClick(stock[0].symbol)}
                    // to={`${stock.symbol}`}
                    key={uuid()}
                  >
                    <Text>
                      <span
                        onClick={() => addPortfolio(stock)}
                        style={{ marginRight: "10px" }}
                      >
                        {portfolio.includes(stock) ? Added : Add}
                      </span>
                      {stock[0].symbol}
                    </Text>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Text style={{ marginRight: "10px" }}>${price}</Text>
                      {changesPercentage.slice(1, -2) > 0 ? (
                        <Percentage>
                          {changesPercentage.slice(1, -1)}
                        </Percentage>
                      ) : (
                        <Percentage style={{ background: "#C60808" }}>
                          {changesPercentage.slice(1, -1)}
                        </Percentage>
                      )}
                    </div>
                  </ResultContainer>
                );
              })
            : null}
        </div>
      </PageContainer>
    </>
  );
};

export default Portfolio;

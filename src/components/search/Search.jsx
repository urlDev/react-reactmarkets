import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import uuid from "react-uuid";

import { PageContainer, Background } from "../home/Home.styles";
import { Title, Text, Percentage } from "../stocks/Stocks.styles";
import { Input, SearchButton, ResultContainer } from "./Search.styles";

const Search = () => {
  const { handleChange, handleClick, searchResults } = useContext(
    FinanceContext
  );
  return (
    <>
      <Background />
      <PageContainer>
        <Title>Search</Title>
        <form onSubmit={handleClick}>
          <Input placeholder="Search for stocks" onChange={handleChange} />
          <SearchButton type="submit">
            <h1>
              <i className="fas fa-search"></i>
            </h1>
          </SearchButton>
        </form>

        <div style={{ marginTop: "70px" }}>
          {searchResults.length > 0
            ? searchResults.map((stock) => {
                return (
                  <ResultContainer
                    onClick={() => handleClick(stock[0].symbol)}
                    to={`${stock.symbol}`}
                    key={uuid()}
                  >
                    <Text>{stock[0].symbol}</Text>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Text style={{ marginRight: "10px" }}>
                        ${stock[0].price}
                      </Text>
                      {stock[0].changesPercentage > 0 ? (
                        <Percentage>{stock[0].changesPercentage}%</Percentage>
                      ) : (
                        <Percentage style={{ background: "#C60808" }}>
                          {stock[0].changesPercentage}%
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

export default Search;

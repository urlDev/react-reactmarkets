import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { PageContainer, Background } from "../home/Home.styles";
import { Title, Text, Percentage } from "../stocks/Stocks.styles";
import { Input, SearchButton, ResultContainer } from "./Search.styles";

const Search = () => {
  const { handleChange, handleClick } = useContext(FinanceContext);
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
          <ResultContainer>
            <Text>AAPL</Text>
            <div style={{display:"flex", alignItems:"center"}}>
              <Text style={{marginRight:"10px"}}>205.75</Text>
              <Percentage>+0.25%</Percentage>
            </div>
          </ResultContainer>
        </div>
      </PageContainer>
    </>
  );
};

export default Search;

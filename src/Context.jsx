import React, { Component, createContext } from "react";

export const FinanceContext = createContext();

class FinanceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: "",
      indexes: "",
      crypto: "",
      forex: ""
    };
  }

  componentDidMount() {
    this.getStocks();
    this.getIndexes();
    this.getCrypto();
    this.getForex();
  }

  getStocks = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,TSLA"
    );
    const data = await response.json();
    this.setState(
      {
        stocks: data
      },
      () => {
        console.log(this.state.stocks);
      }
    );
  };

  getIndexes = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/majors-indexes"
    );
    const data = await response.json();
    this.setState(
      {
        indexes: data.majorIndexesList
      },
      () => {
        console.log(this.state.indexes);
      }
    );
  };

  getCrypto = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/cryptocurrencies"
    );
    const data = await response.json();
    this.setState(
      {
        crypto: data.cryptocurrenciesList.slice(0, 10)
      },
      () => {
        console.log(this.state.crypto);
      }
    );
  };

  getForex = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/forex"
    );
    const data = await response.json();
    this.setState(
      {
        forex: data.forexList.slice(0, 10)
      },
      () => {
        console.log(this.state.forex);
      }
    );
  };

  render() {
    return (
      <FinanceContext.Provider
        value={{
          ...this.state,
          getStocks: this.getStocks,
          getIndexes: this.getIndexes,
          getCrypto: this.getCrypto,
          getForex: this.getForex
        }}
      >
        {this.props.children}
      </FinanceContext.Provider>
    );
  }
}

export default FinanceContextProvider;

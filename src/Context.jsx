import React, { Component, createContext } from "react";
import axios from "axios";

export const FinanceContext = createContext();

class FinanceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      indexes: [],
      crypto: [],
      forex: [],
      name: "",
      stockChart: [],
      indexChart: [],
      cryptoChart: [],
    };
  }

  //  https://reactjs.org/docs/concurrent-mode-suspense.html
  // check this out if you need to modify fetches accordingly
  componentDidMount() {
    Promise.all([
      this.getIndexes(),
      this.getStocks(),
      this.getCrypto(),
      this.getForex(),
    ]);
  }

  getStocks = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,TSLA,MSFT,GOOG"
    );
    const data = await response.json();
    this.setState(
      {
        stocks: data,
      },
      () => {
        this.getStockCharts();
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
        indexes: data.majorIndexesList,
      },
      () => {
        this.getIndexCharts();
      }
    );
  };

  getCrypto = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/quotes/crypto"
    );
    const data = await response.json();
    this.setState(
      {
        crypto: data.slice(0, 15),
      },
      () => {
        this.getCryptoCharts();
      }
    );
  };

  getForex = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/forex"
    );
    const data = await response.json();
    this.setState({
      forex: data.forexList.slice(0, 10),
    });
  };

  getStockCharts = () => {
    this.state.stocks.map(async (stock) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.symbol}`
      );
      const data = await response.json();
      this.setState({
        stockChart: [...this.state.stockChart, data],
      });
    });
  };

  getIndexCharts = () => {
    this.state.indexes.map((index) => {
      return axios
        .get(
          `https://financialmodelingprep.com/api/v3/historical-chart/1hour/^${index.ticker.slice(
            1
          )}`
        )
        .then(({ data }) => {
          this.setState({
            indexChart: data,
          });
        });
    });
  };

  getCryptoCharts = () => {
    this.state.crypto.map(async (crypt) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${crypt.symbol}`
      );
      const data = await response.json();
      this.setState({
        cryptoChart: data
      })
    });
  };

  handleClick = (name) => {
    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <FinanceContext.Provider
        value={{
          ...this.state,
          getStocks: this.getStocks,
          getIndexes: this.getIndexes,
          getCrypto: this.getCrypto,
          getForex: this.getForex,
          getHourly: this.getHourly,
          handleClick: this.handleClick,
          getIndexChart: this.getIndexChart,
        }}
      >
        {this.props.children}
      </FinanceContext.Provider>
    );
  }
}

export default FinanceContextProvider;

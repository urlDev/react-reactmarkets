import React, { Component, createContext } from "react";

export const FinanceContext = createContext();

class FinanceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: "",
      indexes: "",
      crypto: "",
      forex: "",
      hourly: [],
      name: ""
    };
  }

//  https://reactjs.org/docs/concurrent-mode-suspense.html
// check this out if you need to modify fetches accordingly
  componentDidMount() {
    Promise.all([
      this.getHourly(),
      this.getStocks(),
      this.getIndexes(),
      this.getCrypto(),
      this.getForex()]
    );
  }

  getStocks = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,TSLA"
    );
    const data = await response.json();
    this.setState({
      stocks: data
    });
  };

  getIndexes = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/majors-indexes"
    );
    const data = await response.json();
    this.setState({
      indexes: data.majorIndexesList
    });
  };

  getCrypto = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/cryptocurrencies"
    );
    const data = await response.json();
    this.setState({
      crypto: data.cryptocurrenciesList.slice(0, 10)
    });
  };

  getForex = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/forex"
    );
    const data = await response.json();
    this.setState({
      forex: data.forexList.slice(0, 10)
    });
  };

  getHourly = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/historical-chart/1hour/AAPL"
    );
    const data = await response.json();
    this.setState({
      hourly: data
    });
  };

  handleClick = (name) => {
    this.setState({
      name: name
    })
  }

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
        }}
      >
        {this.props.children}
      </FinanceContext.Provider>
    );
  }
}

export default FinanceContextProvider;

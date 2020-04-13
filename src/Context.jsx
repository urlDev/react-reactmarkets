import React, { Component, createContext } from "react";

export const FinanceContext = createContext();

class FinanceContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      mostActive: [],
      mostGainer: [],
      mostLoser: [],
      name: "",
      stockChart: [],
      mostActiveChart: [],
      mostGainerChart: [],
      mostLoserChart: [],
      details: [],
      detailsChart: [],
      time: [],
      search: [],
      searchCompany: [],
      searchResults: [],
      detailedChart: [],
      portfolio: [],
    };
  }

  //  https://reactjs.org/docs/concurrent-mode-suspense.html
  // check this out if you need to modify fetches accordingly
  componentDidMount() {
    this.clearState();
    Promise.all([
      this.getStocks(),
      this.getActive(),
      this.getGainer(),
      this.getLoser(),
    ]);
  }

  // these dont need to be cleaned yet, but I will use it for sign in
  clearState = () => {
    this.setState({
      search: [],
      searchResults: [],
      searchCompany: [],
    });
  };

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

  getActive = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/stock/actives"
    );
    const data = await response.json();
    this.setState(
      {
        mostActive: data.mostActiveStock,
      },
      () => {
        this.getActiveCharts();
        // console.log(this.state.mostActive);
      }
    );
  };

  getGainer = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/stock/gainers"
    );
    const data = await response.json();
    this.setState(
      {
        mostGainer: data.mostGainerStock,
      },
      () => {
        this.getGainerCharts();
        // console.log(this.state.mostGainer);
      }
    );
  };

  getLoser = async () => {
    const response = await fetch(
      "https://financialmodelingprep.com/api/v3/stock/losers"
    );
    const data = await response.json();
    this.setState(
      {
        mostLoser: data.mostLoserStock,
      },
      () => {
        // this.getLoserCharts();
      }
    );
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

  getActiveCharts = () => {
    this.state.mostActive.map(async (stock) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`
      );
      const data = await response.json();
      this.setState(
        {
          mostActiveChart: [...this.state.mostActiveChart, data],
        },
        () => {
          // console.log(this.state.mostActiveChart[0]);
          // console.log(`${index.ticker}, ${index.price}, ${this.state.mostActiveChart[0]}`)
          // this.state.mostActiveChart.map(chart => console.log(chart, index.ticker, index.price))
        }
      );
    });
  };

  getGainerCharts = () => {
    this.state.mostGainer.map(async (stock) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`
      );
      const data = await response.json();
      this.setState({
        mostGainerChart: [...this.state.mostGainerChart, data],
      });
    });
  };

  getLoserCharts = () => {
    this.state.mostLoser.map(async (stock) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`
      );
      const data = await response.json();
      this.setState({
        mostLoserChart: [...this.state.mostLoserChart, data],
      });
    });
  };

  handleClick = (name) => {
    this.setState({
      name: name,
      details: [],
      detailsChart: [],
    });
    this.getDetails(name);
  };

  getDetails = async (name) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${name}`
    );
    const data = await response.json();
    this.setState(
      {
        details: [data],
      },
      () => {
        this.getDetailsChart();
      }
    );
  };

  getDetailsChart = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${this.state.details[0].symbol}`
    );
    const data = await response.json();
    this.setState({
      detailsChart: [data],
    });
  };

  searchStocks = async () => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${this.state.search}&limit=15`
    );
    const data = await response.json();
    this.setState(
      {
        searchCompany: data,
      },
      () => {
        this.getSearchedStocks();
      }
    );
  };

  getSearchedStocks = () => {
    this.state.searchCompany.map(async (stock) => {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/${stock.symbol}`
      );
      const data = await response.json();
      this.setState({
        searchResults: [...this.state.searchResults, data],
      });
    });
  };

  handleChange = (event) => {
    if (event.target.value.length) {
      this.setState({
        search: [],
        searchResult: [],
        searchCompany: [],
      });
    }
    this.setState(
      {
        search: event.target.value,
        searchResults: [],
      },
      () => {
        this.searchStocks();
      }
    );
  };

  // getDetailedChart = async ((5, 15, 30, 60)) => {
  //   const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL`)
  // }

  addPortfolio = (stock) => {
    const { portfolio } = this.state;
    let copyPortfolio = [...portfolio];
    if (!portfolio.includes(stock)) {
      copyPortfolio.push(stock);
      this.setState({
        portfolio: copyPortfolio,
      });
    } else {
      copyPortfolio = copyPortfolio.filter(
        (eachStock) => eachStock !== stock
      );
      this.setState({
        portfolio: copyPortfolio,
      });
    }
  };

  render() {
    return (
      <FinanceContext.Provider
        value={{
          ...this.state,
          handleClick: this.handleClick,
          handleChange: this.handleChange,
          clearState: this.clearState,
          addPortfolio: this.addPortfolio,
        }}
      >
        {this.props.children}
      </FinanceContext.Provider>
    );
  }
}

export default FinanceContextProvider;

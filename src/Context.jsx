import React, { Component, createContext } from "react";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import { Persist } from "react-persist";
require("dotenv").config();

export const FinanceContext = createContext();

class FinanceContextProvider extends Component {
  constructor(props) {
    super(props);
    const AbortController = window.AbortController;
    this.controller = new AbortController();
    this.signal = this.controller.signal;
    this.state = {
      stocks: [],
      mostActive: [],
      mostGainer: [],
      mostLoser: [],
      name: "",
      tempStock: [],
      stockChart: [],
      tempActive: [],
      mostActiveChart: [],
      tempGainer: [],
      mostGainerChart: [],
      tempLoser: [],
      mostLoserChart: [],
      details: [],
      detailsChart: [],
      search: [],
      searchCompany: [],
      searchResults: [],
      portfolio: [],
      activeIndex: 3,
      isTablet: false,
      user: null,
      news: [],
      visible: 10,
      isMarketOpen: false,
    };
  }

  //  https://reactjs.org/docs/concurrent-mode-suspense.html
  // check this out if you need to modify fetches accordingly
  componentDidMount() {
    this.clearState();
    this.updateProps();
    this.getStocks();
    this.getActive();
    this.getGainer();
    this.getLoser();
    this.getWorkingHours();

    this.setState({
      portfolio: [],
    });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          user: userAuth,
        });
      }
    });
    // to get the size of the window, for responsive components
    window.addEventListener("resize", this.updateProps);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.portfolio !== this.state.portfolio) {
      this.getNewsProfile();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateProps);
    this.controller.abort();
  }

  updateProps = () => {
    this.setState({ isTablet: window.innerWidth > 768 });
  };

  clearState = () => {
    this.setState({
      search: [],
      searchResults: [],
      searchCompany: [],
      activeIndex: 3,
      visible: 10,
    });
  };

  abortFunc = (error) => {
    if (error.name === "AbortError") {
      console.log("Fetch Aborted");
    } else {
      console.log(error.message);
    }
  };

  getStocks = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/quote/AAPL,FB,TSLA,MSFT,GOOG",
        { signal }
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
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getActive = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/stock/actives",
        { signal }
      );
      const data = await response.json();
      this.setState(
        {
          mostActive: data.mostActiveStock,
        },
        () => {
          this.getActiveCharts();
        }
      );
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getGainer = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/stock/gainers",
        { signal }
      );
      const data = await response.json();
      this.setState(
        {
          mostGainer: data.mostGainerStock,
        },
        () => {
          this.getGainerCharts();
        }
      );
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getLoser = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/stock/losers",
        { signal }
      );
      const data = await response.json();
      this.setState(
        {
          mostLoser: data.mostLoserStock,
        },
        () => {
          this.getLoserCharts();
        }
      );
    } catch (error) {
      this.abortFunc(error);
    }
  };

/* 
On home page, every stock has their own chart, supposedly.
But before making a temp state for each stock cases, they 
belonged to other stocks because of async nature of data.
So I first set data to a temp state, then used array methods
to get them sorted. Then I had to use slice and flat to
make them suitable for recharts library.
Now charts match with their stocks. This "only" took my two 
weeks. But I made it!!! 💪💪💪
*/
  getStockCharts = () => {
    const signal = this.signal;
    try {
      if (this.state.stocks.length > 4) {
        this.state.stocks.map(async (stock, index) => {
          const response = await fetch(
            `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.symbol}`,
            { signal }
          );
          const data = await response.json();
          this.setState({
            tempStock: [...this.state.tempStock, [data, index]],
          });
          let newState = [...this.state.tempStock];
          newState = newState
            .sort((a, b) => a[1] - b[1])
            .map((stock) => stock.slice(0, 1))
            .flat(1);
          this.setState({
            stockChart: newState,
          });
        });
      }
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getActiveCharts = () => {
    const signal = this.signal;
    try {
      this.state.mostActive.map(async (stock, index) => {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`,
          { signal }
        );
        const data = await response.json();
        this.setState({
          tempActive: [...this.state.tempActive, [data, index]],
        });
        let newState = [...this.state.tempActive];
        newState = newState
          .sort((a, b) => a[1] - b[1])
          .map((stock) => stock.slice(0, 1))
          .flat(1);
        this.setState({
          mostActiveChart: newState,
        });
      });
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getGainerCharts = () => {
    const signal = this.signal;
    try {
      this.state.mostGainer.map(async (stock, index) => {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`,
          { signal }
        );
        const data = await response.json();
        this.setState({
          tempGainer: [...this.state.tempGainer, [data, index]],
        });
        let newState = [...this.state.tempGainer];
        newState = newState
          .sort((a, b) => a[1] - b[1])
          .map((stock) => stock.slice(0, 1))
          .flat(1);
        this.setState({
          mostGainerChart: newState,
        });
      });
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getLoserCharts = () => {
    const signal = this.signal;
    try {
      this.state.mostLoser.map(async (stock, index) => {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${stock.ticker}`,
          { signal }
        );
        const data = await response.json();
        this.setState({
          tempLoser: [...this.state.tempLoser, [data, index]],
        });
        let newState = [...this.state.tempLoser];
        newState = newState
          .sort((a, b) => a[1] - b[1])
          .map((stock) => stock.slice(0, 1))
          .flat(1);
        this.setState({
          mostLoserChart: newState,
        });
      });
    } catch (error) {
      this.abortFunc(error);
    }
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
    const signal = this.signal;
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/company/profile/${name}`,
        { signal }
      );
      const data = await response.json();
      this.setState(
        {
          details: data,
        },
        () => {
          this.getDetailsChart("1hour");
        }
      );
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getDetailsChart = async (time) => {
    const signal = this.signal;
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/historical-chart/${time}/${this.state.details.symbol}`,
        { signal }
      );
      const data = await response.json();
      this.setState({
        detailsChart: [data],
      });
    } catch (error) {
      this.abortFunc(error);
    }
  };

  changeIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  searchStocks = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${this.state.search}&limit=15`,
        { signal }
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
    } catch (error) {
      this.abortFunc(error);
    }
  };

  getSearchedStocks = () => {
    const signal = this.signal;
    try {
      this.state.searchCompany.map(async (stock) => {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${stock.symbol}`,
          { signal }
        );
        const data = await response.json();
        this.setState({
          searchResults: [...this.state.searchResults, data],
        });
      });
    } catch (error) {
      this.abortFunc(error);
    }
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

  addPortfolio = (stock) => {
    const { portfolio } = this.state;
    let copyPortfolio = [...portfolio];
    if (!portfolio.some((addedStock) => addedStock.symbol === stock.symbol)) {
      copyPortfolio.push(stock);
      this.setState({
        portfolio: copyPortfolio,
      });
    } else {
      copyPortfolio = copyPortfolio.filter(
        (eachStock) => eachStock.symbol !== stock.symbol
      );
      this.setState({
        portfolio: copyPortfolio,
      });
    }
  };

  getNewsProfile = () => {
    const signal = this.signal;
    const { portfolio, news } = this.state;
    try {
      if (portfolio.length) {
        portfolio.map(async (stock) => {
          const response = await fetch(
            `https://api.currentsapi.services/v1/search?keywords=${stock.profile.companyName
              .split(" ")
              .slice(0, 1)
              .join(" ")}&language=en&apiKey=${
              process.env.REACT_APP_NEWS_API_KEY
            }`,
            { signal }
          );
          const data = await response.json();
          this.setState({
            news: [...news, data.news],
          });
        });
      } else {
        this.setState({
          news: [],
        });
      }
    } catch (error) {
      this.abortFunc(error);
    }
  };

  loadMore = () => {
    this.setState((prev) => {
      return { visible: prev.visible + 10 };
    });
  };

  getWorkingHours = async () => {
    const signal = this.signal;
    try {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/is-the-market-open",
        { signal }
      );
      const data = await response.json();
      this.setState({
        isMarketOpen: data.isTheStockMarketOpen,
      });
    } catch (error) {
      this.abortFunc(error);
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
          getDetailsChart: this.getDetailsChart,
          changeIndex: this.changeIndex,
          getNewsProfile: this.getNewsProfile,
          loadMore: this.loadMore,
        }}
      >
        {this.props.children}
        <Persist
          name="Stocks"
          data={this.state.portfolio}
          debounce={500}
          onMount={(data) => this.setState({ portfolio: data })}
        />
      </FinanceContext.Provider>
    );
  }
}

export default FinanceContextProvider;

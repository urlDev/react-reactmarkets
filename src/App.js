import React from "react";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Details from "./components/details/Details";
import TopNav from "./components/topNav/TopNav";

import { Switch, Route } from "react-router-dom";

import { AppContainer, TopNavAppContainer } from "./App.styles";

import FinanceContextProvider from "./Context.jsx";

function App() {
  return (
    <>
      <FinanceContextProvider>
        <TopNavAppContainer>
          <TopNav />
        </TopNavAppContainer>

        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/profile" component={Profile} />
            <Route path="/:name" component={Details} />
          </Switch>
          <Nav />
        </AppContainer>
      
      </FinanceContextProvider>
    </>
  );
}

export default App;

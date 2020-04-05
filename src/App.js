import React from "react";

import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Details from "./components/details/Details";

import { Switch, Route } from "react-router-dom";

import FinanceContextProvider from "./Context.jsx";

function App() {
  return (
    <>
      <FinanceContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/profile" component={Profile} />
          <Route path="/:name" component={Details} />
        </Switch>
        <Nav />
      </FinanceContextProvider>
    </>
  );
}

export default App;

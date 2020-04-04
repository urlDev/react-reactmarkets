import React from "react";

import Home from "./components/home/Home"
import Nav from "./components/nav/Nav";

import { Switch, Route } from "react-router-dom";

import FinanceContextProvider from "./Context.jsx";

function App() {
  return (
    <>
      <FinanceContextProvider>
         <Switch>
         <Home/>
         </Switch>
        <Nav />
      </FinanceContextProvider>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import { FinanceContext } from "../../Context";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";

import { TopNavContainer } from "./TopNav.styles";
import { Text } from "../stocks/Stocks.styles";

const TopNav = () => {
  const { user } = useContext(FinanceContext);

  return (
    <TopNavContainer>
      <Link to="/">
        <img src={require("../../assets/Logo.svg")} alt="logo" />
      </Link>
      <div style={{ display: "flex" }}>
        {user ? (
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </Text>
        ) : null}

        <h1>
          <i className="fas fa-bell"></i>
        </h1>
      </div>
    </TopNavContainer>
  );
};

export default TopNav;

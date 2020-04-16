import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { TopNavContainer } from "./TopNav.styles";
import { SmallText } from "../stocks/Stocks.styles";

const TopNav = () => {
  const { signOut, user } = useContext(FinanceContext);

  return (
    <TopNavContainer>
      <img src={require("../../assets/Logo.svg")} alt="logo" />
      <div style={{ display: "flex" }}>
        {user.id ? (
          <SmallText
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
            onClick={signOut}
          >
            Sign Out
          </SmallText>
        ) : null}

        <h1>
          <i className="fas fa-bell"></i>
        </h1>
      </div>
    </TopNavContainer>
  );
};

export default TopNav;

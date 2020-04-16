import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { FinanceContext } from "../../Context";

import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

import { Title } from "../stocks/Stocks.styles";
import { PageContainer, Background } from "../home/Home.styles";
import { StyledText } from "../portfolio/Portfolio.styles";

const Profile = () => {
  const { user } = useContext(FinanceContext);

  return (
    <>
      <Background />
      <PageContainer>
        {user.id ? (
          <>
            <Title>Welcome, {user.name}!</Title>
            <StyledText>What would you like to do?</StyledText>
          </>
        ) : (
          <Switch>
            <Route exact path="/profile" component={SignIn} />
            <Route path="/profile/signin" component={SignIn} />
            <Route path="/profile/signup" component={SignUp} />
          </Switch>
        )}
      </PageContainer>
    </>
  );
};

export default Profile;

import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { FinanceContext } from "../../Context";

import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

import { Loading } from "../../App.styles";
import { Title, Text, Container, SmallText } from "../stocks/Stocks.styles";
import { PageContainer, Background } from "../home/Home.styles";
import { StyledText } from "../portfolio/Portfolio.styles";

const Profile = () => {
  const { user, news } = useContext(FinanceContext);

  return (
    <>
      <Background />
      <PageContainer>
        {user ? (
          <>
            <Title>Welcome, {user.displayName}!</Title>
            <StyledText>What would you like to do?</StyledText>
            {news ? (
              news.flat(Infinity).map((news) => {
                return (
                  <Container>
                    <Text>{news.title}</Text>
                    <SmallText>{news.description}</SmallText>
                  </Container>
                );
              })
            ) : (
              <Loading className="main">
                <Text>
                  Add stocks to your portfolio, to see news about them!
                </Text>
              </Loading>
            )}
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

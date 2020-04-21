import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { FinanceContext } from "../../Context";
import uuid from "react-uuid";

import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

import { Title, Text, SmallText } from "../stocks/Stocks.styles";
import { PageContainer, Background } from "../home/Home.styles";
import { StyledText } from "../portfolio/Portfolio.styles";
import { NewsContainer, News, SubmitButton} from "./Profile.styles";

const Profile = () => {
  const { user, news, portfolio, loadMore, visible } = useContext(
    FinanceContext
  );

  return (
    <>
      <Background />
      <PageContainer>
        {user ? (
          <>
            <Title>Welcome, {user.displayName}!</Title>
            {portfolio.length ? (
              <StyledText>Here are the news about your portfolio.</StyledText>
            ) : (
              <StyledText>Add stocks to your portfolio to see news.</StyledText>
            )}
            <NewsContainer>
              {news &&
                news
                  .flat(Infinity)
                  .slice(0, visible)
                  .map((news) => {
                    return (
                      <News
                        key={uuid()}
                        href={news.url}
                        target="_blank"
                        rel="noopener"
                        className="fade-in"
                      >
                        <Text>{news.title}</Text>
                        <SmallText>
                          {news.description.split(" ").slice(0, 15).join(" ")}
                          ...
                        </SmallText>
                      </News>
                    );
                  })}
            </NewsContainer>
            {visible < news.flat(Infinity).length && (
              <SubmitButton onClick={loadMore} style={{marginBottom:"20px"}}>Load More</SubmitButton>
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

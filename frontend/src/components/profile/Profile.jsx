import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";

import { PageContainer, Background } from "../home/Home.styles";

const Profile = () => {
  return (
    <>
      <Background />
      <PageContainer>
        <Switch>
          <Route exact path="/profile" component={SignIn} />
          <Route path="/profile/signin" component={SignIn} />
          <Route path="/profile/signup" component={SignUp} />
        </Switch>
      </PageContainer>
    </>
  );
};

export default Profile;

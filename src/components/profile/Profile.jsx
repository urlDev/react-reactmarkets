import React, { useContext } from "react";
import { FinanceContext } from "../../Context";

import { PageContainer, Background } from "../home/Home.styles";
import { Title } from "../stocks/Stocks.styles";
import { Input } from "../search/Search.styles";
import { Label, SubmitButton } from "./Profile.styles";

const Profile = () => {
  const { handleChange, handleClick } = useContext(FinanceContext);
  return (
    <>
      <Background />
      <PageContainer>
        <Title>Sign In</Title>
        <form onSubmit={handleClick} style={{ marginTop: "40px" }}>
          <Label htmlFor="email">Email</Label>
          <Input
            style={{ width: "100%" }}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="on"
          />
          <div style={{ marginTop: "30px" }}>
            <Label htmlFor="password">Password</Label>
            <Input
              style={{ width: "100%" }}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <SubmitButton type="submit"> Sign In </SubmitButton>
        </form>

        <Title style={{ marginTop: "80px" }}>Sign Up</Title>
        <form onSubmit={handleClick} style={{ marginTop: "40px" }}>
          <Label htmlFor="name">Name</Label>
          <Input
            style={{ width: "100%" }}
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            autoComplete="on"
          />
          <div style={{ marginTop: "30px" }}>
            <Label htmlFor="email">Email</Label>
            <Input
              style={{ width: "100%" }}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              autoComplete="on"
            />
          </div>

          <div style={{ marginTop: "30px" }}>
            <Label htmlFor="password">Password</Label>
            <Input
              style={{ width: "100%" }}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <SubmitButton type="submit"> Sign Up </SubmitButton>
        </form>
      </PageContainer>
    </>
  );
};

export default Profile;

import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FinanceContext } from "../../Context";

import { PageContainer, Background } from "../home/Home.styles";
import { Title } from "../stocks/Stocks.styles";
import { Input } from "../search/Search.styles";
import { Label, SubmitButton } from "./Profile.styles";

const Profile = () => {
  let history = useHistory();
  const [input, setInput] = useState({});

  const handleChange = (event) =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    console.log(input);
    history.push("/");
  };

  return (
    <>
      <Background />
      <PageContainer>
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
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
        <form style={{ marginTop: "20px" }}>
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

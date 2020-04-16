import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FinanceContext } from "../../Context";

import { Title } from "../stocks/Stocks.styles";
import { Input } from "../search/Search.styles";
import { Label, SubmitButton, AccountLink } from "../profile/Profile.styles";

const SignUp = () => {
  let history = useHistory();
  const [input, setInput] = useState({});
  const { loadUser } = useContext(FinanceContext);

  const handleChange = (event) =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/profile/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: input.email,
        password: input.password,
        name: input.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          // history.push("/");
        }
      });
  };

  return (
    <>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
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
          <Label htmlFor="signUp-email">Email</Label>
          <Input
            style={{ width: "100%" }}
            id="signUp-email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Label htmlFor="signUp-password">Password</Label>
          <Input
            style={{ width: "100%" }}
            id="signUp-password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <SubmitButton type="submit"> Sign Up </SubmitButton>
      </form>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <AccountLink to="/profile/signin">Already have an account?</AccountLink>
      </div>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase/firebase.utils";

import { Title } from "../stocks/Stocks.styles";
import { Input } from "../search/Search.styles";
import { Label, SubmitButton, AccountLink } from "../profile/Profile.styles";

const SignIn = () => {
  let history = useHistory();
  const [input, setInput] = useState({});

  const handleChange = (event) =>
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput({});
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Label htmlFor="signIn-email">Email</Label>
        <Input
          style={{ width: "100%" }}
          id="signIn-email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          autoComplete="on"
        />
        <div style={{ marginTop: "30px" }}>
          <Label htmlFor="signIn-password">Password</Label>
          <Input
            style={{ width: "100%" }}
            id="signIn-password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            autoComplete="on"
          />
        </div>
        <SubmitButton type="submit"> Sign In </SubmitButton>
      </form>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <AccountLink to="/profile/signup">Don't have an account?</AccountLink>
      </div>
    </>
  );
};

export default SignIn;

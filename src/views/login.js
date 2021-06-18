import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "../components/form";
import Button from "../components/button";
import InputRow from "../components/inputRow";

import { login as loginAction } from "../actions/actions";
import { error } from "../actions/actions";

import { login } from "../services/publicService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  async function handleLogIn() {
    const user = { email, password };
    try {
      const { data } = await login(user);
      dispatch(loginAction(data.id, data.accessToken));
      history.push("/profile");
    } catch (err) {
      dispatch(error(err));
    }
  }

  return (
    <Form title="Login" className={"form-wrapper"}>
      <InputRow
        className={"form-row"}
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputRow
        className={"form-row"}
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogIn}>Login</Button>
      <Button
        onClick={() => {
          history.push("/register");
        }}
      >
        Register
      </Button>
    </Form>
  );
}

export default Login;

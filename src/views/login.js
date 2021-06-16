import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Form from "../components/form";
import Button from "../components/button";
import InputRow from "../components/input";
import { login } from "../actions/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  async function handleLogIn() {
    const user = { email, password };

    try {
      const { data } = await axios.post("http://localhost:4000/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(login(data.accessToken, data.id));
      history.push("/dashboard");
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <Form title="Login">
      <InputRow
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputRow
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "../components/form";
import Button from "../components/button";
import InputRow from "../components/inputRow";

import { login } from "../actions/actions";
import { error as errorAction } from "../actions/actions";

import { register } from "../services/publicService";

function Register() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [role, setRole] = useState("admin");

  const dispatch = useDispatch();
  const history = useHistory();

  async function handleRegister() {
    if (password !== secondPassword) {
      setError("Both passwords must be same");
      return;
    }

    try {
      const user = { name, email, password, role };
      const { data } = await register(user);
      dispatch(login(data.password));
      history.push("/dashboard");
    } catch (err) {
      dispatch(errorAction(err));
    }
  }

  return (
    <Form title="Register">
      <div className="err">{error}</div>
      <InputRow
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <InputRow
        type="password"
        label="Confirm Password"
        value={secondPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <Button onClick={handleRegister}>Submit</Button>
    </Form>
  );
}

export default Register;

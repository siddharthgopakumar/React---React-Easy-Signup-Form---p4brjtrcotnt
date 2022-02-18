import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  // console.log(signUpFormValidation({}));

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <label htmlFor="consent">Consent</label>
      <input type="checkbox" id="consent"></input>
      <button type="submit">Signup</button>
    </form>
  );
};

export default App;

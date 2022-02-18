import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [data, setData] = useState({});
  const [dispE, setDisp] = useState({
    name: "none",
    email: "none",
    password: "none",
  });
  const [error, setErrors] = useState({});
  // const [error, setError] = useState(signUpFormValidation(data));
  const [check, setCheck] = useState(false);

  // console.log("data",data);

  function submitHandler(e) {
    e.preventDefault();
    let errors = signUpFormValidation(data);
    const obj = { ...dispE };   
    if (errors["name"]) {     
      obj["name"] = "block";
    }
    if (errors["email"]) {
      obj["email"] = "block";     
    }
    if (errors["password"]) {
      obj["password"] = "block";     
    }
    setDisp(obj);
    setErrors(errors);
    console.log("display", dispE);
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={data["name"]}
        onChange={(e) => {
          const list = { ...data, name: e.target.value };
          setData(list);
        }}
      ></input>
      <span style={{ display: dispE["name"] }}>{error["name"]}</span>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={data["email"]}
        onChange={(e) => {
          const list = { ...data, email: e.target.value };
          setData(list);
        }}
      ></input>
      <span style={{ display: dispE["email"] }}>{error["email"]}</span>
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        value={data["password"]}
        onChange={(e) => {
          const list = { ...data, password: e.target.value };
          setData(list);
        }}
      ></input>
      <span style={{ display: dispE["password"] }}>{error["password"]}</span>
      <label htmlFor="consent">Consent</label>
      <input type="checkbox" id="consent"></input>
      <button type="submit" onClick={submitHandler}>
        Signup
      </button>
    </form>
  );
};

export default App;

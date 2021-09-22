import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (e) => {
    console.log(e.target.name.value);
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Home Loans</h1>
          <h3>Login</h3>
        </div>
        <div className="App-buttons">
          <form action="" onSubmit={onSubmit}>
            <input
              className="input-100"
              type="text"
              name="customerid"
              id=""
              placeholder="Customer ID"
            />

            <input
              className="input-100"
              type="password"
              name="Password"
              id=""
              placeholder="Password"
            />
            <div className="form-actions">
              <button type="submit" className="bttn">
                Login
              </button>
              <Link className="bttn" to="/register">
                Go to Register
              </Link>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Login;

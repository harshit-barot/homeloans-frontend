import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = (e) => {
    console.log(e.target.name.value);
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Home Loans</h1>
          <h3>Register</h3>
        </div>
        <div className="App-buttons">
          <form action="" onSubmit={onSubmit}>
            <input
              className="input-100"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="input-100"
              type="text"
              name="Email"
              placeholder="Email"
            />
            <input
              className="input-100"
              type="password"
              name="Password"
              placeholder="Password"
            />
            <div className="form-actions">
              <button type="submit" className="bttn">
                Register
              </button>
              <Link className="bttn" to="/login">
                Go To Login
              </Link>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Home = ({ props }) => {
  const [page, setPage] = useState("");

  // useEffect(() => {
  //   return <Redirect to={page} />;
  // }, [page]);

  // if (page === "/register") return <Redirect to={page} />;
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Home Loans</h1>
          <h3>Project</h3>
        </div>
        <div className="App-buttons">
          <Link
            className="bttn"
            onClick={() => setPage("/register")}
            to="/register"
          >
            Register
          </Link>
          <Link className="bttn" to="/login">
            Login
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;

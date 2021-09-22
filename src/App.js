import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

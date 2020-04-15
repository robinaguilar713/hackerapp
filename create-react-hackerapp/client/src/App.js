import React from "react";
import NavBar from "./components/Nav/index"
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"


function App() {

    return (
    <div  className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Router>
    </div>
    );
  }

export default App;

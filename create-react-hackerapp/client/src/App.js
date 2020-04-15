import React from "react";
import NavBar from "./components/Nav/index"
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import GamerProfile from "./components/GamerProfile/GamerProfile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Welcome from "./components/Welcome/Welcome";
import './App.css';


function App() {

    return (
    <div  className="App">
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={GamerProfile} />
            {/* <PrivateRoute path="/home" component={Home} /> */}
          </Switch>
        </Router>
    </div>
    // <Welcome />
    )
  }

export default App;

/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Mind";
import SignUp from "./components/pages/SignUp";
import Body from "./components/pages/Body";
import Mind from "./components/pages/Mind";
import Soul from "./components/pages/Soul";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/body" component={Body} />
          <Route path="/mind" component={Mind} />
          <Route path="/soul" component={Soul} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

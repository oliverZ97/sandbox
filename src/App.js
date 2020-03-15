import React, { Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {hot} from "react-hot-loader";
import "./App.css";
import "./styles/Text.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";

class App extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/recipes" component={Recipes}></Route>
          <Route path="/profile" component={Profile}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
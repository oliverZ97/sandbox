import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import "./styles/Text.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Slider from "./components/Slider";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header></Header>
        <Slider></Slider>
        <Main></Main>
      </div>
    );
  }
}

export default hot(module)(App);
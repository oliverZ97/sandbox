import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Recipes.css";
import "../styles/Text.css";
import Main from "../components/Main";
import Header from "../components/Header";

class Recipes extends Component{
  render(){
    return(
      <div className="Recipes">
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default hot(module)(Recipes);
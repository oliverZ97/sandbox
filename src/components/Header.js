import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Header.css";
import Menu from "./Menu";
import Pill_Profile from "./Pill_Profile";

class Header extends Component{
  render(){
    const items = ["Home", "Recipes", "Blog", "Stuff", "Bullet Journal"];
    return(
      <div className="Header">
        <h1> Sandbox! </h1>
        <Menu items={items}></Menu>
      </div>
    );
  }
}

export default hot(module)(Header);
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Main.css";
import Button_Primary from "./Button_Primary";

class Main extends Component{
  render(){
    return(
      <div className="Main">
        <p>Welcome to my personal Sandbox Website. On this page i will simply try out designs and components. Maybe some more content will be added in this project later.</p>
        <Button_Primary text="Welcome!"></Button_Primary>
      </div>
    );
  }
}

export default hot(module)(Main);
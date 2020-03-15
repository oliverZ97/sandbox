import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Main.css";
import Button_Primary from "./Button_Primary";
import Button_Secondary from "./Button_Secondary";
import Button_Warning from "./Button_Warning";
import Button_Attention from "./Button_Attention";

class Main extends Component{
  render(){
    return(
      <div className="Main">
        <p>Welcome on my personal Sandbox Website. On this page i will simply try out designs and components. Maybe some more content will be added in this project later.</p>
        <Button_Primary text="Primary"></Button_Primary>
        <Button_Secondary text="Secondary"></Button_Secondary>
        <Button_Warning text="Warning"></Button_Warning>
        <Button_Attention text="Attention"></Button_Attention>
      </div>
    );
  }
}

export default hot(module)(Main);
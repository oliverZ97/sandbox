import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Slider.css";

class Slider extends Component{
  render(){
    return(
      <div className="Slider">
          <img src={"https://images.unsplash.com/photo-1501438400798-b40ff50396c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} className="slider-img"></img>
      </div>
    );
  }
}

export default hot(module)(Slider);
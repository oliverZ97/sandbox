import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Slider.css";

class Slider extends Component{
  render(){
    return(
      <div className="Slider">
          <img src={"https://picsum.photos/2000/200"} className="slider-img"></img>
      </div>
    );
  }
}

export default hot(module)(Slider);
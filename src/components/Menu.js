import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Menu.css";

class Menu extends Component{
  render(){
    return(
      <div className="Menu">
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
      </div>
    );
  }
}

export default hot(module)(Menu);
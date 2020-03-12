import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Button_Primary.css";

class Button_Primary extends Component {
    render() {
        return ( 
        <div>
            <button className = "Button_Primary" > { this.props.text } </button> 
        </div>
        );
    }
}

export default hot(module)(Button_Primary);
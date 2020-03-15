import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Button_Attention.css";

class Button_Attention extends Component {
    render() {
        return ( 
        <div>
            <button className = "Button_Attention" > { this.props.text } </button> 
        </div>
        );
    }
}

export default hot(module)(Button_Attention);
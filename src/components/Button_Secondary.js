import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Button_Secondary.css";

class Button_Secondary extends Component {
    render() {
        return ( 
        <div>
            <button className = "Button_Secondary" > { this.props.text } </button> 
        </div>
        );
    }
}

export default hot(module)(Button_Secondary);
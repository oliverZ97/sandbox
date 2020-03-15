import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Button_Warning.css";

class Button_Warning extends Component {
    render() {
        return ( 
        <div>
            <button className = "Button_Warning" > { this.props.text } </button> 
        </div>
        );
    }
}

export default hot(module)(Button_Warning);
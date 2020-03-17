import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Dataform.css";

class Dataform extends Component {
    render() {
        return (
            <div className="Dataform">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Username"></input>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Email"></input>
                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" placeholder="Birthdate"></input>
            </div>
        );
    }
}

export default hot(module)(Dataform);
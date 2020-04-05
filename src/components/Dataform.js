import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Dataform.css";
import Button_Primary from "./Button_Primary";

class Dataform extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            birthdate: ""
        }

    }

    sendData = (e) => {
        this.props.parentCallback(this.state);
    };

    setUsername = (e) => {
        this.setState = {
            username: e.target.value
        }
        this.sendData
    }

    setEmail = (e) => {
        this.setState = {
            email: e.target.value
        }
    }

    render() {
        return (
            <div className="Dataform">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Username" onChange={this.setUsername}></input>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Email" onChange={this.setEmail}></input>
                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" placeholder="Birthdate"></input>
                <Button_Primary text="Submit" onClick={this.sendData}></Button_Primary>
            </div>
        );
    }
}

export default hot(module)(Dataform);
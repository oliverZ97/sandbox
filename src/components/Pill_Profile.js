import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { TiUserOutline } from "react-icons/ti";
import "../styles/Pill_Profile.css";

class Pill_Profile extends Component {
    render() {
        return ( 
        <div className="Profile_Card">
            <TiUserOutline className="Pill_Profile" size={32} color="#e0e0e0"/>
        </div>
        );
    }
}

export default hot(module)(Pill_Profile);
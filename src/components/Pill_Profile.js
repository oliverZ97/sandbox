import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { TiUserOutline } from "react-icons/ti";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "../styles/Pill_Profile.css";

class Pill_Profile extends Component {
    render() {
        return (
            <div>
                {/*<Link to="/profile" className="Profile_Card">
                    <TiUserOutline className="Pill_Profile" size={40} color="#e0e0e0" />
        </Link>*/}
            </div>
        );
    }
}

export default hot(module)(Pill_Profile);
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Profile.css";
import "../styles/Text.css";
import Header from "../components/Header";
import Dataform from "../components/Dataform";

class Profile extends Component{
  render(){
    return(
      <div className="Profile">
        <Header></Header>
        <input type="file" id="image "></input>
        <Dataform></Dataform>
      </div>
    );
  }
}

export default hot(module)(Profile);
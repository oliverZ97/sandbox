import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Resume.css";
import "../styles/Text.css";
import Main from "../components/Main";
import Header from "../components/Header";
import Resume_Main from "../components/Resume_Main";

class Resume extends Component{
  render(){
    return(
      <div className="Resume">
        <Header></Header>
        <Resume_Main></Resume_Main>
      </div>
    );
  }
}
export default hot(module)(Resume);
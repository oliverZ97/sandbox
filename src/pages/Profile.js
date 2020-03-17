import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Profile.css";
import "../styles/Text.css";
import Header from "../components/Header";
import Dataform from "../components/Dataform";

class Profile extends Component{
  render() {
    return(
      <div className="Profile">
        <Header></Header>
        <input type="file" id="image" onChange={this.previewFile()}></input>
        <img src="" height="200px"></img>
        <Dataform></Dataform>
      </div>
    );
  }

  previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}

export default hot(module)(Profile);
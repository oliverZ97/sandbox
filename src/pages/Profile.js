import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../styles/Profile.css";
import "../styles/Text.css";
import Header from "../components/Header";
import Dataform from "../components/Dataform";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
        this.callbackFunction = this.callbackFunction.bind(this)
    }

    callbackFunction = (profileData) => { 
        this.setState({ data: profileData }) 
        console.log(this.state.profileData.username);
        alert(this.state.profileData.username);
    };

    render() {

        const onSubmit = event => {
            localStorage.setItem('profileData', event.target.value)
        }

        return (
            <div className="Profile">
                <Header></Header>
                <form className="profile-form">
                    <div>
                        <Dataform parentCallback={this.callbackFunction}></Dataform>
                        <p>Hello {this.state.data}</p>
                    </div>
                    <div className="img-container">
                        <label className="img-label" htmlFor="image">
                            <img className="profile-pic" src="" height="300px"></img>
                        </label>
                        <input className="img-input" type="file" id="image" onChange={this.previewFile}></input>

                    </div>
                </form>
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
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../styles/Resume_Main.css";

class Main extends Component{
  render(){
    return(
      <div className="Main">
        <p>Hello my name is Oliver Ziemann. I'm 22 years old and finished my Bachelor of Science in media informatics. I studied at the Beuth University of Applied Science. 
          Now i am starting my Master's Degree and will stay at the Beuth University of Applied Science.

          My Hobbies are cooking, baking, meeting with friends and playing videogames. I also like to sketch in my freetime.
        </p>
        <p>Here you can download my Resume</p>
        <a className="Link" href="./media/Lebenslauf_Oliver_Ziemann032020.pdf" download></a>
      </div>
    );
  }
}

export default hot(module)(Main);
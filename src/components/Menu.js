import React from "react";
import { hot } from "react-hot-loader";
import "../styles/Menu.css";
import Pill_Profile from "./Pill_Profile";
import {Link} from "react-router-dom";

function Menu(props) {
  return (
    <div className="Menu">
      <ul>
        {setupMenuItems(props)}
      </ul>
      <Pill_Profile/>
    </div>
  );
}

function setupMenuItems(props) {
  const items = props.items.map((item) => {
    let link = "";
    if(item === "Home"){
      link = "/";
    } else {
      link = "/" + item.toLowerCase().replace(" ", "_");
    }
    return <li key={item}>
      <Link to={link}>{item}</Link>
    </li>
  })
  console.log(items)
  return items;
}




export default hot(module)(Menu);
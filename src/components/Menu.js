import React from "react";
import { hot } from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../styles/Menu.css";
import Pill_Profile from "./Pill_Profile";
import Recipes from "./Recipes";
import App from "../App";

function Menu(props) {
  return (
    <Router>
    <div className="Menu">
      <ul>
        {setupMenuItems(props)}
      </ul>
      <Pill_Profile/>
    </div>
    </Router>
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
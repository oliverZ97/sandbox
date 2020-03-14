import React from "react";
import { hot } from "react-hot-loader";
import "../styles/Menu.css";

function Menu(props) {
  return (
    <div className="Menu">
      <ul>
        {setupMenuItems(props)}
      </ul>
    </div>
  );
}

function setupMenuItems(props) {
  const items = props.items.map((item) => {
    return <li key={item}>{item}</li>
  })
  console.log(items)
  return items;
}




export default hot(module)(Menu);
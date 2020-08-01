import "./Content.css";
import React from "react";
import Item from "./ContentItem.js";
export default function Content(props) {
  return (
    <div className="content">
      <Item Id="1" Loc="苗栗縣生態保育教育中心(動物收容所)"/>
      <Item Id="2"/>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      
    </div>
  );
}

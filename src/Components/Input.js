import React from "react";
import "./Header.css";

//console報錯 被要求要改<div className
export default function Input() {
  return (
    <div>
    
        <input type="text" placeholder="Input Search" class="input"/>
        <button onClick={this.changePercent}> Search </button>
        </div>
  );
}

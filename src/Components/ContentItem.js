import "./Content.css";
import React from "react";
export default function Item(props) {
  return (
    <div className="item">
      <div className="png">
        <img
          src="https://picsum.photos/300/300?image=236"
          alt=""
          class="circle-profile"
        />
      </div>
      <div className="desc txt-style">
        <h3>寵物編號:{props.Id}</h3>
        <h3>收容位置:{props.Loc}</h3>
        <h3>年齡:</h3>
        <h3>性別:</h3>
        <button class="button">點我看更多</button>
      </div>
    </div>
  );
}

import React from "react";
import "./Content.css";

export default function Content(props) {
  return (
    <div className="content">
      <div className="png">
        {/* <img
          src="https://picsum.photos/1440/370?image=238"
          alt=""
          class="circle-profile"
        /> */}
      </div>
      <div className="desc">
        <h3>寵物編號:{props.Id}</h3>
        <h3>收容位置:</h3>
        <h3>年齡:</h3>
        <h3>性別:</h3>
      </div>
    </div>
  );
}

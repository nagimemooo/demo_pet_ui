import React from "react";
import "./Banner.css";

//console報錯 被要求要改<div className
export default function Header() {
  return (
    <div className="banner">
       <div className="png" >
      <img
        src="https://picsum.photos/1440/370?image=238"
        alt=""
        class="circle-profile"
      />
      </div>
      <div className="banner-front txt-style">
        <h1>尋找流浪寵物...?</h1>
        <h3>還在一家一家跑收容所？</h3>
        <h3>想看看毛小孩有多可愛？</h3>
        <h3>更多療癒圖片都在這裡</h3>
      </div>
    </div>
  );
}

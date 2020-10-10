import React from 'react';
import './Banner.css';

//console報錯 被要求要改<div className
export default function Header() {
  return (
    <div className="banner">
      <div className="png">
        <img
          src="https://picsum.photos/1440/370?image=238"
          alt=""
          class="circle-profile"
        />
      </div>
      <div className="banner-front txt-style">
        <h1>想要養寵物...?</h1>
        <h3>還在一家一家跑收容所？</h3>
        <h3>想要線上看看收容所的毛小孩有哪些</h3>
        <h3>快來一睹牠們的療癒圖片吧~（ ↓↓↓快快搜尋）</h3>
      </div>
    </div>
  );
}

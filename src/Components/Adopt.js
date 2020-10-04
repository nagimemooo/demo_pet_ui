import React from 'react';
import './Adopt.css';

//console報錯 被要求要改<div className
export default function Adopt() {
  return (
    <div id="top">
      锚点1
      <div className="adopt">
        <div className="Item" />
        <h1 className="num">01</h1>
        <div className="icon"></div>
        <div className="txt">照顧</div>
        <div className="txt_desc">當毛小孩隨地大小便</div>
      </div>
    </div>
  );
}

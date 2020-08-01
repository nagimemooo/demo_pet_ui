import "./Content.css";
import React, { useState } from "react";
export default function Item(props) {
  const [icon, setIcon] = useState("fa fa-heart-o fa-2x");
  const [isClick, setClick] = useState(false);
  const getValue = value => {
    console.log(value);
  };
  function fullHeart(e) {
    setIcon("fa fa-heart fa-2x");
  }
  function emptyHeart(e) {
    if (!isClick) {
      setIcon("fa fa-heart-o fa-2x");
    }
  }
  function clickHeart(e) {
    setClick(!isClick);
    if (isClick) {
      setIcon("fa fa-heart fa-2x");
    } else {
      setIcon("fa fa-heart-o fa-2x");
    }
  }
  return (
    <div className="item">
      <div className="png">
        <img
          src="https://picsum.photos/300/300?image=236"
          alt=""
          class="circle-profile"
        />
        <div className="realPng">
          <img src={props.Img} alt="" class="circle-profile" />
        </div>
        <i
          className={icon}
          id="heartO"
          onMouseOver={fullHeart}
          onMouseOut={emptyHeart}
          onClick={clickHeart}
        />
      </div>
      <div className="desc txt-style">
        <h3>寵物編號:{props.Id}</h3>
        <h3>收容位置:{props.Loc}</h3>
        <h3>年齡:{props.Age === "" ? "未提供" : props.Age}</h3>
        <h3>性別:{props.Sex}</h3>
        <button class="button" onClick={getValue(props.Id)}>
          點我看更多
        </button>
      </div>
    </div>
  );
}

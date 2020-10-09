import './Content.css';
import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { cardStyle } from './CSS/ContentItem';

export default function Item(props) {
  const [icon, setIcon] = useState('fa fa-heart-o fa-2x');
  const [isClick, setClick] = useState(false);
  const [show, setShow] = useState(true);
  let heartCls = 'fa fa-heart fa-2x';
  let heartOCls = 'fa fa-heart-o fa-2x';
  const getValue = (value) => {
    //console.log(value);
  };
  function fullHeart(e) {
    setIcon(heartCls);
  }
  function emptyHeart(e) {
    if (!isClick) {
      setIcon(heartOCls);
    }
  }
  function clickHeart(e) {
    setClick(!isClick);
  }
  const Flip = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div className="item" css={cardStyle.item}>
      <div css={show ? cardStyle.front : cardStyle.frontClick}>
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
          <h3>年齡:{props.Age === '' ? '未提供' : props.Age}</h3>
          <h3>性別:{props.Sex}</h3>
          <button class="button" onClick={Flip}>
            點我看更多
          </button>
        </div>
      </div>
      <div css={show ? cardStyle.back : cardStyle.backClick}>
        <div className="desc txt-style">
          <h3>寵物編號:{props.Id}</h3>
          <h3>收容位置:{props.Loc}</h3>
          <h3>年齡:{props.Age === '' ? '未提供' : props.Age}</h3>
          <h3>性別:{props.Sex}</h3>
          <h3>顏色:{props.animal.animal_colour}</h3>

          <h3>動物體型:{props.animal.animal_bodytype}</h3>
          <h3>是否絕育:{props.animal.animal_sterilization}</h3>
          <h3>是否施打狂犬病疫苗:{props.animal.animal_bacterin}</h3>
          <h3>動物尋獲地:{props.animal.animal_foundplace}</h3>
          <h3>資料備註:{props.animal.animal_remark}</h3>
          <h3>其他說明:{props.animal.animal_caption}</h3>
          <button class="button" onClick={Flip}>
            點我看更多
          </button>
        </div>
      </div>
    </div>
  );
}

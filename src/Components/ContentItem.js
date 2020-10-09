import './Content.css';
import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { ContentStyle } from './CSS/Content';

function MyModel(props) {
  return (
    <div css={ContentStyle.modalBack}>
      <div css={ContentStyle.modal}>
        <button css={ContentStyle.closeModel}>X</button>
        <div className="">
          <div>
            <div className="png">
              <img
                src="https://picsum.photos/300/300?image=236"
                alt=""
                class="circle-profile"
              />
              <div className="realPng">
                <img src={props.Img} alt="" class="circle-profile" />
              </div>
            </div>
            <div className="desc txt-style">
              <h3>寵物編號:{props.Id}</h3>
              <h3>收容位置:{props.Loc}</h3>
              <h3>年齡:{props.Age === '' ? '未提供' : props.Age}</h3>
              <h3>性別:{props.Sex}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Item(props) {
  const [icon, setIcon] = useState('fa fa-heart-o fa-2x');
  const [isClick, setClick] = useState(false);
  const [show, setShow] = useState(false);

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

  return (
    <div className="item">
      <div>
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
          <button class="button" onClick={() => setShow(true)}>
            點我看更多
          </button>
        </div>
      </div>
      <div>
        {/* <MyModel {...props} /> */}
        {show ? <MyModel {...props} /> : ''}

        {/* <div className="desc txt-style">
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
        </div>*/}
      </div>
    </div>
  );
}

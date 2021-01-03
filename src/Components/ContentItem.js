import './Content.css';
import React, { useState, useEffect } from 'react';
/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { ContentStyle } from './CSS/Content';

export default function Item(props) {
  const [icon, setIcon] = useState('fa fa-heart-o fa-2x');
  const [isClick, setClick] = useState(false);
  const [show, setShow] = useState(false);
  const [showStyle, setShowStyle] = useState(false);

  let heartCls = 'fa fa-heart fa-2x';
  let heartOCls = 'fa fa-heart-o fa-2x';
  const getValue = (value) => {
    console.log(value);
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
    console.log('hhh');
    setClick(!isClick);
  }

  function clickShow(e) {
    setShow(true);
    console.log('clickShow');
  }
  function clickHidden(e) {
    setShow(false);
    console.log('clickHidden');
  }
  function MyModel(props) {
    return (
      <div css={[ContentStyle.modalBack]}>
        <div css={ContentStyle.modal} onClick={clickHidden}>
          <div css={ContentStyle.closeModel}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
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
            <img src={props.animal.album_file} alt="" class="circle-profile" />
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
          <h3>寵物編號:{props.animal.animal_id}</h3>
          <h3>收容位置:{props.animal.animal_place}</h3>
          <h3>年齡:{props.animal.animal_age === '' ? '未提供' : props.Age}</h3>
          <h3>性別:{props.animal.animal_sex}</h3>
          <button class="button" onClick={clickShow}>
            點我看更多
          </button>
        </div>
      </div>
      <div>
        {/* <MyModel {...props} /> */}
        {show ? <MyModel {...props} /> : ''}
      </div>
    </div>
  );
}

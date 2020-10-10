import React, { useState } from 'react';

/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //Tip 使用css屬性要有效果一定要加
import { adoptStyle } from './CSS/Adopt';
import { cardStyle } from './CSS/rotateCard';

//Tip:重複的function AdoptItim 要往外抽 不能會變成四個item一起動效果喔
export default function AdoptItim(props) {
  const Flip = () => {
    setShow(!show);
    console.log(show);
  };
  const [show, setShow] = useState(true);
  return (
    <div css={[adoptStyle.item, cardStyle.item]}>
      <div css={show ? cardStyle.front : cardStyle.frontClick}>
        <h1 css={adoptStyle.num}>{props.num}</h1>
        <div css={adoptStyle.icon}>
          <i class={props.icon} />
        </div>
        <div css={adoptStyle.txt}>{props.txt}</div>
        <div css={adoptStyle.txt_desc}>{props.children}</div>
        <button css={adoptStyle.button_more} onClick={Flip}>
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
      <div css={show ? cardStyle.back : cardStyle.backClick}>
        <div css={adoptStyle.autoBox}>
          <img
            css={adoptStyle.imgCenter}
            src={'https://picsum.photos/200/200?image=42'}
            alt={'name'}
          />
          <button css={adoptStyle.button_more} onClick={Flip}>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

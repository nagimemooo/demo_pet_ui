import React from 'react';

/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { adoptStyle } from './CSS/Adopt';
import { cardStyle } from './CSS/rotateCard';

function AdoptItim(props) {
  return (
    <div css={adoptStyle.item}>
      <h1 css={adoptStyle.num}>{props.num}</h1>
      <div css={adoptStyle.icon}>
        <i class={props.icon} />
      </div>
      <div css={adoptStyle.txt}>{props.txt}</div>
      <div css={adoptStyle.txt_desc}>{props.children}</div>
    </div>
  );
}

//console報錯 被要求要改<div className
export default function Adopt() {
  return (
    <div id="top">
      {/* 锚点1 <a href="#top"></a>*/}
      <div css={adoptStyle.container}>
        <AdoptItim num="01" icon="fa fa-medkit" txt="照顧">
          當毛小孩隨地大小便，，生病時，你都必須照顧他的一切
        </AdoptItim>
        <AdoptItim num="02" icon="fa fa-home" txt="責任">
          當你給了牠一個家，一個身份的開始，你就必須肩負起管教的責任．
        </AdoptItim>
        <AdoptItim num="03" icon="fa fa-heartbeat" txt="陪伴">
          光看著就療癒的毛小孩，陪伴著你，你也必須花時間陪伴著牠，不離不棄．
        </AdoptItim>
        <AdoptItim num="04" icon="fa fa-money" txt="支出">
          你知道養一個毛小孩可能會付出很多費用嗎？
        </AdoptItim>
      </div>
    </div>
  );
}

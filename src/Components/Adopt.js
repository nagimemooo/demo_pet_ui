import React, { useState } from 'react';

/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { adoptStyle } from './CSS/Adopt';

import { Anchor } from './Common/constant';
import AdoptItim from './AdoptItem.js';
//console報錯 被要求要改<div className
export default function Adopt() {
  const Flip = () => {
    setShow(!show);
    console.log(show);
  };

  const [show, setShow] = useState(true);
  return (
    <div id={Anchor.Adopt}>
      {/* Tip 锚点<a href="#id"></a>*/}
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

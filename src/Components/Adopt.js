import React from 'react';

/** @jsx jsx */ import { css, jsx } from '@emotion/core'; //不知道為什麼一定要加前述
import { adoptStyle } from './CSS/Adopt';
import { cardStyle } from './CSS/rotateCard';
//console報錯 被要求要改<div className
export default function Adopt() {
  return (
    <div id="top">
      {/* 锚点1 <a href="#top"></a>*/}
      <div css={adoptStyle.container}>
        <div css={adoptStyle.item}>
          <h1 css={adoptStyle.num}>01</h1>
          <div css={adoptStyle.icon}>
            <i class="fa fa-medkit" />
          </div>
          <div css={adoptStyle.txt}>照顧</div>
          <div css={adoptStyle.txt_desc}>
            當毛小孩隨地大小便，，生病時，你都必須照顧他的一切
          </div>
        </div>

        <div css={adoptStyle.item}>
          <h1 css={adoptStyle.num}>02</h1>
          <div css={adoptStyle.icon}>
            <i class="fa fa-home" />
          </div>
          <div css={adoptStyle.txt}>責任</div>
          <div css={adoptStyle.txt_desc}>
            當你給了牠一個家，一個身份的開始，你就必須肩負起管教的責任．
          </div>
        </div>
        <div css={adoptStyle.item}>
          <h1 css={adoptStyle.num}>03</h1>
          <div css={adoptStyle.icon}>
            <i class="fa fa-heartbeat" />
          </div>
          <div css={adoptStyle.txt}>陪伴</div>
          <div css={adoptStyle.txt_desc}>
            光看著就療癒的毛小孩，陪伴著你，你也必須花時間陪伴著牠，不離不棄．
          </div>
        </div>
        <div css={adoptStyle.item}>
          <h1 css={adoptStyle.num}>04</h1>
          <div css={adoptStyle.icon}>
            <i class="fa fa-money" />
          </div>
          <div css={adoptStyle.txt}>支出</div>
          <div css={adoptStyle.txt_desc}>
            你知道養一個毛小孩可能會付出費用嗎？
          </div>
        </div>
      </div>
    </div>
  );
}

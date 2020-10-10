/** @jsx jsx */ import { css, jsx } from '@emotion/core';
export const fixPos = css`
  width: 230px;
  height: 430px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const effect3D = css`
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
`;

export const adoptStyle = {
  container: css`
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;

    background: #52a8c4;
  `,
  item: css`
    width: 250px;
    height: 300px;
    // border: 1px red solid;
    position: relative;
  `,
  num: css`
    font-size: 100px;
    position: relative;
    text-align: center; //文字置中
    top: 50px; //離上方距離多遠 代表往下50
    margin: 0 auto;
    color: #ececec;
  `,
  icon: css`
    font-size: 60px;
    color: #ed4c5c;
    text-align: center;
  `,
  txt: css`
    font-size: 18px;
    text-align: center;
  `,
  txt_desc: css`
    font-size: 12px;
    text-align: center;
    padding: 10px;
  `,
  button_more: css`
    margin: 0 auto;
    background-color: white;
    color: #52a8c4;
    display: block;
    // 要加這個才能置中 Tip
    border-radius: 5px;
    border: 3px solid #666;
  `,
  imgCenter: css`
    display: block;
    padding: 5px;
  `,
  autoBox: css`
    width: 250px;
    height: 300px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
};

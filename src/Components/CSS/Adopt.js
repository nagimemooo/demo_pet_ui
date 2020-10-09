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
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    background: #52a8c4;
  `,
  item: css`
    width: 250px;
    height: 250px;
    // border: 1px red solid;
    position: relative;
  `,
  num: css`
    font-size: 100px;
    position: relative;
    left: 70px;
    top: 50px;
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
};

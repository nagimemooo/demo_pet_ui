/** @jsx jsx */ import { css, jsx } from '@emotion/core';

export const ContentStyle = {
  hidden: css`
    display: none;
  `,
  modalBack: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 3;
  `,
  modal: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80%; /*Tip Could be more or less, depending on screen size */
    height: 100％;
    margin: 15% auto; /*Tip 15% from the top and centered */
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    z-index: 3; //蓋掉其他也是浮動的物品
  `,
  closeModel: css`
    border-radius: 5px;
    border: 3px solid #666;
    padding: 5px;
    margin: 0 auto;
    display: block;
    position: absolute;
    right: 0px;
    top: 0px;
    color: red;
    z-index: 5;
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

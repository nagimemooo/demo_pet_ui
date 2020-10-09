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

export const cardStyle = {
  item: css`
    position: relative;

    width: 230px;
    height: 430px;
  `,
  front: css`
    ${fixPos};
    ${effect3D};
  `,
  back: css`
    ${fixPos};
    ${effect3D};
    transform: rotateY(-180deg);
  `,
  backClick: css`
    ${fixPos};
    ${effect3D};
    transform: rotateY(0deg);
  `,
  frontClick: css`
    ${fixPos};
    ${effect3D};
    transform: rotateY(180deg);
  `,
  button: css`
    position: absolute;
    bottom: 0;
    left: 0;
  `,
};

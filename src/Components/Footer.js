import React from 'react';

/** @jsx jsx */ import { css, jsx } from '@emotion/core';

import { layoutStyle } from './CSS/layout';
export default function Fooder() {
  return (
    <div css={layoutStyle.footer}>
      <h3>Copyright＠nagimemooo</h3>
    </div>
  );
}

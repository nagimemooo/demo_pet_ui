import React from 'react';
import './Header.css';
import { Anchor } from './Common/constant';
//console報錯 被要求要改<div className
export default function Header() {
  return (
    <header>
      <div className="autoBox">
        <a href="/" className="brand">
          <div className="site-name txt-style">寵物資訊平台</div>
        </a>
        <nav className="nav-menu">
          <div className="nav-item">
            <a href={'#' + Anchor.About} className=" nav-link txt-style">
              <i class="fa fas fa-paw" style={{ color: 'black' }} />
              關於我們
            </a>
          </div>
          <a href={'#' + Anchor.Pet} className="nav-link txt-style">
            <i class="fa fas fa-paw" style={{ color: 'black' }} />
            我要找寵物
          </a>
          <a href={'#' + Anchor.Adopt} className="nav-link txt-style">
            <i class="fa fas fa-paw" style={{ color: 'black' }} />
            領養知識
          </a>
          <a href={'#' + Anchor.Contact} className="nav-link txt-style">
            <i class="fa fas fa-paw" style={{ color: 'black' }} />
            聯絡我們
          </a>
        </nav>
      </div>
    </header>
  );
}

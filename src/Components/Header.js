import React from "react";
import "./Header.css";

//console報錯 被要求要改<div className
export default function Header() {
  return (
    <header>
      <div className="auto-container">
        <a href="/" className="brand">
          <div className="site-name txt-style">寵物資訊平台</div>
        </a>
        <nav className="nav-menu">
          <a href="/" className=" nav-link txt-style">
            關於我們
          </a>
          <a href="/about" className="nav-link txt-style">
            我要找寵物
          </a>
          <a href="/contact" className="nav-link txt-style">
            領養知識
          </a>
          <a href="/contact" className="nav-link txt-style">
            聯絡我們
          </a>
        </nav>
      </div>
    </header>
  );
}
import React from 'react';
import './Header.css';
import { Anchor } from './Common/constant';

function NavItem(props) {
  const Arch = '#' + props.ArchorId;
  return (
    <div className="nav-item">
      <a href={Arch} className=" nav-link txt-style">
        <i
          class="fa fas fa-paw"
          style={{ color: 'black', paddingRight: '5px' }}
        />
        {props.children}
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <div className="autoBox">
        <a href="/" className="brand">
          <div className="site-name txt-style">
            尋找浪浪資訊網 <br />
            Find Your Loving Pets
          </div>
        </a>
        <nav className="nav-menu">
          <NavItem ArchorId={Anchor.About}>關於我們</NavItem>
          <NavItem ArchorId={Anchor.Pet}>我要找寵物</NavItem>
          <NavItem ArchorId={Anchor.Adopt}>領養知識</NavItem>
          <NavItem ArchorId={Anchor.Contact}>聯絡我們</NavItem>
        </nav>
      </div>
    </header>
  );
}

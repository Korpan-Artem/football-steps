import React from "react";
import { Link } from "react-router-dom"; 
import "./styles.scss"

const Header = () => {
  return (
    <header className="main-header">
        <div className="main-header-box">
          <div className="left-side">
            <div className="logo">logo</div>
            <div className="main-menu">
              <ul>
                <li><Link to="#">Boots</Link></li>
                <li><Link to="#">Forms</Link></li>
                <li><Link to="#">Accessories</Link></li>
                <li><Link to="#">Sale</Link></li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <input className="search-header search" type="text" placeholder="Search" />
            <div className="info-header">
              <div className="user-account">Account</div>
              <div className="basket">Basket (2)</div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;

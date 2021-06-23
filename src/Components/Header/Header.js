
import "./style.css";
import React from "react";

function Header() {
  return (
    <div className="Header">
      
      <div className="header-logo-container">
        <i class="fab fa-instagram"></i>
        <div className="line"></div>
        <p>Instagram</p>
      </div>

      <div className="header-search-container">
        <input type="text" placeholder="search" />
      </div>

      <div className="header-icon-container">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i> 
      </div>

    </div>
  )
}

export default Header;
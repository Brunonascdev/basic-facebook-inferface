import React from "react";

import "./Header.css";

import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="img" />
      <span className="blank-space"></span>
      <div className="align-profile">
        <span className="profile">Meu perfil</span>
        <i className="material-icons" style={{ color: "#fff" }}>
          account_circle
        </i>
      </div>
    </nav>
  );
};

export default Header;

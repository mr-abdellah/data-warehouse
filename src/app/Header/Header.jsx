/* eslint-disable */

import logo from "../../assets/Logo.svg";
import React, { useState } from "react";
import "./header.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className={open ? "hamburger toggle" : "hamburger"}
        onClick={handleClick}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li className="fade">
          <a onClick={() => setOpen(false)}>About</a>
        </li>
        <li className="fade">
          <a onClick={() => setOpen(false)}>help</a>
        </li>
        <li className="fade">
          <a onClick={() => setOpen(false)}>Features</a>
        </li>
        <li className="fade">
          <a onClick={() => setOpen(false)}>Signup</a>
        </li>
        <li className="fade demo">
          <a onClick={() => setOpen(false)}>
            Request Demo <AiOutlineArrowRight />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

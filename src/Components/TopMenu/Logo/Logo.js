import React from "react";
import logo from "./logo.png";
import s from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={s.logo}>
      <a href="index.js">
        <img src={logo} />
      </a>
      <a href="index.js" className={s.logo_text}>
        Inventory
      </a>
    </div>
  );
}

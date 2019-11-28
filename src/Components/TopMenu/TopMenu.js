import React from "react";
import { Clock } from "./Clock";
import { Logo } from "./Logo";
import { Search } from "./Search";
import s from "./TopMenu.module.css";

export default class TopMenu extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.topMenu}>
          <Logo />
          <Search />
          <Clock />
        </div>
      </div>
    );
  }
}

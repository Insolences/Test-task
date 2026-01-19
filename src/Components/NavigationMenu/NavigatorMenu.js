import React from "react";
import Avatar from "./Avatar/Avatar";
import { Link } from "react-router-dom";
import s from "./NavigatorMenu.module.css";

export default class NavigationMenu extends React.Component {
  render() {
    return (
      <div className={s.navigation_menu}>
        <div>
          <Avatar />
        </div>
        <div className={s.navigation}>
          <ul>
            <li className={s.navigation_item}>
              <Link to="/">Обзор</Link>
            </li>
            <li className={s.navigation_item}>
              <Link to="/orders">Realtime и PvP</Link>
            </li>
            <li className={s.navigation_item}>
              <Link to="/products">Backend и данные</Link>
            </li>
            <li className={s.navigation_item}>
              <a href="#milestones">План запуска</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

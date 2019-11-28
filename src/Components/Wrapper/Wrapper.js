import React from "react";
import s from "./Wrapper.module.css";
import { NavigationMenu } from "../NavigationMenu";
import { Orders } from "../Orders";

export function Wrapper() {
  return (
    <div className={s.wrapper}>
      <NavigationMenu />
      <h3>Приходы</h3>
      <Orders />
    </div>
  );
}

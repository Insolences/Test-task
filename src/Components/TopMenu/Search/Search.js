import React from "react";
import s from "./Search.module.css";
export default function Search() {
  return (
    <form className={s.search_form}>
      <input type="text" className={s.search} placeholder="Поиск..." />
    </form>
  );
}

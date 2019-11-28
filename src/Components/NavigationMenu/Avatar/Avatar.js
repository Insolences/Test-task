import React from "react";
import avatar from "./avatar.jpg";
import s from "./Avatar.module.css";

export default function Avatar() {
  return (
    <div>
      <img src={avatar} className={s.avatar} />
    </div>
  );
}

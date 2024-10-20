import React from "react";
import MenuItems from "./MenuItems";

export default function MenuList({ menus = [] }) {
  return (
    <ul>
      {menus &&
        menus.length > 0 &&
        menus.map((item, i) => {
          return <MenuItems key={i} item={item} />;
        })}
    </ul>
  );
}

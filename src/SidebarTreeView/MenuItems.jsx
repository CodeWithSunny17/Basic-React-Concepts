import React from "react";
import MenuList from "./MenuList";

export default function MenuItems({ item }) {
  return (
    <li>
      {item.title}
      {item && item.children && item.children.length ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
}

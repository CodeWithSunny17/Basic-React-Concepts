import React from "react";
import MenuItems from "./MenuItems";

export default function MenuList({ menus = [] }) {
  return (
    <ul className="min-w-48 bg-slate-600 text-white">
      {menus &&
        menus.length > 0 &&
        menus.map((item, i) => {
          return <MenuItems key={i} item={item} />;
        })}
    </ul>
  );
}

import React from "react";
import MenuItems from "./MenuItems";

export default function MenuList({ menus = [] }) {
  return (
    <ul className="min-w-40 bg-slate-700 text-white rounded-md p-2 shadow-lg">
      {menus &&
        menus.length > 0 &&
        menus.map((item, i) => {
          return <MenuItems key={i} item={item} />;
        })}
    </ul>
  );
}

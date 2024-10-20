import React from "react";
import MenuList from "./MenuList";
import data from "./data.json";

export default function SidebarTreeView() {
  return (
    <div>
      <MenuList menus={data} />
    </div>
  );
}

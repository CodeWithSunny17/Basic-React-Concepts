import React from "react";
import MenuList from "./MenuList";
import data from "./data.json";

export default function SidebarTreeView() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <h1>Tree View</h1>
      <br />
      <MenuList menus={data} />
    </div>
  );
}

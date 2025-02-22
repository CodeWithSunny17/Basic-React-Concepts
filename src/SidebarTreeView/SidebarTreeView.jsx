import React from "react";
import MenuList from "./MenuList";
import data from "./data.json";

export default function SidebarTreeView() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Tree View</h1>
      <MenuList menus={data} />
    </div>
  );
}

import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function MenuItems({ item }) {
  const [showItems, setShowItems] = useState({});

  const handleToggleItems = (id) => {
    setShowItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <li className="p-0 border-b border-gray-600">
      <div
        className="flex items-center justify-between cursor-pointer hover:bg-slate-600 p-1 rounded-md"
        onClick={() => handleToggleItems(item.id)}
      >
        <span>{item.title}</span>
        {item.children &&
          item.children.length > 0 &&
          (showItems[item.id] ? <FaMinus size={14} /> : <FaPlus size={14} />)}
      </div>
      {item.children && item.children.length > 0 && showItems[item.id] && (
        <div className="ml-4 mt-0">
          <MenuList menus={item.children} />
        </div>
      )}
    </li>
  );
}

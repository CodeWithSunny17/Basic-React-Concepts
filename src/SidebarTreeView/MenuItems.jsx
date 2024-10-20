import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function MenuItems({ item }) {
  const [showItems, setShowItems] = useState({});
  const handleToggleItems = (id) => {
    setShowItems((prev) => ({
      ...prev,
      [id]: !prev?.id,
    }));
  };
  console.log(showItems);
  return (
    <li>
      <div className="flex flex-row items-center gap-2">
        {item.title}
        {item && item.children && item.children.length ? (
          showItems[item.id] === true ? (
            <FaMinus onClick={() => handleToggleItems(item.id)} size={12} />
          ) : (
            <FaPlus onClick={() => handleToggleItems(item.id)} size={12} />
          )
        ) : null}
      </div>
      {item && item.children && item.children.length ? (
        showItems[item.id] === true ? (
          <MenuList menus={item.children} />
        ) : null
      ) : null}
    </li>
  );
}

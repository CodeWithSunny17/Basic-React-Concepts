import React, { useState } from "react";

const Accordian_single_select = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 1, title: "Section 1", content: "Content for section 1." },
    { id: 2, title: "Section 2", content: "Content for section 2." },
    { id: 3, title: "Section 3", content: "Content for section 3." },
  ];

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Accordion</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        {items.map((item) => (
          <div className="border-b" key={item.id}>
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => toggleItem(item.id)}
            >
              <h2 className="font-medium">{item.title}</h2>
            </div>
            {selectedItems.includes(item.id) && (
              <div className="p-4 bg-gray-50">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian_single_select;

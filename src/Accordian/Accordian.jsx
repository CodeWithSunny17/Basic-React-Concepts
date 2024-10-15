// src/Accordion.jsx
import React, { useState } from "react";

const Accordion = () => {
  // const [openIndex, setOpenIndex] = useState(null);
  const [selectedItems, setselectedItems] = useState([]);

  const items = [
    { id: 1, title: "Section 1", content: "Content for section 1." },
    { id: 2, title: "Section 2", content: "Content for section 2." },
    { id: 3, title: "Section 3", content: "Content for section 3." },
  ];

  const toggleItem = (id) => {
    // setOpenIndex(openIndex === id ? null : id);

    setselectedItems(
      selectedItems.includes(id)
        ? selectedItems.filter((index) => index !== id)
        : [...selectedItems, id]
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-center">Accordian</h1>
      <br />
      {items.map((item, index) => (
        <div className="border-b" key={item.id}>
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => toggleItem(item.id)}
          >
            <h2 className="font-medium">{item.title}</h2>
          </div>
          {selectedItems.includes(item.id) ? (
            <div className="p-4">{item.content}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

/////////////////////////////////

// src / Accordion.jsx;
// import React, { useState } from "react";

// const Accordion = () => {
//   // const [openIndex, setOpenIndex] = useState(null);
//   const [selectedItems, setselectedItems] = useState([]);

//   const items = [
//     { id: 1, title: "Section 1", content: "Content for section 1." },
//     { id: 2, title: "Section 2", content: "Content for section 2." },
//     { id: 3, title: "Section 3", content: "Content for section 3." },
//   ];

//   const toggleItem = (id) => {
//     // setOpenIndex(openIndex === index ? null : index);
//     if (selectedItems.includes(id)) {
//       setselectedItems(selectedItems.filter((item) => item !== id));
//     } else {
//       setselectedItems([...selectedItems, id]);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       {items.map((item, index) => (
//         <div className="border-b" key={item.id}>
//           <div
//             className="flex justify-between items-center p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 transition"
//             onClick={() => toggleItem(item.id)}
//           >
//             <h2 className="font-medium">{item.title}</h2>
//           </div>
//           {selectedItems.includes(item.id) ? (
//             <div className="p-4">{item.content}</div>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoadMoreItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const api = `https://dummyjson.com/products?limit=6&skip=${
    count === 0 ? 0 : count * 20
  }`;

  const fetchItems = () => {
    setLoading(true);
    axios
      .get(api)
      .then((response) => {
        setItems((prev) => [...prev, ...response.data.products]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, [count]);

  if (loading) {
    return <h3 className="text-center text-lg font-semibold">Loading...</h3>;
  }
  if (error !== null) {
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center mx-4 gap-6 py-6">
      <h1 className="text-2xl font-bold">
        Product List with Load More Feature
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {items.length !== 0 &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center border border-gray-200"
              >
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <img
                  className="w-40 h-40 object-contain mb-2"
                  src={item.images[0]}
                  alt={item.title}
                />
                <div className="text-lg font-bold text-gray-700">
                  ${item.price}
                </div>
              </div>
            );
          })}
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        disabled={count >= 4}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Load more items
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoadMoreItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const api = `https://dummyjson.com/products?limit=5&skip=${
    count === 0 ? 0 : count * 5
  }&select=title,price`;

  const fetchItems = () => {
    axios
      .get(api)
      .then((response) => {
        setItems((prev) => [...prev, ...response.data.products]);
        console.log(response.data);
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
    return <h3>Loading...</h3>;
  }
  if (error !== null) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex-col gap-2">
      {items.length !== 0 &&
        items.map((item, index) => {
          return (
            <li key={index} className="bg-slate-600 mb-2">
              <h2>{item.title}</h2>
              <div>{item.price}</div>
            </li>
          );
        })}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Load more items
      </button>
    </div>
  );
}

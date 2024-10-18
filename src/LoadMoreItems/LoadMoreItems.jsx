import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LoadMoreItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const api = `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`;

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
    <div className="flex flex-col mx-4">
      <div className="flex flex-row flex-wrap gap-4 justify-center ic w-[100%]">
        {items.length !== 0 &&
          items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-600 w-80 h-60 p-3 rounded-lg"
              >
                <h2>{item.title}</h2>
                <img
                  className="w-32 h-32 object-contain"
                  src={item.images[0]}
                  alt=""
                />
                <div>{item.price}</div>
              </div>
            );
          })}
      </div>
      <button
        disabled={count >= 4 ? true : false}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Load more items
      </button>
    </div>
  );
}

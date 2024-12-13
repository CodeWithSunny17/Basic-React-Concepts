import React from "react";
import { useState, useEffect } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [dropDown, setDropDown] = useState(false);

  async function searchAC() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        console.log(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setUsers(data.users);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    searchAC();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error != null) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchParams}
        onChange={(e) => {
          setSearchParams(e.target.value);
        }}
      />
    </div>
  );
}

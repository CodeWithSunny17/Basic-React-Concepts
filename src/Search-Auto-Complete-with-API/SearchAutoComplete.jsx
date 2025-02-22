import React from "react";
import { useState, useEffect } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function searchAC() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setError(error);
    }
  }

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query))
          : [];
      setFilteredUsers(filteredData);
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  useEffect(() => {
    searchAC();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error != null) {
    return <span>{error.message}</span>;
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Search Autocomplete</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchParams}
        onChange={handleChange}
        className="w-52 p-2 border border-gray-300 rounded-md"
      />
      {dropDown && (
        <ul className="border border-gray-300 mt-2 p-0 w-52 bg-white rounded-md shadow-md">
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSearchParams(user);
                setDropDown(false);
              }}
            >
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

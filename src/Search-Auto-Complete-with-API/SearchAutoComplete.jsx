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
        console.log(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().includes(query) > 0)
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
    return <span>{error}</span>;
  }
  console.log(filteredUsers);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchParams}
        onChange={handleChange}
        style={{ width: "200px", padding: "5px" }}
      />
      {dropDown && (
        <ul
          style={{
            border: "1px solid #ccc",
            marginTop: "5px",
            padding: "0",
            listStyle: "none",
            width: "200px",
          }}
        >
          {filteredUsers.map((user, index) => (
            <li
              key={index}
              style={{
                padding: "5px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
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

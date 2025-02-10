import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  });
  return (
    <div className="min-h-[100vh]">
      <h1>Users List</h1>
      {users.map((u) => {
        return (
          <li key={u.id}>
            <a href={u.html_url}>{u.login}</a>
          </li>
        );
      })}
    </div>
  );
}

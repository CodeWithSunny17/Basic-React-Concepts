import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Users List</h1>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {users.map((u) => (
          <li key={u.id} className="p-2 border-b last:border-none">
            <a
              href={u.html_url}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {u.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function MultipleReturns() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []); // Added dependency array to prevent infinite re-renders

  if (isLoading) {
    return <p className="text-center text-lg text-gray-600">Loading...</p>;
  }
  if (error) {
    return (
      <p className="text-center text-lg text-red-500">Error: {error.message}</p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">GitHub Users</h1>
      <ul className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-2 border-b last:border-none"
          >
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

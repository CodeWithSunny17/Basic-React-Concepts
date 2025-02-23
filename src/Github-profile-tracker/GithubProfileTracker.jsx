import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("CodeWithSunny17");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait...</h1>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub Profile Finder</h1>
      <div className="flex flex-row gap-2 py-2">
        <input
          className="w-60 p-2 border rounded"
          name="search-by-username"
          type="text"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {userData && (
        <div className="flex flex-col items-center mt-6 bg-white p-6 shadow-lg rounded-lg">
          <img
            src={userData.avatar_url}
            className="w-40 h-40 rounded-full mb-4"
            alt="User"
          />
          <a
            href={`https://github.com/${userData.login}`}
            className="text-lg font-bold text-blue-500"
          >
            {userData.name || userData.login}
          </a>
          <div className="mt-4 flex flex-row gap-6">
            <div className="text-center">
              <p className="font-semibold">Public Repos</p>
              <p>{userData.public_repos}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Followers</p>
              <p>{userData.followers}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Following</p>
              <p>{userData.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

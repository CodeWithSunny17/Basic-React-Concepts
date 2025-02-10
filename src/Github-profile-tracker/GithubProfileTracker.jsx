import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  //   const createdDate = new Date(createdDate);

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
  //   const {
  //     avatar_url,
  //     followers,
  //     following,
  //     public_repos,
  //     name,
  //     login,
  //     created_at,
  //   } = userData;

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="h-[100vh] flex flex-col justify-center ic">
      <h1>GitHub Profile Finder</h1>
      <div className="flex flex-row gap-2 py-2">
        <input
          className="w-60"
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? (
        <div className="flex flex-col">
          <div>
            <img src={userData.avatar_url} className="w-60 h-60" alt="User" />
          </div>
          <div className="">
            <a href={`https://github.com/${userData.login}`}>
              {userData.name || userData.login}
            </a>
            {/* <p>
              User joined on{" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
              })} ${createdDate.getFullYear()}`}
            </p> */}
          </div>
          <div className="">
            <div>
              <p>Public Repos</p>
              <p>{userData.public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>{userData.followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>{userData.following}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

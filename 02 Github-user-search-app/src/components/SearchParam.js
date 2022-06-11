import React, { useEffect, useState } from "react";
import Result from "./Result";
import { IconSearch } from "../assets/Icons";
const API_URL = "https://api.github.com/users";

const SearchParam = () => {
  const [username, setUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    requestUser();
  }, []);

  async function requestUser() {
    const res = await fetch(`${API_URL}/${username}`);

    if (!res.ok) {
      setError("No results");
    } else {
      const data = await res.json();
      setError(false);
      setUserData(data);
      setLoading(false);
    }
  }

  return (
    <main>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          requestUser();
        }}
      >
        <IconSearch />
        <label htmlFor="username" className="sr-only">
          Search GitHub username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Search GitHub username…"
          className="card"
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p>No results</p>}
        <button>Search</button>
      </form>
      <section className="card result">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <Result userData={userData} />
        )}
      </section>
    </main>
  );
};

export default SearchParam;

import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);

  let [loading, setLoading] = useState(true);

  let [error, setError] = useState(null);

  useEffect(() => {
    usingAsyncAwait();
  }, []);

  function usingThen() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }

  async function usingAsyncAwait() {
    try {
      let fetchData = await fetch(url);

      if (!fetchData.ok) {
        switch (fetchData.status) {
          case 404:
            throw new Error(`HTTP error! 404 - Api not found`);
        }
      }

      let data = await fetchData.json();

      setPosts(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div>
      <h1>Fetch api</h1>
      <hr />
      {loading && <h2>loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {posts.length != 0 && (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchApi;

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function getDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      fetch(`/api/dalle2?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <Head>
        <title>Create DALLE 2 App</title>
      </Head>

      <main >
        <h1>
          Create images with <span>DALLE 2</span>
        </h1>
        <p>
          <input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Bearer Token"
          />{" "}
          &{" "}
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query"
          />
          <button onClick={getDalle2}>Get 4 Images</button>
        </p>{" "}
        {error ? (
          <div>Something went wrong. Try again.</div>
        ) : (
          <></>
        )}{" "}
        {loading && <p>Loading...</p>}
        <div>
          {results.map((result) => {
            return (
              <div>
                <img
                  src={result.generation.image_path}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

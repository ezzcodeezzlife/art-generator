import Head from 'next/head';
import { useState } from 'react';

export default function DalleTest() {
    const [token, setToken] = useState("");
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function getDalle2() {
        if(query != "" && token != "") {
            setLoading(true);
            setError(false);
            fetch(`/api/dalle2?k=${token}&q=${query}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then((data) => {
                    setResult(data.result);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                    setLoading(false);
                });
        }
        else {
            setError(true);
        }
    }

    return (
        <div>
            <p>Testing creating images with Dalle</p>

            <input
                id="query"
                type="text"
                placeholder="Enter query"
                value={query}
                onChange={(e) => {
                    console.log(e.target.value);
                    setToken('sess-H3CXbJsrbAYlqNsCh17fEdVqEbrkI9HYIrZrNyeZ')
                    setQuery(e.target.value)}
                    }
            />
            <button onClick={getDalle2}> Get Results! </button>

            {error ? (
                <p>
                    something went wrong lol
                </p>
            ) : (<></>)}

            {loading && <p>Loading</p>}

            <div className="grid">
                {result.map((result) => {
                    return (
                        <div className="card">
                            <img 
                                src={result.generation.image_path} 
                                alt="" 
                                className="imgPreview"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

}
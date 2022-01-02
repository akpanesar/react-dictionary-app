import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=6`;
    let apiKey = "563492ad6f917000010000014972f1272efd4c4694cc62634f9db6ea";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h1 className="text-center mb-3">Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  defaultValue={props.defaultKeyword}
                  type="search"
                  className="form-control"
                  placeholder="Search a word..."
                  autoFocus={true}
                  onChange={handleKeywordChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn w-100" />
              </div>
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}

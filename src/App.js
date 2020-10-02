import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./components/InputField";
import CardHolder from "./components/CardHolder";

const App = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setData(response.data));
  }, []);
  const buttonDescendingHandler = () => {
    setData(
      [...data].sort(function (a, b) {
        return Number(b.population) - Number(a.population);
      })
    );
  };
  const buttonAscendingHandler = () => {
    setData(
      [...data].sort(function (a, b) {
        return Number(a.population) - Number(b.population);
      })
    );
  };
  const azClickHandler = () => {
    setData(
      [...data].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    );
  };
  const zaClickHandler = () => {
    setData(
      [...data].sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    );
  };
  return (
    <div className="App text-center p-5">
      <h1 className="main-head display-3">
        COUNTRIES <span>APP</span>
      </h1>
      <InputField
        data={data}
        setData={setData}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div
        class="btn-group my-1"
        role="group"
        aria-label="Basic example"
        style={data.length > 0 ? { display: "block" } : { display: "none" }}
      >
        <button type="button" class="btn btn-secondary" onClick={azClickHandler}>
          From A to Z
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={zaClickHandler}
        >
          From Z to A
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={buttonAscendingHandler}
        >
          Population (Ascending)
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={buttonDescendingHandler}
        >
          Population (Descending)
        </button>
      </div>
      <CardHolder data={data} keyword={keyword} />
    </div>
  );
};

export default App;

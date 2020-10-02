import React, { useState } from "react";

const InputField = ({data, setData,  keyword, setKeyword}) => {
    
    const inputChangeHandler = (e) => {
        setKeyword(e.target.value.toLowerCase());

    }
  return (
    <div class="searchfield">
      <div className="search-container mt-5">
        <input
          type="text"
          required
          placeholder="type the country name..."
          value={keyword}
          onChange={inputChangeHandler}
        />
        <i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default InputField;

import React from "react";

const Filter = ({ handleSearch }) => {
  return (
    <div className="filter">
      Search Contact:
      <input className="input" onChange={(event) => handleSearch(event)} />
    </div>
  );
};

export default Filter;

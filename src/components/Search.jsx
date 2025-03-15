import React from "react";
//ispod je umjesto {searchTerm, setSearchTerm} mozes staviti samo props jer je to objekat, ovako samo dekonstruises objekat
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through tousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;

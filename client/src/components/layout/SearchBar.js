import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");

  const searchAllMedia = async () => {
    try {
      const response = await fetch("/api/v1/media", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify()
      })
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }


  return (
    <div className="search_bar">
      <form>
        <label htmlFor="header-search"></label>
          <input
              type="text"
              id="header-search"
              placeholder="find something new..."
              onChange={(event)=> props.setSearchValue(event.target.value)}
          />
          <button className ="submit_button" type="submit">Search</button>
      </form>
    </div>
);
}

export default SearchBar
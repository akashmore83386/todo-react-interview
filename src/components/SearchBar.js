import React, { useState } from "react";

const TodoSearch = ({ searchTodo }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    searchTodo(searchText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search todos"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TodoSearch;

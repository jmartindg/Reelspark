import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ submit, searchValue, handleChange }) => {
  return (
    <form onSubmit={submit} className="w-full md:w-1/2 lg:w-1/4 relative">
      <input
        type="text"
        name="search"
        placeholder="Search movies, tv shows, actors..."
        value={searchValue}
        onChange={handleChange}
        autoComplete="off"
        className="py-3 pr-12 focus:ring-[1px] focus:ring-yellow-500 focus:border-yellow-500 w-full rounded text-gray-50 bg-[#131312] border-gray-700 placeholder:text-sm"
      />
      <AiOutlineSearch size={25} className="text-gray-700 absolute top-3 right-4" />
    </form>
  );
};

export default SearchBar;

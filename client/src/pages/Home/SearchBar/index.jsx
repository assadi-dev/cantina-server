import React from "react";
import FilterButton from "./FilterButton";
import { SearchBarContainer } from "./SearchBar.styled";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input type="text" />
      <FilterButton />
    </SearchBarContainer>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { SearchIcon } from "../../../components/Icons/Icons";
import FilterButton from "./FilterButton";
import FilterDropdown from "./FilterDropdown";
import {
  InputSearchContainer,
  SearchBarContainer,
  SearchButton,
} from "./SearchBar.styled";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(() => !focus);
  };

  return (
    <SearchBarContainer>
      <InputSearchContainer isFocus={focus}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleFocus}
          placeholder="Rechercer un recette"
        />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </InputSearchContainer>

      <FilterButton />
      <FilterDropdown />
    </SearchBarContainer>
  );
};

export default SearchBar;

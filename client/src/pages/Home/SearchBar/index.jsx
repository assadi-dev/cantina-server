import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchIcon } from "../../../components/Icons/Icons";
import { searchRecipes } from "../../../redux/actions/RecipeAction.action";
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
  const dispatch = useDispatch();
  const [openDropDown, setopenDropDown] = useState(false);
  const toggleDropDown = () => {
    setopenDropDown(() => !openDropDown);
  };

  const [searchTerm, setSearchterm] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchterm(() => value);
  };

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    dispatch(searchRecipes(searchTerm));
  };

  return (
    <SearchBarContainer>
      <InputSearchContainer isFocus={focus}>
        <form onSubmit={handleSearchRecipe}>
          <input
            type="text"
            onFocus={handleFocus}
            onBlur={handleFocus}
            placeholder="Rechercer un recette"
            onChange={handleSearch}
            value={searchTerm}
          />
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
        </form>
      </InputSearchContainer>

      <FilterButton onClick={toggleDropDown} />

      <FilterDropdown
        isOpen={openDropDown}
        onClose={() => setopenDropDown(() => false)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;

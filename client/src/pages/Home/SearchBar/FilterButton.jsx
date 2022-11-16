import React from "react";
import { FilterSettingIcon } from "../../../components/Icons/Icons";
import { FilterbuttonContainer } from "./SearchBar.styled";

const FilterButton = () => {
  return (
    <FilterbuttonContainer>
      <span>
        <FilterSettingIcon />
      </span>
    </FilterbuttonContainer>
  );
};

export default FilterButton;

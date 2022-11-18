import React from "react";
import { FilterSettingIcon } from "../../../components/Icons/Icons";
import { FilterbuttonContainer } from "./SearchBar.styled";

const FilterButton = ({ ...props }) => {
  return (
    <FilterbuttonContainer {...props}>
      <span>
        <FilterSettingIcon />
      </span>
    </FilterbuttonContainer>
  );
};

export default FilterButton;

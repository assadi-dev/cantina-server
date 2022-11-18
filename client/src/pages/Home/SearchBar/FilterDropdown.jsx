import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SelectFlotingLabel from "../../../components/Input/SelectFlotingLabel";
import { NIVEAU_OPTIONS_VALUES } from "../../../constant/project";
import { filtered_recipes } from "../../../redux/actions/RecipeAction.action";
import {
  FilterBtn,
  FilterContent,
  FilterDropdowContainer,
  FilterHeader,
  FilterRowbottom,
  InputFilter,
  RowInputFilter,
  SelectInputFilter,
} from "./SearchBar.styled";

const FilterDropdown = () => {
  const [filterParams, setFilterParams] = useState({
    niveau: "padawan",
    tempsPreparation: { start: "1", end: "15" },
    personnes: { start: "1", end: "8" },
  });
  const dispatch = useDispatch();
  const handleChangeNiveau = (e) => {
    let value = e.target.value;
    setFilterParams((prevState) => ({ ...prevState, niveau: value }));
  };

  const handleChangeWithArg = (e, arg) => {
    let name = e.target.name;
    let value = e.target.value;
    setFilterParams((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], [arg]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filterParams);
    dispatch(filtered_recipes(filterParams));
  };

  return (
    <FilterDropdowContainer>
      <FilterHeader>Filtrer par :</FilterHeader>
      <form onSubmit={handleSubmit}>
        <FilterContent>
          <div className="separator">
            <p>Niveau</p>
            <SelectInputFilter
              inputContainerStyle={{ padding: 0 }}
              optionValues={[
                { value: "", label: "Tout les niveaux" },
                ...NIVEAU_OPTIONS_VALUES,
              ]}
              onChange={handleChangeNiveau}
            />
          </div>
          <div className="separator">
            <p>Nombre personnes</p>
            <RowInputFilter>
              <div>
                <InputFilter
                  inputContainerStyle={{ padding: 0 }}
                  placeholder={"1"}
                  type="number"
                  min="1"
                  name="personnes"
                  onChange={(e) => handleChangeWithArg(e, "start")}
                  value={filterParams.personnes.start}
                />
              </div>
              <div className="middl-text">à</div>
              <div>
                <InputFilter
                  inputContainerStyle={{ padding: 0 }}
                  type="number"
                  placeholder={"5"}
                  min="1"
                  name="personnes"
                  onChange={(e) => handleChangeWithArg(e, "end")}
                  value={filterParams.personnes.end}
                />
              </div>
            </RowInputFilter>
          </div>
          <div className="separator">
            <p>Temps de preparations (en min)</p>
            <RowInputFilter>
              <div className="flex">
                <InputFilter
                  inputContainerStyle={{ padding: 0 }}
                  placeholder={"5"}
                  type="number"
                  min="0"
                  name="tempsPreparation"
                  onChange={(e) => handleChangeWithArg(e, "start")}
                  value={filterParams.tempsPreparation.start}
                />
                min
              </div>
              <div className="middl-text">à</div>
              <div className="flex">
                <InputFilter
                  inputContainerStyle={{ padding: 0 }}
                  placeholder={"15"}
                  type="number"
                  min="0"
                  name="tempsPreparation"
                  onChange={(e) => handleChangeWithArg(e, "end")}
                  value={filterParams.tempsPreparation.end}
                />
                min
              </div>
            </RowInputFilter>
          </div>
        </FilterContent>
        <FilterRowbottom>
          <FilterBtn type="submit">Filtrer</FilterBtn>
        </FilterRowbottom>
      </form>
    </FilterDropdowContainer>
  );
};

export default FilterDropdown;

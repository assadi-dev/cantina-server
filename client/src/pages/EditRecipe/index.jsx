import React, { useState, useEffect } from "react";
import { AddIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import {
  AddElementButton,
  FormBottom,
  FormInputControl,
  FormRecipeContainer,
  HeaderFormPreview,
  HeaderFormRecipes,
  IconButton,
  SectionForm,
  SubmitBtn,
} from "../AddRecipe/FormRecipe.styled";
import IngredientInput from "../AddRecipe/IngredientInput";
import uniqid from "uniqid";
import EtapeInput from "../AddRecipe/EtapeInput";
import { removeItem } from "../../utils/Array";
import { useFormik } from "formik";
import TextareaFloatingLabel from "../../components/Input/TextareaFloatingLabel";
import SelectFlotingLabel from "../../components/Input/SelectFlotingLabel";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findOneRecipes } from "../../redux/actions/RecipeAction.action";
import { sleep } from "../../utils/time";
import { IMG_BLANK } from "../../constant/theme";
import { extractQte, extractUnite } from "../../utils/textForm";

const EditRecipe = () => {
  const { id } = useParams();
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  const recipeSelector = useSelector((state) => state.RecipesReducer);
  const [listIngredient, setListingredient] = useState([]);
  const [listEtapes, setListEtape] = useState([]);
  useEffect(() => {
    dispatch(findOneRecipes(id));
  }, [id]);

  useEffect(() => {
    if (render) {
      let retrieveIngredient = recipeSelector.selected.ingredients;
      let cleanIngredient = retrieveIngredient.map((ingredient) => {
        return {
          id: uniqid(),
          qte: extractQte(ingredient[0]),
          unite: extractUnite(ingredient[0]),
          label: ingredient[1],
        };
      });
      setListingredient(() => cleanIngredient);

      let retrieveEtape = recipeSelector.selected.etapes;
      let cleanEtapes = retrieveEtape.map((etape) => {
        return { id: uniqid(), content: etape };
      });
      setListEtape(() => cleanEtapes);
    }
  }, [render]);

  recipeSelector.isReady && sleep(1000).then(() => setRender(true));

  const {
    titre,
    description,
    niveau,
    personnes,
    tempsPreparation,
    ingredients,
    etapes,
    photo,
  } = render && recipeSelector.selected;

  const addIngredient = () => {
    setListingredient((prevState) => [
      ...prevState,
      { id: uniqid(), qte: 1, unite: "", label: "" },
    ]);
  };
  const addEtapes = () => {
    setListEtape((prevState) => [...prevState, { id: uniqid(), content: "" }]);
  };
  const removeElement = (id, element) => {
    if (element == "etape")
      setListEtape(() => removeItem(listEtapes, "id", id));
    if (element == "ingredient")
      setListingredient(() => removeItem(listIngredient, "id", id));
  };

  const handleChangeEtape = (id, data) => {
    let upDateEtape = listEtapes.map((etape) => {
      if (etape.id === id) {
        return data;
      }
      return etape;
    });

    setListEtape(() => upDateEtape);
  };

  const handleChangeIngredient = (id, data) => {
    let upDateIngredient = listIngredient.map((ingredient) => {
      if (ingredient.id === id) {
        return data;
      }
      return ingredient;
    });
    setListingredient(() => upDateIngredient);
  };

  //Envoie des donnée complete

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      titre: titre ? titre : "",
      description: description ? description : "",
      niveau: niveau ? niveau : "",
      personnes: personnes ? personnes : "",
      tempsPreparation: tempsPreparation ? tempsPreparation : "",
      ingredients: listIngredient ? listIngredient : [],
      etapes: [],
      photo: photo ? photo : IMG_BLANK,
    },
    onSubmit: (values) => {
      let etapes = listEtapes.map((items) => items.content);
      let ingredients = listIngredient.map((ingredient) => [
        ingredient.qte + ingredient.unite,
        ingredient.label,
      ]);
      let sendData = { ...values, etapes, ingredients };
      console.log(sendData);
    },
  });

  return (
    <FormRecipeContainer>
      <h2>{titre}</h2>
      {render && (
        <form onSubmit={formik.handleSubmit}>
          <HeaderFormRecipes>
            <div className="col-left">
              <FormInputControl>
                <FloatingLabel
                  label="Titre"
                  name="titre"
                  value={formik.values.titre}
                  onChange={formik.handleChange}
                />
              </FormInputControl>
              <FormInputControl>
                <TextareaFloatingLabel
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </FormInputControl>
              <FormInputControl>
                <SelectFlotingLabel
                  name="niveau"
                  label="Difficulté"
                  value={formik.values.niveau}
                  onChange={formik.handleChange}
                  optionValues={[
                    { value: "padawan", label: "Padawan" },
                    { value: "jedi", label: "Jedi" },
                    { value: "maitre", label: "Maître" },
                  ]}
                />
              </FormInputControl>
              <FormInputControl>
                <FloatingLabel
                  name="personnes"
                  label="NB Perspnnes"
                  type="number"
                  min="1"
                  value={formik.values.personnes}
                  onChange={formik.handleChange}
                />
              </FormInputControl>
              <FormInputControl>
                <FloatingLabel
                  name="tempsPreparation"
                  label="Temps préparation (min)"
                  value={formik.values.tempsPreparation}
                  onChange={formik.handleChange}
                />
              </FormInputControl>
            </div>
            <div className="col-right">
              <HeaderFormPreview img={formik.values.photo}></HeaderFormPreview>
            </div>
          </HeaderFormRecipes>
          <SectionForm>
            <h3 className="titleFormSection">Ingredients</h3>
            {listIngredient.length > 0 &&
              listIngredient.map((ingredient) => (
                <IngredientInput
                  key={ingredient.id}
                  ingredient={ingredient}
                  onChange={handleChangeIngredient}
                  onRemoveitem={removeElement}
                />
              ))}
            <AddElementButton onClick={addIngredient}>
              <IconButton>
                <AddIcon />
              </IconButton>
              Ajouter un ingredient
            </AddElementButton>
          </SectionForm>
          <SectionForm style={{ marginTop: 42 }}>
            <h3 className="titleFormSection">Etapes</h3>
            {listEtapes.length > 0 &&
              listEtapes.map((etape, index) => (
                <EtapeInput
                  key={etape.id}
                  etape={etape}
                  onChange={handleChangeEtape}
                  onRemoveitem={removeElement}
                  numero={index + 1}
                />
              ))}
            <AddElementButton onClick={addEtapes}>
              <IconButton>
                <AddIcon />
              </IconButton>
              Ajouter une etape
            </AddElementButton>
          </SectionForm>
          <FormBottom>
            <SubmitBtn type="submit">Mettre à jour</SubmitBtn>
          </FormBottom>
        </form>
      )}
    </FormRecipeContainer>
  );
};

export default EditRecipe;

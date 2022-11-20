import React, { useState } from "react";
import { AddIcon } from "../../components/Icons/Icons";
import FloatingLabel from "../../components/Input/FloatingLabel";
import {
  AddElementButton,
  AddPhotoBtn,
  FormBottom,
  FormInputControl,
  FormRecipeContainer,
  HeaderFormPreview,
  HeaderFormRecipes,
  IconButton,
  RowBtnContainer,
  SectionForm,
  SubmitBtn,
} from "./FormRecipe.styled";
import IngredientInput from "./IngredientInput";
import uniqid from "uniqid";
import EtapeInput from "./EtapeInput";
import { removeItem } from "../../utils/Array";
import { useFormik } from "formik";
import TextareaFloatingLabel from "../../components/Input/TextareaFloatingLabel";
import SelectFlotingLabel from "../../components/Input/SelectFlotingLabel";
import { IMG_BLANK } from "../../constant/theme";
import { addRecipes, LoadData } from "../../redux/actions/RecipeAction.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NIVEAU_OPTIONS_VALUES } from "../../constant/project";
import Modal from "../../components/Modal";
import ModaInputPhoto from "./ModaInputPhoto";

const AddRecipe = () => {
  const [listIngredient, setListingredient] = useState([]);
  const [listEtapes, setListEtape] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addIngredient = () => {
    setListingredient((prevState) => [
      ...prevState,
      { id: uniqid(), qte: 1, unite: "", label: "" },
    ]);
  };

  const [modalPhoto, setModalPhoto] = useState({
    isOpen: false,
    label: "Ajouter une photo",
  });

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

  //Modal Ajout Photo + veriff
  const handleModalPhoto = () => {
    setModalPhoto(() => ({
      ...modalPhoto,
      isOpen: !modalPhoto.isOpen,
      label: formik.values.photo ? "Remplacer la photo" : "Ajouter une photo",
    }));
  };

  //Mise à jour du state photo du formulaire

  const handleChangePhoto = (value) => {
    formik.setFieldValue("photo", value);
  };

  //Envoie des donnée complete

  const formik = useFormik({
    initialValues: {
      titre: "",
      description: "",
      niveau: "padawan",
      personnes: 1,
      tempsPreparation: 5,
      ingredients: [],
      etapes: [],
      photo: IMG_BLANK,
    },
    onSubmit: (values) => {
      let etapes = listEtapes.map((items) => items.content);
      let ingredients = listIngredient.map((ingredient) => [
        ingredient.qte + ingredient.unite,
        ingredient.label,
      ]);
      let sendData = {
        ...values,
        tempsPreparation: Number(values.tempsPreparation),
        etapes,
        ingredients,
      };

      dispatch(addRecipes(sendData)).then((res) => {
        alert("Recette ajouté");
        dispatch(LoadData()).then(() => navigate("/", { replace: true }));
      });
    },
  });

  return (
    <FormRecipeContainer>
      <h2>Nouvelle recette</h2>
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
                label="Niveau"
                value={formik.values.niveau}
                onChange={formik.handleChange}
                optionValues={NIVEAU_OPTIONS_VALUES}
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
            <div>
              <HeaderFormPreview img={formik.values.photo}></HeaderFormPreview>
              <RowBtnContainer>
                <AddPhotoBtn type="button" onClick={handleModalPhoto}>
                  {modalPhoto.label}
                </AddPhotoBtn>
              </RowBtnContainer>
            </div>
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
          <SubmitBtn type="submit">Ajouter</SubmitBtn>
        </FormBottom>
      </form>

      <Modal isOpen={modalPhoto.isOpen} onClose={handleModalPhoto}>
        <ModaInputPhoto
          isOpen={modalPhoto.isOpen}
          onClose={handleModalPhoto}
          onChange={handleChangePhoto}
          value={formik.values.photo}
        />
      </Modal>
    </FormRecipeContainer>
  );
};

export default AddRecipe;

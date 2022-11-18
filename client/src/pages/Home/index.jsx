import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/Cards";
import Carousel from "../../components/Carrousel";
import {
  AddIcon,
  FilterSettingIcon,
  SearchIcon,
} from "../../components/Icons/Icons";
import Modal from "../../components/Modal";
import Confirm from "../../components/Modal/Confirm";
import { getAllRecipes } from "../../redux/actions/RecipeAction.action";
import ConfirmReducer from "./ConfirmReducer";
import DeleteConfirm from "./DeleteConfirm";
import {
  ActionRow,
  AddButton,
  GridItems,
  HomeWrapper,
  ListCardRecipeContainer,
} from "./Home.styled";
import SearchBar from "./SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const recepesCollection = useSelector((state) => state.RecipesReducer);

  const [modalConfirm, dispatchModalComfirm] = useReducer(ConfirmReducer, {
    isOpen: false,
    id: null,
    message: "",
  });

  const handleDelete = (id, titre) => {
    let message = `Voulez-vous supprimer la recette ${titre} ?`;
    let payload = { id, titre, message };
    dispatchModalComfirm({ type: "TOGGLE_MODAL", payload });
  };

  const closeModal = () => {
    dispatchModalComfirm({ type: "CLOSE_MODAL" });
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  return (
    <HomeWrapper>
      <Carousel />
      <ActionRow className="section-separator">
        <div className="col start">
          <AddButton to="recette/ajouter">
            <span>
              <AddIcon />
            </span>
            Ajouter une nouvelle recette
          </AddButton>
        </div>
        <div className="col end">
          <SearchBar />
        </div>
      </ActionRow>

      <ListCardRecipeContainer className="section-separator">
        {recepesCollection.isReady ? (
          recepesCollection.all.length ? (
            recepesCollection.all.map((recipes) => (
              <GridItems key={recipes.id}>
                <Card
                  id={recipes.id}
                  title={recipes.titre}
                  niveau={recipes.niveau}
                  preview={recipes.photo}
                  personnes={recipes.personnes}
                  tempsPreparation={recipes.tempsPreparation}
                  onRemove={handleDelete}
                />
              </GridItems>
            ))
          ) : (
            <h3> Aucune Recette trouvé</h3>
          )
        ) : null}
      </ListCardRecipeContainer>
      <Modal isOpen={modalConfirm.isOpen}>
        <Confirm isOpen={modalConfirm.isOpen} onClose={closeModal}>
          <DeleteConfirm
            id={modalConfirm.id}
            alertMessage={modalConfirm.message}
            cancelAction={closeModal}
          />
        </Confirm>
      </Modal>
    </HomeWrapper>
  );
};

export default Home;

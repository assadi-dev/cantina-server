import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEFAULT_COLOR } from "../../constant/theme";

export const HomeWrapper = styled.div`
  margin-top: 1.2rem;
  .section-separator {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    width: 100%;
  }
`;

export const ActionRow = styled.section`
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .col {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    min-width: 250px;
    align-items: center;
  }

  .start {
    justify-content: flex-start;
  }
  .end {
    justify-content: flex-end;
  }
`;

export const AddButton = styled(Link)`
  color: ${DEFAULT_COLOR};
  display: flex;
  align-items: center;
  span {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  :hover {
    opacity: 0.6;
  }
`;

export const ListCardRecipeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 28px;
  width: 100%;
  padding: 2.2rem 0 0;
  @media (min-width: 568px) {
    grid-template-columns: repeat(auto-fill, 22rem);
    justify-content: center;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const GridItems = styled.div`
  width: 100%;
  align-self: center;
  padding-top: 20px;
  max-height: 280px;
  margin-bottom: 2.8rem;
  position: relative;
  flex: 1;
`;

export const DeleteContainer = styled.div`
  padding: 15px 5px;
  width: 350px;
  line-height: 28px;
  text-align: center;
  .Message {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    width: 550px;
  }
`;

export const DeleteRowContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 0;
  .grid-start {
    justify-self: start;
  }

  .grid-end {
    justify-self: end;
  }
`;

export const ConfirmBtn = styled.button`
  border-radius: 8px;
  width: fit-content;
  padding: 12px 22px;
  background-color: var(--green-color);
  color: var(--white);
  text-transform: uppercase;
  cursor: pointer;
  :active {
    opacity: 0.5;
  }
`;

export const CancelBtn = styled.button`
  border-radius: 8px;
  width: fit-content;
  padding: 12px 22px;
  background-color: var(--danger-color);
  color: var(--white);
  text-transform: uppercase;
  cursor: pointer;
  :active {
    opacity: 0.5;
  }
`;

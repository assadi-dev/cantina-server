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
  grid-template-columns: repeat(2, 18rem);
  grid-gap: 28px;
  width: 100%;
  padding: 2.2rem 0 0;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 24rem);
  }
`;

export const GridItems = styled.div`
  width: 100%;
  align-self: center;
  padding-top: 20px;
  max-height: 280px;
  position: relative;
`;

import styled from "styled-components";
import { BACKGROUND_CARD_LIGHT } from "../../constant/theme";

export const CardContainer = styled.div`
  width: 100%;
  height: 260px;
  padding: 12px;
  background-color: ${BACKGROUND_CARD_LIGHT};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
`;

export const CardPreview = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
`;

export const CardBody = styled.div`
  transform: translateY(-25%);
  width: 18rem;
  height: 100%;
  margin: 0 auto;
  .title {
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardBodyRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  :last-of-type {
    margin-bottom: 0;
  }
  .delete {
    color: var(--danger-color);
  }
  .edit {
    color: var(--turquoise-color);
  }
  .padawan {
    color: var(--padawan-color);
    font-weight: bold;
  }
  .jedi {
    color: var(--jedi-color);
    font-weight: bold;
  }
  .master {
    color: var(--master-color);
    font-weight: bold;
  }
`;

export const IconCard = styled.span`
  width: 18px;
  height: 18px;
  svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const CardTextDetail = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  span {
    margin-right: 5px;
  }
`;

import styled from "styled-components";
import { DEFAULT_COLOR } from "../../../constant/theme";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export const FilterbuttonContainer = styled.div`
  color: ${DEFAULT_COLOR};
  margin-left: 0.5rem;
  cursor: pointer;
  span {
    width: 30px;
    height: 30px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
  :active {
    opacity: 0.5;
  }
`;

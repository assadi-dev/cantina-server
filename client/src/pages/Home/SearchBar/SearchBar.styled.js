import styled from "styled-components";
import { DEFAULT_COLOR } from "../../../constant/theme";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  position: relative;
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

export const InputSearchContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  border-bottom: ${({ isFocus }) =>
    isFocus ? "1px solid var(--primary-color)" : "1px solid var(--grey-color)"};
  padding-right: 50px;

  input {
    width: 100%;
    height: 100%;
    ::placeholder {
      opacity: 0.8;
    }
  }
  @media (min-width: 768px) {
    min-width: 380px;
    margin-right: 2rem;
  }
`;

export const SearchButton = styled.span`
  width: 20px;
  height: 20px;
  color: #323232;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
  }
  :hover {
    color: var(--primary-color);
  }
  :active {
    opacity: 0.5;
  }
`;

//Filter Dropdown

export const FilterDropdowContainer = styled.div`
  width: 100%;
  padding: 18px 15px;
  background-color: var(--white);
  position: absolute;
  right: 0;
  bottom: -10%;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  transform: translateY(100%);
  z-index: 25;
  border-radius: 8px;
`;

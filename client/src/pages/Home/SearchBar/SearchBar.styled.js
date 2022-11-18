import styled from "styled-components";
import FloatingLabel from "../../../components/Input/FloatingLabel";
import SelectFlotingLabel from "../../../components/Input/SelectFlotingLabel";
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
  font-size: 14px;
`;

export const FilterHeader = styled.div`
  padding: 10px 0;
`;

export const FilterContent = styled.div`
  font-size: 12px;
  .separator {
    margin: 14px 0;
  }
`;

export const FilterRowbottom = styled.div`
  display: grid;
  place-items: center;
  padding: 8px 0 0 0;
`;
export const FilterBtn = styled.button`
  padding: 8px 16px;
  color: var(--white);
  width: fit-content;
  background-color: var(--primary-color);
  border-radius: 3px;
  cursor: pointer;
  :active {
    opacity: 0.5;
  }
`;

export const SelectInputFilter = styled(SelectFlotingLabel)`
  padding: 0;
`;

export const InputFilter = styled(FloatingLabel)`
  padding: 0;
`;

export const RowInputFilter = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 50px 0.5fr;
  grid-gap: 1rem;
  .middl-text {
    text-align: center;
    width: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .flex {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

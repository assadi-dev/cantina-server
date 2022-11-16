import styled from "styled-components";
import { BACKGROUND_LIGHT } from "../../constant/theme";

export const LayoutWrapper = styled.div`
  width: 100;
  min-height: 50vh;
  position: relative;
`;

export const MainView = styled.main`
  padding: 15px 28px;
  @media screen and (min-width: 990px) {
    padding: 22px 9rem;
  }
`;

export const NavbarWrapper = styled.div`
  padding: 22px 18px;
  background-color: ${BACKGROUND_LIGHT};
  display: grid;
  place-items: center;
  .title {
    font-weight: bold;
    font-size: 1.4rem;
    margin: 1rem;
  }
`;

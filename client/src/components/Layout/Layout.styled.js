import styled from "styled-components";
import { BACKGROUND_LIGHT } from "../../constant/theme";

export const LayoutWrapper = styled.div`
  width: 100;
  min-height: 50vh;
  position: relative;
  .style-scroll-navbar {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  }
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
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.4;
  .title {
    font-weight: bold;
    font-size: 1.4rem;
    margin: 1rem;
  }
`;

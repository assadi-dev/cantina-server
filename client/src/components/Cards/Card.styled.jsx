import styled from "styled-components";
import { BACKGROUND_CARD_LIGHT } from "../../constant/theme";
const imgTest =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export const CardContainer = styled.div`
  width: 22rem;
  height: 280px;
  background-color: ${BACKGROUND_CARD_LIGHT};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

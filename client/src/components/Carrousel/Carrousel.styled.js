import styled from "styled-components";

const imgTest =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 205px;
  background-image: url(${imgTest});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  @media screen and (min-width: 550px) {
    height: 405px;
  }
`;

import styled from "styled-components";

export const BackGroundImageStyled = styled.div`
  @media (min-width: 1024px) {
    background: ${({ image }) => `url(${image})`} no-repeat;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-size: cover;
  }
`;
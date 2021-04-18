import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 1001;

  span {
    text-align:center;
    margin: 14px 0 ;
    &:hover {
      text-shadow: '0 0 1px #FFF, 0 0 2px #FFF, 0 0 3px #FFF, 0 0 4px #bb8c4b, 0 0 5px #bb8c4b, 0 0 6px #bb8c4b, 0 0 7px #bb8c4b, 0 0 8px #bb8c4b';
    }
  }

  a {
    font-size: 2.5rem;
    text-transform: uppercase;
    padding-top: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    max-width: 125vw;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

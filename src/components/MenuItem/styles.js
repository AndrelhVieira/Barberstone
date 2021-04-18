import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
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
      text-shadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #BB8C4B, 0 0 30px #BB8C4B, 0 0 40px #BB8C4B, 0 0 55px #BB8C4B, 0 0 75px #BB8C4B";
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

import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger, Div } from "./styles";
import { motion } from 'framer-motion';
const Burger = ({ open, setOpen }) => {

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <motion.span
       whileHover={{ 
        scale: 1.2,
        y: -5,
        boxShadow:'0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #BB8C4B, 0 0 30px #BB8C4B, 0 0 40px #BB8C4B, 0 0 55px #BB8C4B, 0 0 75px #BB8C4B'
      }}
      >
        <div />
        <div />
        <div />
      </motion.span>
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Burger;

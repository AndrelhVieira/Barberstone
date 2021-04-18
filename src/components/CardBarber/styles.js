import styled from "styled-components";
import background from "../../images/backgroundCard.jpg";
import { motion } from 'framer-motion'

export const Card = styled(motion.div)`
  padding: 20px;
  border-radius: 20px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  width: 250px;
  height: 246;
  cursor:pointer;

  & img {
    width: 100px;
  }

  & h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 20px 0 5px;
  }
`;

export const ScissorsRate = styled.div`
  display: flex;
  justify-content: center;

  & img {
    width: 40px;
    margin: 0 5px;
  }
`;

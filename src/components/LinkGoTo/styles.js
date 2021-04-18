import styled from "styled-components";
import { COLORS } from "../../styles/theme";
import { motion } from 'framer-motion'

export const Link = styled(motion.a)`
  cursor: pointer;
  color: ${COLORS.gold};
`;

import { CoverContainer } from "./styles";
import { motion } from 'framer-motion';

import Logo from "../../images/Logo.svg";

const Cover = () => {
  return (
    <>
      <CoverContainer>
        <img src={Logo} alt="logo" />
        <motion.div
          animate={{
            y:[0,40,0]
          }}
          transition={{
            duration: 1.5,
            ease:'easeOut',
            loop: Infinity
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </CoverContainer>
    </>
  );
};

export default Cover;

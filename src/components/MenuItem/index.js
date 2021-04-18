import { bool } from "prop-types";
import { StyledMenu } from "./styles";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import LinkGoTo from "../LinkGoTo";

const MenuItem = ({ open, menuLink, isNew }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const outherKey = menuLink.length;

  const handleLogOut = () => {
    localStorage.clear();
  };

  return (
    <StyledMenu open={open}>
      {!!menuLink &&
        menuLink.map(({ content, to, anchor }, index) => {
          if (anchor) {
            return (
              <motion.span
              whileHover={{ 
               scale: 1.1,
               y: -2,
               textShadow:'0 0 1px #FFF, 0 0 2px #FFF, 0 0 3px #FFF, 0 0 4px #bb8c4b, 0 0 5px #bb8c4b, 0 0 6px #bb8c4b, 0 0 7px #bb8c4b, 0 0 8px #bb8c4b'
              }}
              >
                <Link key={index} activeClass="active" to={to} smooth={true} >
                  {content}
                </Link>
              </motion.span>
            );
          } else {
            return (
              <motion.span
              whileHover={{ 
               scale: 1.1,
               y: -2
              }}
              >
                {!(isNew && to === "/barbearias") && (
                  <LinkGoTo to={to} key={index}>
                    {content}
                  </LinkGoTo>
                  //<a key={index} href={to}>
                  //</a>
                )}
              </motion.span>
            );
          }
        })}
      {token && (
              <motion.span
              whileHover={{ 
               scale: 1.1,
               y: -2,
               textShadow:'0 0 1px #FFF, 0 0 2px #FFF, 0 0 3px #FFF, 0 0 4px #bb8c4b, 0 0 5px #bb8c4b, 0 0 6px #bb8c4b, 0 0 7px #bb8c4b, 0 0 8px #bb8c4b'
              }}
              >
                <a key={outherKey} onClick={handleLogOut} href="/entrar">
                  LogOut
                </a>
              </motion.span>
      )}
    </StyledMenu>
  );
};
MenuItem.propTypes = {
  open: bool.isRequired,
};
export default MenuItem;

import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkGoTo = ({ children, to, isRegister }) => {
  const history = useHistory();

  const handleGoTo = (to) => {
    history.push({pathname: to, state: isRegister && true })
  };

  return <Link 
  whileHover={{textShadow:'0 0 1px #FFF, 0 0 2px #FFF, 0 0 3px #FFF, 0 0 4px #bb8c4b, 0 0 5px #bb8c4b, 0 0 6px #bb8c4b, 0 0 7px #bb8c4b, 0 0 8px #bb8c4b'}} 
  onClick={() => handleGoTo(to)}>{children}</Link>;
};

export default LinkGoTo;

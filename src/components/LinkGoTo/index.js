import { Link } from "./styles";
import { useHistory } from "react-router-dom";

const LinkGoTo = ({ children, to, isRegister }) => {
  const history = useHistory();

  const handleGoTo = (to) => {
    history.push({pathname: to, state: isRegister && true })
  };

  return <Link whileHover={{textShadow:'0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #BB8C4B, 0 0 30px #BB8C4B, 0 0 40px #BB8C4B, 0 0 55px #BB8C4B, 0 0 75px #BB8C4B'}} onClick={() => handleGoTo(to)}>{children}</Link>;
};

export default LinkGoTo;

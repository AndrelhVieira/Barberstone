import { Container, Card, Motion } from "./styles";
import Title from "../Title";
import CustomerImage from "../../images/customer.jpg";
import BarberImage from "../../images/barber.jpg";
import LinkGoTo from "../../components/LinkGoTo";
import { useHistory } from "react-router-dom";

const RegisterSectionHomepage = () => {
  const history = useHistory();

  const handleClick = (to) => {
    history.push(to);
  };
  return (
    <>
      <Container id="cadastrar">
        <Title>Cadastre-se</Title>
        <div>
          <Motion
            whileHover={{
              scale:1.05, 
              y:-5,
              boxShadow:'0 0 2px #FFF, 0 0 5px #FFF, 0 0 10px #FFF, 0 0 12px #bb8c4b, 0 0 14px #bb8c4b, 0 0 16px #bb8c4b, 0 0 18px #bb8c4b, 0 0 20px #bb8c4b'
            }}
            transition={{
              duration: 0.1
            }}
            image={CustomerImage}
            onClick={() => handleClick("/cadastro-cliente")}
          >
            <p>
              <span>Seja um membro</span>
              <i className="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Motion>
          <Motion
            whileHover={{
              scale:1.05, 
              y:-5,
              boxShadow:'0px 0px 10px 5px rgba(255,255,255,0.4), 0 0 40px rgb(187, 140, 75)'
            }}
            image={BarberImage}
            onClick={() => handleClick("/cadastro-barbearia")}
          >
            <p>
              Cadastre sua barbearia
              <i className="fas fa-arrow-alt-circle-right"></i>
            </p>
          </Motion>
        </div>
        <h4>
          Já possui uma conta? Então basta{" "}
          <LinkGoTo to={"/entrar"}>entrar </LinkGoTo>e aproveitar!
        </h4>
      </Container>
    </>
  );
};

export default RegisterSectionHomepage;

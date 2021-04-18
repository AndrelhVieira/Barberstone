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
              boxShadow:'0 0 5px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255), 0 0 15px rgb(255, 255, 255), 0 0 20px rgb(187, 140, 75), 0 0 30px rgb(187, 140, 75), 0 0 40px rgb(187, 140, 75), 0 0 55px rgb(187, 140, 75), 0 0 75px rgb(187, 140, 75)'
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

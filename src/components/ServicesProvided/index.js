import {
  ServicesProvidedContainer,
  ServiceCard,
  ServiceCardTwo,
} from "./styles";

import image1 from "../../images/services1.svg";
import image2 from "../../images/services2.svg";

import Title from "../Title";

const ServicesProvided = () => {
  return (
    <>
      <ServicesProvidedContainer id="serviços">
        <Title>Serviços</Title>
        <ServiceCard>
          <div>
            <img src={image1} alt="imagem" />
          </div>
          <div>
            <h4>Para clientes</h4>
            <p>
              Agende agora em apenas um clique seu cortes nas principais
              barbearias perto de você. Acumule pontos de cashback após cada
              agendamento para ganhar ofertas e promoções.
            </p>
          </div>
        </ServiceCard>
        <ServiceCardTwo>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <h4>Para barbeiros</h4>
            <p>
              Apresente para todos sua barbearia listando serviços,
              agendamentos, disponibilidade de horários e profissionais. Ganhe
              mais clientes e tenha mais flexibilidade e produtividade!
            </p>
          </div>
        </ServiceCardTwo>
      </ServicesProvidedContainer>
    </>
  );
};

export default ServicesProvided;

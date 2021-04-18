import GlobalContainer from "../../components/GlobalContainer";
import FooterPage from "../../components/FooterPage";
import FooterForm from "../../components/FooterForm";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import { pageTransition, pageVariants } from '../../services/pageTransition'
import {
  ButtonWrap,
  ElemP,
  ContainerForm,
  ContainerRegister,
  H1Register,
  H1Title,
} from "./styles";
import LinkGoTo from "../../components/LinkGoTo";
import FormBarberRegister from "../../components/FormBarberRegister";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundRegister.jpg";
import Notification from "../../components/Notification";
import { motion } from 'framer-motion'

const BarberRegisterPage = () => {
  const init = pageVariants.in
  const out = pageVariants.out
  return (
    <motion.div
      key="barberRegisterPage"
      initial={out}
      animate={init}
      exit={out}
      variants={pageVariants}
      transition={pageTransition}
    >
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerForm>
          <ButtonWrap>
            <ButtonBackToHome />
          </ButtonWrap>
          <H1Title>Cadastre-se</H1Title>
          <FormBarberRegister />
          <ElemP>
            Ja possui uma conta? <LinkGoTo to={"/entrar"}>Entre Agora</LinkGoTo>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerRegister>
          <H1Register>
            Torne-se um membro e amplie sua rede de clientes
          </H1Register>
          <FooterPage />
        </ContainerRegister>
        <Notification />
      </GlobalContainer>
    </motion.div>
  );
};

export default BarberRegisterPage;

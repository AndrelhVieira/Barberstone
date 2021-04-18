import GlobalContainer from "../../components/GlobalContainer";
import FooterPage from "../../components/FooterPage";
import FooterForm from "../../components/FooterForm";
import ButtonBackToHome from "../../components/ButtonBackToHome";
import {
  ButtonWrap,
  ElemP,
  ContainerRegister,
  ContainerForm,
  H1Title,
  H1Register,
} from "./styles";
import LinkGoTo from "../../components/LinkGoTo";
import FormClientRegister from "../../components/FormClientRegister";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../images/backgroundRegister.jpg";
import Notification from "../../components/Notification";
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../../services/pageTransition'

const ClientRegisterPage = () => {
  const init = pageVariants.in
  const out = pageVariants.out
  const initial = pageVariants.initial
  return (
    <motion.div
      key="clientRegisterPage"
      initial={initial}
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
          <FormClientRegister />
          <ElemP>
            Ja possui uma conta? <LinkGoTo to={"/entrar"}>Entre Agora</LinkGoTo>
          </ElemP>
          <FooterForm />
        </ContainerForm>
        <ContainerRegister>
          <H1Register>
            Encontre aqui a melhor barbearia da sua região!
          </H1Register>
          <FooterPage />
        </ContainerRegister>
        <Notification />
      </GlobalContainer>
    </motion.div>
  );
};

export default ClientRegisterPage;

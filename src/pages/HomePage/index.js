import Menu from "../../components/Menu";
import Cover from "../../components/Cover";
import About from "../../components/About";
import ServicesProvided from "../../components/ServicesProvided";
import HowItWorks from "../../components/HowItWorks";
import RegisterSectionHomepage from "../../components/RegisterSectionHomepage";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { motion } from 'framer-motion'
import { menuLinkHome } from "../../services/menuData";
import { useState } from "react";
import { useEffect } from "react";
import { pageTransition, pageVariants } from '../../services/pageTransition'

const HomePage = () => {
  const init = pageVariants.in
  const out = pageVariants.out
  const initial = pageVariants.initial
  const [goRegister, setGoRegister] = useState(false);

  const isRegister = useLocation().state;

  useEffect(() => {
    setGoRegister(isRegister);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scroll = ()=>{
    setTimeout(() => {
      scroller.scrollTo("cadastrar", { offset: 10 })
    }, 400);
  }

  return (
    <>
      <Menu menuLink={menuLinkHome} isRegister />
      <motion.div
        key="HomePage"
        initial={initial}
        animate={init}
        exit={out}
        variants={pageVariants}
        transition={pageTransition}
      >
        {goRegister && scroll()}
        <Cover></Cover>
        <About id="sobre" />
        <ServicesProvided id="serviços" />
        <HowItWorks id="#como-funciona" />
        <RegisterSectionHomepage  />
        <Footer id="cadastrar" name="cadastrar"/>
      </motion.div>
    </>
  );
};

export default HomePage;

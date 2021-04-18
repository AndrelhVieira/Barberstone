import { Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "../pages/LoginPage";
import BarberRegisterPage from "../pages/BarberRegisterPage";
import ClientRegisterPage from "../pages/ClientRegisterPage";
import ClientPerfilPage from "../pages/ClientPerfilPage";
import BarberPerfilPage from "../pages/BarberPerfilPage";
import HomePage from "../pages/HomePage";
import Route from "./route";
import NotFound from "../pages/NotFoundPage";
import Barbershop from "../pages/Barbershop";
import BarberPage from "../pages/BarberPage";
import { Hidden } from "@material-ui/core";

const Routes = () => {

  const location = useLocation()
  return (
    <div style={{overflowX:'Hidden'}}>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
          <Route exact path="/" component={HomePage} />
          <Route path="/entrar" component={LoginPage} islogin />
          <Route path="/cadastro-barbearia" component={BarberRegisterPage} />
          <Route path="/cadastro-cliente" component={ClientRegisterPage} />
          <Route
            path="/perfil-cliente"
            component={ClientPerfilPage}
            isprivate
            isclient
          />
          <Route
            path="/perfil-barbearia"
            component={BarberPerfilPage}
            isprivate
            isbarber
          />
          <Route path="/detalhes-barbearia" component={BarberPage} isprivate isclient isbarber />
          <Route path="/barbearias" component={Barbershop} isprivate isclient isbarber />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Routes;

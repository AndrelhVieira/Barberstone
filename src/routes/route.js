import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import { motion } from 'framer-motion'

const Route = ({
  islogin,
  isprivate,
  isclient,
  isbarber,
  component: Component,
  ...rest
}) => {

  const isBarber = JSON.parse(localStorage.getItem("isBarber"));
  const isClient = JSON.parse(localStorage.getItem("isClient"));


  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isprivate === undefined ? (
            <Component />
        ) : isclient !== isClient && isbarber !== isBarber ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <Component />
        )
      }}
    />
  );
};

export default Route;

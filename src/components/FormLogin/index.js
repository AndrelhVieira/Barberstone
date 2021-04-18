import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useUser } from '../../providers/User'
import {
  FormComponent,
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
} from "../../styles/Form.styles";
import { notifyErrorLogin } from "../../services/notifyData";

const FormLogin = () => {
  const { setIsNew } = useUser()
  const [error] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("email inválido").required("campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "mínimo de 6 caracteres")
      .required("campo obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { sub } = jwt_decode(response.data.accessToken);
        localStorage.clear();
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("userId", JSON.stringify(sub));
        reset();
        getUser(sub);
      })
      .catch(() => {
        notifyErrorLogin();
      });
  };

  const getUser = async (userId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    await api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if(response.data.phone === undefined) {
          setIsNew(true)
        }
        if(!response.data.isBarber) {
          localStorage.setItem(
            "isClient",
            JSON.stringify(true)
          );
        }
        localStorage.setItem(
          "isBarber",
          JSON.stringify(response.data.isBarber) || false
        );
          goToProfile(response.data.isBarber);
      });
  };

  const goToProfile = (isBarber) => {
    if (!!isBarber) {
        history.push("/perfil-barbearia");
    } else {
        history.push("/perfil-cliente");
    }
  };

  return (
    <>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <DivInput>
          <Label>Email</Label>
          <Input name="email" ref={register} />
          {!!errors && <SpanError>{errors.email?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Senha</Label>
          <Input name="password" type="password" ref={register} />
          {!!errors && <SpanError>{errors.password?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <ButtonForm type="submit">Entrar</ButtonForm>
        </DivInput>
        <DivInput></DivInput>
        {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
      </FormComponent>
    </>
  );
};

export default FormLogin;

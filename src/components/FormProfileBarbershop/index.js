import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useState, useEffect } from "react";
import {
  SpanError,
  Input,
  ButtonForm,
  Label,
  DivInput,
  CheckboxLazer,
  LabelCheck,
  DivCheck,
  FormControl,
  ImgCheck,
  FormUpdate,
  LabelOptions,
  ButtonsDiv,
  CheckboxContainer,
  TextAreaInput,
} from "./styles";
import {
  notifyRegisterUpdate,
  notifyErrorClient,
} from "../../services/notifyData";
import Check from "../../images/check.svg";
import NoCheck from "../../images/noCheck.svg";
import { useUser } from '../../providers/User'

const FormProfileBarberShop = ({setRender}) => {
  const [error] = useState(false);
  const [user, setuser] = useState([]);
  const { isNew, setIsNew } = useUser();
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("token"));

  const [leisureOptions, setLeisureOptions] = useState({
    pool: false,
    barbecue: false,
    playGround: false,
    bar: false,
  });

  const schema = yup.object().shape({
    name: yup.string().required("campo Obrigatório!"),
    address: yup.string().required("campo Obrigatório!"),
    phone: yup.string().required("campo Obrigatório!"),
    zipCode: yup.string().required("campo Obrigatório!"),
    city: yup.string().required("campo Obrigatório!"),
    state: yup.string().required("campo Obrigatório!"),
    description: yup.string().required("campo Obrigatório!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    userData = { ...userData, leisureOptions };
    const u = userData
    if(!!u.address || !!u.phone || !!u.zipCode || !!u.city || !!u.state){
      isNew && setRender(true)
      setIsNew(false)
    }
    api
      .patch(`/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        notifyRegisterUpdate();
      })
      .catch((e) => {
        notifyErrorClient(e.response);
      });
  };

  const handleChange = (event) => {
    setLeisureOptions({
      ...leisureOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const getUser = () => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setuser(response.data);
        setLeisureOptions(response.data.leisureOptions);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pool, barbecue, playGround, bar } = leisureOptions;

  return (
    <>
      <FormUpdate onSubmit={handleSubmit(onSubmit)}>
        <DivInput>
          <Label>Novo Nome</Label>
          <Input name="name" ref={register} defaultValue={user.name} />
          {!!errors && <SpanError>{errors.name?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Endereço</Label>
          <Input name="address" ref={register} defaultValue={user.address} />
          {!!errors && <SpanError>{errors.address?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Telefone</Label>
          <Input name="phone" ref={register} defaultValue={user.phone} />
          {!!errors && <SpanError>{errors.phone?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>CEP</Label>
          <Input name="zipCode" ref={register} defaultValue={user.zipCode} />
          {!!errors && <SpanError>{errors.zipCode?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Cidade</Label>
          <Input name="city" ref={register} defaultValue={user.city} />
          {!!errors && <SpanError>{errors.city?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Estado</Label>
          <Input name="state" ref={register} defaultValue={user.state} />
          {!!errors && <SpanError>{errors.state?.message}</SpanError>}
        </DivInput>
        <DivInput>
          <Label>Descrição</Label>
          <TextAreaInput
            name="description"
            ref={register}
            style={{ height: "150px" }}
            isDesktop
            defaultValue={user.description}
          />
          {!!errors && <SpanError>{errors.description?.message}</SpanError>}
        </DivInput>
        <LabelOptions isDesktop>Opções de lazer disponíveis</LabelOptions>
        <CheckboxContainer>
          <DivCheck>
            <FormControl
              control={
                <CheckboxLazer
                  checked={pool}
                  onChange={handleChange}
                  name="pool"
                  icon={<ImgCheck src={NoCheck} alt="" />}
                  checkedIcon={<ImgCheck src={Check} alt="" />}
                />
              }
              label={<LabelCheck>sinuca</LabelCheck>}
            />
          </DivCheck>
          <DivCheck>
            <FormControl
              control={
                <CheckboxLazer
                  checked={barbecue}
                  onChange={handleChange}
                  name="barbecue"
                  icon={<ImgCheck src={NoCheck} alt="" />}
                  checkedIcon={<ImgCheck src={Check} alt="" />}
                />
              }
              label={<LabelCheck>Churrasco</LabelCheck>}
            />
          </DivCheck>
          <DivCheck>
            <FormControl
              control={
                <CheckboxLazer
                  checked={playGround}
                  onChange={handleChange}
                  name="playGround"
                  icon={<ImgCheck src={NoCheck} alt="" />}
                  checkedIcon={<ImgCheck src={Check} alt="" />}
                />
              }
              label={<LabelCheck>playground</LabelCheck>}
            />
          </DivCheck>
          <DivCheck>
            <FormControl
              control={
                <CheckboxLazer
                  checked={bar}
                  onChange={handleChange}
                  name="bar"
                  icon={<ImgCheck src={NoCheck} alt="" />}
                  checkedIcon={<ImgCheck src={Check} alt="" />}
                />
              }
              label={<LabelCheck>bar</LabelCheck>}
            />
          </DivCheck>
        </CheckboxContainer>
        <ButtonsDiv>
          <ButtonForm onClick={refreshPage}>Cancelar</ButtonForm>
          <ButtonForm type="submit">Salvar</ButtonForm>
        </ButtonsDiv>
        {error && <SpanError> Usuário ou senha incorretas! </SpanError>}
      </FormUpdate>
    </>
  );
};

export default FormProfileBarberShop;

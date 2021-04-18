import { ScissorsRate, Card } from "./styles";

import BarberIcon from "../../images/barbershop.svg";
import Star from "../../images/star.svg";
import { useEffect, useState } from "react";
import { useUsers } from "../../providers/Users";
import { useHistory } from "react-router-dom";

const CardBarber = ({ name, rating, id }) => {
  const history = useHistory();

  const [array, setArray] = useState([]);

  const { barberUsers } = useUsers();

  const redirect = (id) => {
    const barberUser = barberUsers.filter((e) => e.id === id);
    history.push({ pathname: "/detalhes-barbearia", state: barberUser[0] });
  };

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < rating; i++) {
      arr.push(i);
    }
    setArray(arr);
  }, [rating]);

  return (
    <>
      <Card 
        whileHover={{
          scale:1.05, 
          y:-1,
          boxShadow:'0 0 2px #FFF, 0 0 5px #FFF, 0 0 10px #FFF, 0 0 12px #bb8c4b, 0 0 14px #bb8c4b, 0 0 16px #bb8c4b, 0 0 18px #bb8c4b, 0 0 20px #bb8c4b'
        }}
        onClick={() => redirect(id)}
      >
        <img src={BarberIcon} alt="barber-icon" />
        <h4>{name}</h4>
        <ScissorsRate>
          {array.map((e, index) => (
            <img key={index} src={Star} alt="scissors-icon" />
          ))}
        </ScissorsRate>
      </Card>
    </>
  );
};

export default CardBarber;

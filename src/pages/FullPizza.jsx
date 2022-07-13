import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62bb2de5573ca8f83294a2ec.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>

      <h4>{pizza.price} р</h4>
    </div>
  );
};

export default FullPizza;

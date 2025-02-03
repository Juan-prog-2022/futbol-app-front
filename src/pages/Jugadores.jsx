import { useState, useEffect } from 'react';
import axios from 'axios';
import './Jugadores.css';

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/jugadores')
      .then(response => {
        setJugadores(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los jugadores', error);
      });
  }, []);

  return (
    <div>
      <h1>Jugadores</h1>
      <ul>
        {jugadores.map(jugador => (
          <li key={jugador.id}>
            {jugador.nombre} {jugador.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jugadores;

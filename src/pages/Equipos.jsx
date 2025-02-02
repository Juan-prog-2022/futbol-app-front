import { useState, useEffect } from "react";
import axios from "axios";
import './Equipos.css';

function Equipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    // Asegúrate de que la URL esté correcta y de que el backend esté corriendo
    axios.get('http://localhost:8080/api/equipos')
      .then(response => {
        console.log(response.data); // Verifica qué datos recibes en la respuesta
        setEquipos(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los equipos:", error);
      });
  }, []);

  return (
    <div className="equipos-container">
      <h1>Equipos</h1>
      <div className="equipos-list">
        {equipos.length === 0 ? (
          <p>No hay equipos disponibles</p>
        ) : (
          equipos.map((equipo) => (
            <div key={equipo.id} className="equipo-card">
              <h2>{equipo.nombre}</h2>
              {equipo.logo ? (
                <img src={equipo.logo} alt={equipo.nombre} className="equipo-logo" />
              ) : (
                <p>No logo available</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Equipos;



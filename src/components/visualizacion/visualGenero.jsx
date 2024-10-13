import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function VisualGenero() {
  const [VisualGenero, setVisualGenero] = useState([]);

  const getGeneros = async () => {
    const response = await fetch(
      "https://backend-production-bef4.up.railway.app/api/genero",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();
    setVisualGenero(data);
    if (!response.ok) {
      console.log("No se pudo obtener la información de los directores");
    }
  };

  const eliminar = (id) => {
    fetch(`https://backend-production-bef4.up.railway.app/api/genero/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setVisualGenero(VisualGenero.filter((genero) => genero._id !== id));
  };

  useEffect(() => {
    getGeneros();
  }, []);

  return (
    <div>
      <h1>Generos</h1>
      <table className="director-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Descripcion</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {VisualGenero.map((genero) => (
            <tr key={genero._id}>
              <td>{genero.nombre}</td>
              <td>{genero.estado}</td>
              <td>{genero.descripcion}</td>
              <td>{genero.fechaCreacion}</td>
              <td>{genero.fechaActualizacion}</td>
              <td>
                {<Link to={`/editar/api/genero/${genero._id}`}>Editar</Link>}
              </td>
              <td>
                {
                  <button type="button" onClick={() => eliminar(genero._id)}>
                    Borrar
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

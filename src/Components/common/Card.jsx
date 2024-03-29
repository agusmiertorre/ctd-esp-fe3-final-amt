import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentista }) => {

  const addFav = () => {
    // Obtener los favoritos actuales del LocalStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Verificar si la card ya está en favoritos
    if (!favorites.includes(dentista.id)) {
      // Agregar la card a la lista de favoritos
      const newFavorites = [...favorites, dentista.id];
      // Actualizar LocalStorage con la nueva lista de favoritos
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }

  return (
    <>
      
        <div className="card">
          <Link to={`/dentist/${dentista.id}`}>
            {/* Contenido de la card */}
            <img src="../../../public/images/doctor.jpg" className="imgDoc"/>
            <h1>{dentista.name}</h1>
            </Link>
            <p>{dentista.username}</p>
            <p>{dentista.id}</p>
          
          
          {/* Botón para agregar a favoritos */}
          <button onClick={addFav} className="favButton">Add fav</button>
        </div>
      
    </>
  );
};

export default Card;

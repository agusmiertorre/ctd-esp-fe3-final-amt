import React, { useState, useEffect } from "react";
import axios from "axios";

const Favs = () => {
  // Estado para almacenar las cards favoritas
  const [favoriteCards, setFavoriteCards] = useState([]);

  // Obtener las cards favoritas del LocalStorage al cargar la página
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const fetchFavoriteCards = async () => {
      const cardsData = await Promise.all(
        favorites.map(async (favoriteId) => {
          try {
            const response = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${favoriteId}`
            );
            return response.data;
          } catch (error) {
            console.error("Error fetching favorite card:", error);
            return null;
          }
        })
      );
      setFavoriteCards(cardsData.filter((card) => card !== null));
    };

    fetchFavoriteCards();
  }, []);

  // Función para eliminar una card de favoritos
  const removeFavorite = (id) => {
    const updatedFavorites = favoriteCards.filter((card) => card.id !== id);
    setFavoriteCards(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites.map((card) => card.id)));
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Renderizar las cards favoritas */}
        {favoriteCards.map((card) => (
          <div className="card" key={card.id}>
            <img src="../../../public/images/doctor.jpg" className="imgDoc" />
            <h3>{card.name}</h3>
            <p>{card.username}</p>
            <p>{card.email}</p>
            {/* Otros datos de la card */}
            <button onClick={() => removeFavorite(card.id)}>Remove from favs</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;

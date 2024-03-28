import React, { useEffect, useState } from "react";
import Card from "../Components/common/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setDentistas(res));
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Card from "../Components/common/Card";
import axios from "axios";
import "./Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => setDentistas(res.data));
  // }, []);
  useEffect(() => {
    const getDentistas = async () =>{
    let res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setDentistas(res.data)
    }
    getDentistas()

  }, []);
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => {
          return <Card dentista={dentista} key={dentista.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;

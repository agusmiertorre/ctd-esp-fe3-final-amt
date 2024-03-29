import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {

  const { id }= useParams()
  const [dentistaSelected, setDentistaSelected] = useState({})
  
  // useEffect(() => {
  //   axios
  //   .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then( res => setDentistaSelected(res.data))
  // }, [id]);


  useEffect(() => {
    const getDentistaSelected = async () =>{

    let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setDentistaSelected(res.data)
    }
    getDentistaSelected()
  }, [ id ]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <>
      <div className="cardDetail">
        <h1>Detail Dentist id </h1>
        <img src="../../public/images/doctor.jpg" className="imgDocDetail"/>
        <h1>Nombre: {dentistaSelected.name}</h1>
        <p>Email: {dentistaSelected.email}</p>
        <p>Phone: {dentistaSelected.phone}</p>
        <p>Website: {dentistaSelected.website}</p>

      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}
export default Detail;
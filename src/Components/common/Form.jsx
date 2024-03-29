import React, { useState } from 'react';

const Form = () => {
  const [mensaje, setMensaje] = useState({
    nombre: "",
    email: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      mensaje.nombre.trim().length >= 5 &&
      validateEmail(mensaje.email)
    ) {
      setMostrar(true);
      setErr(false);
      console.log(mensaje);
    } else {
      setErr(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMensaje({
      ...mensaje,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input 
          type="text" 
          placeholder="nombre" 
          name="nombre"
          value={mensaje.nombre}
          onChange={handleChange}
          className="input-field"
        />
        <label>Email: </label>
        <input 
          type="email" 
          placeholder="email" 
          name="email"
          value={mensaje.email}
          onChange={handleChange}
          className="input-field"
        />
        <button className='send'>Enviar</button>
        {err && <p style={{ color: 'red' }}>**Por favor verifique su información nuevamente**</p>}
        {mostrar && <p style={{ color: 'green' }}>**Gracias {mensaje.nombre}, te contactaremos cuando antes vía mail**</p>}
      </form>
    </div>
  );
};

export default Form;

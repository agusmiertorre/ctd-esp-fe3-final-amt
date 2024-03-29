import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useContextGlobal } from '../utils/global.context';
import "./navbar.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme  } = useContextGlobal();

  

const changeTheme = () => {
  setTheme(!theme);
  console.log(theme)
}
  return (
    <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/favs">Favs</Link>
          <button onClick={changeTheme}>Change theme</button>
        </ul>
        
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar
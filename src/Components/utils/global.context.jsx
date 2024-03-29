import { createContext, useState, useContext } from "react";

// export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo



  const [theme, setTheme] = useState(false);



  return (
    <ContextGlobal.Provider value={{theme, setTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export const useContextGlobal = () => useContext(ContextGlobal)

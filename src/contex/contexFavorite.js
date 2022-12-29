import { useState, createContext } from "react";

export const FavoriteContext = createContext([]);

const FavoriteContextProvider = ({ children }) => {
  const [value, setValue] = useState([]);

  return (
    <FavoriteContext.Provider value={{value, setValue}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;

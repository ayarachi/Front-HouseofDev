import { useState, createContext } from "react";

export const SearchContext = createContext([]);

const SearchContextProvider = ({ children }) => {
  const [value, setValue] = useState([]);

  return (
    <SearchContext.Provider value={{value, setValue}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

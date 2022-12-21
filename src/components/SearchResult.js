import React, { useState, useEffect,useContext } from "react";
import PropertiesCard from "./PropertiesCard";
import { SearchContext } from "../contex/contexSearch";

const SearchResult = () => {
  const {setValue, value} = useContext(SearchContext)

  return (

    <>
      {value.length === 0 ?<h1> Sin resultados</h1> :value.map((property) => (
        <PropertiesCard key={property.id} property={property} />
      ))}
    </>
  )
}

export default SearchResult
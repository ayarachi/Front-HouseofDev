import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddProperty = () => {

  // const addProper = () => {
  //   axios
  //     .delete(`/api/properties`)
  //     .then(() => alert(" Propiedad agregada"))
  //     .catch((err) => console.log(" no se agrego propiedad", err));
  // };



  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <TextField id="outlined-basic" label="Typo" variant="outlined" />
      <TextField id="outlined-basic" label="Barrio" variant="outlined" />
      <TextField id="outlined-basic" label="N de habitaciones" variant="outlined" />
      
      
      
    </Box>
  );
};

export default AddProperty;

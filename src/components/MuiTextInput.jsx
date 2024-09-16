import { TextField } from "@mui/material";
import React from "react";

const MuiTextInput = ({ onChange, disabled }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="כתובת מגורים"
      variant="outlined"
      onChange={handleChange}
      disabled={disabled}
      sx={{ width: "100%", bgcolor: disabled ? "#f0f0f0" : "" }}
      required
      inputProps={{
        minLength: 4,
      }}
    />
  );
};

export default MuiTextInput;

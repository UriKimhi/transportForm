import { FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import React from "react";

const MuiRadio = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Stack>
      <Typography sx={{ textAlign: "center", mb: 1 }}>מגיע/ה בהסעה</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "row", gap: 4 }}
      >
        <FormControlLabel value="yes" control={<Radio />} label="כן" />
        <FormControlLabel value="no" control={<Radio />} label="לא" />
      </RadioGroup>
    </Stack>
  );
};

export default MuiRadio;

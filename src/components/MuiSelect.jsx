import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MuiSelect = ({ labelName, id, options, onChange, value, disabled }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id={id}>{labelName}</InputLabel>

      <Select
        labelId={id.toString()}
        id={id.toString()}
        value={value}
        label={labelName}
        onChange={handleChange}
        required
        disabled={disabled}
        sx={{ bgcolor: disabled ? "#f0f0f0" : "" }}
      >
        {options?.map((option) => (
          <MenuItem key={option.key} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MuiSelect;

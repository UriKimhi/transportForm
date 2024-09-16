import { Button, FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import MuiSelect from "./MuiSelect";
import { cities, departments } from "../utils/data";
import MuiRadio from "./MuiRadio";
import MuiTextInput from "./MuiTextInput";
import { useUserContext } from "../context";
import axios from "axios";
import { apiBaseUrl } from "../App";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { department } = useUserContext();

  const urlParams = new URLSearchParams(window.location.search);
  const UUID = urlParams.get("uuid");

  const navigate = useNavigate();

  const [depr, setDepr] = useState(department);
  const [city, setCity] = useState("");
  const [comeWith, setComeWith] = useState("yes");
  const [address, setAddress] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(apiBaseUrl + "/insertRideDetails", {
        city,
        isWantRide: comeWith,
        address,
        uuid: UUID,
      });

      if (JSON.stringify(res.data) === "true") {
        navigate("/success");
      }
    } catch (error) {
      console.log(error || "Error insert user ride details");
    }
  };

  return (
    <FormControl
      component="form"
      onSubmit={onSubmit}
      fullWidth
      sx={{
        display: "flex",
        gap: 6,
        mb: 2,
        maxWidth: "500px",
        alignItems: "center",
        justifyContent: "center",
        mt: 6,
      }}
    >
      <MuiSelect id={"dep"} labelName="מחלקה" options={departments} onChange={setDepr} value={depr} />
      <MuiRadio onChange={setComeWith} />
      <MuiSelect id={"city"} labelName="עיר" options={cities} onChange={setCity} value={city} disabled={comeWith === "no"} />
      <MuiTextInput onChange={setAddress} disabled={comeWith === "no"} />
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Button type="submit" variant="contained" sx={{ padding: "8px 60px" }}>
          אישור
        </Button>
      </Stack>
    </FormControl>
  );
};

export default Form;

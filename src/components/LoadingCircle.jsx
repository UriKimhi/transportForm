import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function LoadingCircle() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "30vh",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}

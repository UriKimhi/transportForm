import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useUserContext } from "../context";
import ErrorPage from "./ErrorPage";

const SuccessPage = () => {
  const { isExist } = useUserContext();

  console.log(isExist);

  if (isExist == false) {
    return <ErrorPage />;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        p: 3,
      }}
    >
      <Box mb={2}>
        <Typography variant="h1" color="success.main">
          🎉
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant="h4"
          color="textPrimary"
          bgcolor="beige"
          p={2}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
        >
          תשובותיך נשלחו בהצלחה!
        </Typography>
      </Box>
    </Container>
  );
};

export default SuccessPage;

import React from "react";
import Form from "../components/Form";
import { Box, Container, Stack } from "@mui/material";
import Header from "../images/header.png";
import Footer from "../components/Footer";
import { useUserContext } from "../context";
import LoadingCircle from "../components/LoadingCircle";

const HomePage = () => {
  const { isExist } = useUserContext();

  if (!isExist) {
    return <LoadingCircle />;
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <Box
        component="img"
        src={Header}
        alt=""
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "60%",
            lg: "70%",
            xl: "60%",
          },
          maxWidth: "100%",
          height: "auto",
          display: "block",
          mx: "auto",
        }}
      />
      <Stack
        sx={{
          width: {
            xs: "80%",
            sm: "80%",
            md: "60%",
            lg: "70%",
            xl: "60%",
          },
          alignItems: "center",
          boxShadow: { xs: "", lg: "rgba(149, 157, 165, 0.2) 0px 8px 24px;" },
          mb: 5,
        }}
      >
        <Form />
      </Stack>
      <Footer />
    </Container>
  );
};

export default HomePage;

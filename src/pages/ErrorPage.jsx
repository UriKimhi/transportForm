import { Box, Container, Typography } from "@mui/material";

const ErrorPage = () => {
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
        <Typography variant="h3" color="textSecondary">
          משתמש לא נמצא
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" color="textSecondary">
          😕
        </Typography>
      </Box>
      <Box mb={2} mt={2}>
        <Typography variant="h6" color="textSecondary">
          אנא נסה שוב מאוחר יותר
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorPage;

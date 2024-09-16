import { Box } from "@mui/material";
import FooterImg from "../images/ordaLogo.png";

const Footer = () => {
  return (
    <Box
      component="img"
      src={FooterImg}
      alt="footerImg"
      sx={{
        width: {
          xs: "40%",
          sm: "30%",
          md: "30%",
          lg: "30%",
          xl: "20%",
        },
        display: "block",
      }}
    />
  );
};

export default Footer;

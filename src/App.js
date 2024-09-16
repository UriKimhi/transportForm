import "./App.css";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { RouterProvider } from "react-router-dom";
import { router, router2 } from "./router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "./context";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const apiBaseUrl = window.location.hostname === "localhost" ? "" : "/api";

function App() {
  const [userExist, setUserExist] = useState(true);

  const { setDepartment, setIsExist } = useUserContext();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const UUID = urlParams.get("uuid");

    const fetchUserData = async () => {
      try {
        const res = await axios.post(apiBaseUrl + "/vecationCheckUuid", {
          uuid: UUID,
        });
        setUserExist(true);
        setIsExist(true);
        setDepartment(res.data);
      } catch (err) {
        setUserExist(false);
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <RouterProvider router={userExist ? router : router2}>
          <Stack className="App"></Stack>
        </RouterProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;

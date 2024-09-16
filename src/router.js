import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SuccessPage from "./pages/SuccessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);
export const router2 = createBrowserRouter([
  {
    path: "/",
    element: <ErrorPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

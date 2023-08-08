import { createBrowserRouter } from "react-router-dom";
import { StarterPage } from "./StarterPage";
import { InfoTable } from "./InfoTable";
import { EnchantingPage } from "./EnchantingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StarterPage />,
  },
  { path: "/enchant", element: <EnchantingPage /> },
  { path: "/info", element: <InfoTable /> },
]);

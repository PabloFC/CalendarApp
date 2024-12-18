import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import CaledarApp from "./CaledarApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaledarApp />
  </StrictMode>
);

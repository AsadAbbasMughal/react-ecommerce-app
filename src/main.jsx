import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* ✅ Now, routing is handled inside App.jsx */}
  </StrictMode>
);

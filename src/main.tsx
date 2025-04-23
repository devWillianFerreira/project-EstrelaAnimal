import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserProvider from "./context/userContext.tsx";
import CardProvider from "./context/cartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </UserProvider>
  </StrictMode>
);

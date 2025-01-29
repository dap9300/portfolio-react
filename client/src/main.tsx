import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  console.error("Root element not found. Make sure there is a div with id 'root' in index.html");
  throw new Error("Root element not found");
}

try {
  const app = createRoot(root);

  app.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error("Failed to render app:", error);
}
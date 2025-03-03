import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import "./index.css";

console.log("🚀 Application starting..."); // Debug log

const renderApp = async () => {
  try {
    const root = document.getElementById("root");
    console.log("📍 Looking for root element...");

    if (!root) {
      throw new Error("Root element not found. Make sure there is a div with id 'root' in index.html");
    }
    console.log("✅ Root element found");

    // Create and render root
    console.log("🎨 Creating React root...");
    const app = createRoot(root);

    console.log("🖼️ Rendering application...");
    app.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    console.log("✨ Application rendered successfully!");
  } catch (error) {
    console.error("❌ Failed to render application:", error);
    // Display error in the page
    document.body.innerHTML = `
      <div style="
        padding: 20px;
        margin: 20px;
        border: 2px solid red;
        border-radius: 4px;
        font-family: system-ui, -apple-system, sans-serif;
      ">
        <h2 style="color: red;">Application Error</h2>
        <pre style="background: #f5f5f5; padding: 10px; overflow: auto;">
          ${error instanceof Error ? error.stack : String(error)}
        </pre>
      </div>
    `;
  }
};

// Initialize the application
renderApp();
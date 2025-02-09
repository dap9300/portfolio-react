// server/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerRoutes } from "./routes";

// Carica variabili d'ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware per JSON
app.use(express.json());

// 🌍 Configurazione CORS
const allowedOrigins = [
  "http://localhost:3000", // Webapp React in locale
  "https://dap00.app.n8n.cloud" // Webhook esterno
];

app.use(cors({
  origin: (origin, callback) => {
    console.log(`🔍 CORS check per origin: ${origin}`);
    if (!origin || allowedOrigins.includes(origin)) {
      console.log(`✅ Origin permesso: ${origin}`);
      callback(null, true);
    } else {
      console.log(`🚨 CORS Blocked: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 📌 Registra le API definite in routes.ts
registerRoutes(app);

// 🌟 Rotta principale per verificare lo stato del server
app.get("/", (req, res) => {
  res.send("🚀 Server is running on port 5000!");
});

// 🚀 Avvia il server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

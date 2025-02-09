// server/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerRoutes } from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Cambiato a 5000

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        console.log(`🔍 CORS check per origin: ${origin}`);

        const allowedOrigins = [
            "http://localhost:3000", // La webapp React gira su questa porta
            "https://dap00.app.n8n.cloud"
        ];

        if (!origin || allowedOrigins.includes(origin)) {
            console.log(`✅ Origin permesso: ${origin}`);
            callback(null, true);
        } else {
            console.log(`🚨 CORS Blocked: ${origin}`);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 📌 Aggiunge le rotte dal file routes.ts
registerRoutes(app);

app.get("/", (req, res) => {
    res.send("🚀 Server is running on port 5000!");
});

// 🚀 Avvia il server sulla porta 5000
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

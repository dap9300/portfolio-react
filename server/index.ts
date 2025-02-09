// server/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        console.log(`🔍 CORS check for origin: ${origin}`);

        const allowedOrigins = [
            "http://localhost:3000",
            "http://localhost:5000",
            undefined // Allow requests with no origin (like mobile apps or curl requests)
        ];

        if (allowedOrigins.includes(origin)) {
            console.log(`✅ Origin allowed: ${origin}`);
            callback(null, true);
        } else {
            console.log(`🚨 CORS Blocked: ${origin}`);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 📌 Aggiunge le rotte dal file routes.ts
const server = registerRoutes(app);

// Setup Vite in development mode
if (process.env.NODE_ENV !== 'production') {
    setupVite(app, server).catch(console.error);
}

// Health check endpoint
app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});

server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
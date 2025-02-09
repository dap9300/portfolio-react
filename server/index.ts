// server/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3000);  // Ensure PORT is a number

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        console.log(`🔍 CORS check for origin: ${origin}`);

        // Development and production origins
        const allowedOrigins = [
            "http://localhost:5000",
            "http://0.0.0.0:5000",
            undefined // Allow requests with no origin (like mobile apps or curl requests)
        ];

        // Allow all Replit domains
        if (origin?.includes('.replit.dev')) {
            console.log(`✅ Replit domain allowed: ${origin}`);
            return callback(null, true);
        }

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

// 📌 Add routes from routes.ts
const server = registerRoutes(app);

// Setup Vite in development mode
if (process.env.NODE_ENV !== 'production') {
    setupVite(app, server).catch(console.error);
}

// Health check endpoint
app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
});
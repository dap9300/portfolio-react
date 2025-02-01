import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite"; // Rimosso log
import cors from "cors";

// Get the Replit host from the environment
const REPLIT_HOST = process.env.REPL_SLUG || '4537662a-f129-484e-a445-6e437c3a47c5-00-2ypdx2swfmqm1.kirk.replit.dev';

// Configure environment variables for Vite
process.env.VITE_ALLOW_REPLIT_HOST = REPLIT_HOST;
process.env.VITE_DEV_SERVER_URL = `https://${REPLIT_HOST}`;
process.env.HOST = '0.0.0.0';

const app = express();

// Configure CORS with expanded origins
const corsOptions = {
  origin: [
    `https://${REPLIT_HOST}`,
    `http://${REPLIT_HOST}`,
    'http://localhost:5000',
    'http://0.0.0.0:5000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handling middleware - Mostra solo errori in console
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error("❌ Error:", err.message);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
});

(async () => {
  const server = registerRoutes(app);

  if (process.env.NODE_ENV !== 'production') {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;

  server.listen(Number(PORT), '0.0.0.0', () => {
    console.error(`✅ Server running on port ${PORT}`);
    console.error(`🌍 Replit host: ${REPLIT_HOST}`);
  });
})();

import type { Express } from "express";
import { createServer, type Server } from "http";
import cors from "cors";

export function registerRoutes(app: Express): Server {
  // Enable CORS for all routes
  app.use(cors({
    origin: true,
    credentials: true
  }));

  // Add health check endpoint
  app.get('/api/health', (_, res) => {
    res.json({ status: 'ok' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
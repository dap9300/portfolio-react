import type { Express } from "express";
import { createServer, type Server } from "http";
import cors from "cors";

export function registerRoutes(app: Express): Server {
  // Enable CORS for all routes with specific configuration for Replit
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow any Replit domain and localhost
      if (origin.endsWith('.replit.dev') || origin.includes('localhost')) {
        return callback(null, true);
      }
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  // Add health check endpoint
  app.get('/api/health', (_, res) => {
    res.json({ status: 'ok' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
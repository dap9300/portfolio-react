// server/routes.ts
import express from "express";
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import cors from "cors";
import fetch from "node-fetch"; // Assicurati di aver installato `node-fetch`
import { db } from "@db/index"; // Assumiamo che il database sia necessario
import { users } from "@db/schema"; // Se servono dati utente

// 🔹 URL del webhook n8n (SOSTITUISCI con il tuo effettivo)
const n8nWebhookUrl = "https://dap00.app.n8n.cloud/webhook-test/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04/send-message";

export function registerRoutes(app: Express): Server {
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || origin.endsWith('.replit.dev') || origin.includes('localhost')) {
        return callback(null, true);
      }
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  // 📌 Webhook Endpoint per n8n (riceve messaggi)
  app.post("/api/webhook", async (req: Request, res: Response) => {
    try {
      console.log("📩 Webhook ricevuto:", req.body);

      // Opzionale: Salva il messaggio nel database
      // await db.insert(messages).values({ text: req.body.message });

      res.json({ success: true, message: "Webhook ricevuto con successo!" });
    } catch (error) {
      console.error("❌ Errore Webhook:", error);
      res.status(500).json({ error: "Errore nel gestire il webhook." });
    }
  });

  // 📌 Route per inviare messaggi al workflow n8n
  app.post("/api/send-message", async (req: Request, res: Response) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Messaggio richiesto." });
      }

      console.log(`📨 Inviando messaggio a n8n: ${message}`);

      // 🔹 Invia il messaggio a n8n
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`Errore API n8n: ${response.statusText}`);
      }

      const data = await response.json();

      console.log("✅ Risposta n8n:", data);
      res.json({ success: true, reply: data });
    } catch (error) {
      console.error("❌ Errore invio messaggio:", error);
      res.status(500).json({ error: "Errore nell'inviare il messaggio." });
    }
  });

  // Health check
  app.get('/api/health', (_, res) => {
    res.json({ status: 'ok' });
  });

  return createServer(app);
}

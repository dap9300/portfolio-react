// server/routes.ts
import { Express } from "express";
import { createServer } from "http";
import fetch from "node-fetch";

const n8nWebhookUrl =
  "https://dap00.app.n8n.cloud/webhook-test/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04/send-message";

export function registerRoutes(app: Express) {
  app.post("/api/webhook", async (req, res) => {
    try {
      console.log("📩 Webhook ricevuto:", req.body);
      res.json({ success: true, message: "Webhook ricevuto con successo!" });
    } catch (error) {
      console.error("❌ Errore Webhook:", error);
      res.status(500).json({ error: "Errore nel gestire il webhook." });
    }
  });

  app.post("/api/send-message", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Messaggio richiesto." });
      }

      console.log(`📨 Inviando messaggio a n8n: ${message}`);
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

  app.get("/api/health", (_, res) => {
    res.json({ status: "ok" });
  });

  return createServer(app);
}

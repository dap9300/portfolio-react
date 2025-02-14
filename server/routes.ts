// server/routes.ts
import express from "express";
import axios from "axios";

const router = express.Router();

// Health check
router.get("/health", (_, res) => {
  res.json({ status: "ok", service: "routes", timestamp: new Date().toISOString() });
});

// Chat route that forwards requests to n8n
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("Received message:", message);

    const webhookUrl = "https://dap00.app.n8n.cloud/webhook/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04";
    console.log("Forwarding to n8n webhook:", webhookUrl);

    const n8nResponse = await axios.post(webhookUrl, { message });

    console.log("Response from n8n:", n8nResponse.data);

    res.json(n8nResponse.data);
  } catch (error: any) {
    console.error("Error forwarding request to n8n:", error.message);
    res.status(500).json({
      error: "Internal server error",
      details: error.response?.data || error.message,
    });
  }
});

// ✅ Function to register routes in Express
export function registerRoutes(app: express.Express) {
  app.use("/api", router);
  console.log("✅ Routes registered successfully");
}

// ✅ Default export of the router
export default router;

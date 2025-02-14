// WebhookChat.tsx
import { useEffect, useState } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const WebhookChat = () => {
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const initializeChat = async () => {
      const storedSessionId = localStorage.getItem("chatSessionId") || `session-${Date.now()}`;
      localStorage.setItem("chatSessionId", storedSessionId);
      setSessionId(storedSessionId);
      console.log("Initializing WebhookChat with sessionId:", storedSessionId);

      createChat({
        webhookUrl: "https://dap00.app.n8n.cloud/webhook/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04",
        target: "#n8n-chat",
        mode: "window",
        showWelcomeScreen: true,
        method: "POST",
        body: JSON.stringify({
          sessionId: storedSessionId,
          chatInput: "Ciao! Come posso aiutarti?"
        }),
        headers: {
          "Content-Type": "application/json",
        },
        debug: true,
        timeout: 120000,
        onError: (error) => {
          console.error("Chat Error:", error);
        },
        onResponse: (response) => {
          // Trasformare la risposta prima che venga mostrata nella chat
          try {
            // Estrarre solo il contenuto della risposta
            const parsedResponse = typeof response === 'string' 
              ? JSON.parse(response) 
              : response;

            // Restituire solo il testo della risposta
            return parsedResponse.response;
          } catch (error) {
            console.error("Error processing response:", error);
            return response; // Fallback alla risposta originale in caso di errore
          }
        }
      }).catch(error => {
        console.error("Failed to initialize chat:", error);
      });
    };

    initializeChat();
  }, []);

  return <div id="n8n-chat" />;
};

export default WebhookChat;
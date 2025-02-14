import { useEffect, useState } from "react";
import "@n8n/chat/style.css";
import { createChat, ChatOptions } from "@n8n/chat";

const WebhookChat = () => {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const initializeChat = async () => {
      const storedSessionId = localStorage.getItem("chatSessionId") || `session-${Date.now()}`;
      localStorage.setItem("chatSessionId", storedSessionId);
      setSessionId(storedSessionId);
      console.log("Initializing WebhookChat with sessionId:", storedSessionId);

      try {
        const chatInstance = await createChat({
          webhookUrl: "https://dap00.app.n8n.cloud/webhook/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04",
          target: "#n8n-chat",
          mode: "window",
          showWelcomeScreen: true,
          headers: {
            "Content-Type": "application/json",
          },
          debug: true,
          timeout: 120000,
          onError: (error: unknown) => {
            console.error("Chat Error:", error);
          },
          onResponse: (response: unknown) => {
            try {
              const parsedResponse = typeof response === 'string' 
                ? JSON.parse(response) 
                : response;
              return (parsedResponse as { response: string }).response;
            } catch (error) {
              console.error("Error processing response:", error);
              return response;
            }
          }
        });

        // Inizializza la chat con il messaggio di benvenuto
        if (chatInstance) {
          chatInstance.send(JSON.stringify({
            sessionId: storedSessionId,
            chatInput: "Ciao! Come posso aiutarti?"
          }));
        }
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      }
    };

    initializeChat();
  }, []);

  return <div id="n8n-chat" />;
};

export default WebhookChat;
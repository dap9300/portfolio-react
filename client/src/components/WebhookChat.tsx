// client/src/components/WebhookChat.tsx
import React, { useEffect, useState } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const WebhookChat = () => {
  const [sessionId, setSessionId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        setIsLoading(true);
        const storedSessionId = localStorage.getItem("chatSessionId") || `session-${Date.now()}`;
        localStorage.setItem("chatSessionId", storedSessionId);
        setSessionId(storedSessionId);
        console.log("Initializing WebhookChat with sessionId:", storedSessionId);

        await createChat({
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
            setError(error instanceof Error ? error : new Error(String(error)));
          },
          onResponse: (response) => {
            try {
              const parsedResponse = typeof response === 'string' 
                ? JSON.parse(response) 
                : response;
              return parsedResponse.response;
            } catch (error) {
              console.error("Error processing response:", error);
              return response;
            }
          }
        });
      } catch (error) {
        console.error("Failed to initialize chat:", error);
        setError(error instanceof Error ? error : new Error('Failed to initialize chat'));
      } finally {
        setIsLoading(false);
      }
    };

    initializeChat();
  }, []);

  if (error) {
    return (
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-4">
        <div className="text-red-500">
          <h3 className="font-semibold">Errore Chat</h3>
          <p>{error.message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Riprova
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-white rounded-lg shadow-lg">
      <div id="n8n-chat" className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="text-gray-600">Inizializzazione chat...</div>
        </div>
      )}
    </div>
  );
};

export default WebhookChat;
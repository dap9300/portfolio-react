// client/src/components/ui/WebhookChat.tsx
import React, { useState } from "react";

const WebhookChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await fetch(
        "https://dap00.app.n8n.cloud/webhook/56a1ff7c-ab7d-4f24-8f17-c9af3849ab04",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();
      console.log("Risposta Webhook:", data);
      setMessage(""); // Resetta il campo dopo l'invio
    } catch (error) {
      console.error("Errore nell'invio:", error);
    }
  };

  return (
    <>
      {/* Pulsante per aprire la chat */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Modal della chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 bg-white shadow-lg p-4 rounded-lg w-72 border border-gray-200">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Scrivi un messaggio..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="mt-2 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
          >
            Invia
          </button>
          <button
            onClick={toggleChat}
            className="mt-2 text-sm text-gray-500 w-full"
          >
            Chiudi
          </button>
        </div>
      )}
    </>
  );
};

export default WebhookChat;
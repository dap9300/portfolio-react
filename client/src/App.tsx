  // WebhookChat.tsx
  import { useEffect, useState } from "react";
  import "@n8n/chat/style.css";
  import { createChat } from "@n8n/chat";

  // Internal Error Boundary Component
  class ChatErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error: Error | null }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error) {
      console.error("Chat Error:", error);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="fixed bottom-4 right-4 p-4 bg-white rounded shadow border border-red-200">
            <h3 className="text-lg font-semibold mb-2">Chat Error</h3>
            <p className="text-sm text-gray-600 mb-2">
              {this.state.error?.message || 'An error occurred in the chat component'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reload Chat
            </button>
          </div>
        );
      }

      return this.props.children;
    }
  }

  // Chat Component
  const ChatComponent = () => {
    const [sessionId, setSessionId] = useState("");
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const initializeChat = async () => {
        try {
          setIsLoading(true);
          const storedSessionId = localStorage.getItem("chatSessionId") || `session-${Date.now()}`;
          localStorage.setItem("chatSessionId", storedSessionId);
          setSessionId(storedSessionId);

          console.log("Initializing WebhookChat with sessionId:", storedSessionId);

          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

          try {
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
            signal: controller.signal,
          });

          setIsLoading(false);
          clearTimeout(timeoutId);
        } catch (err) {
          console.error("WebhookChat Error:", err);
          setError(err instanceof Error ? err : new Error('Failed to initialize chat'));
          setIsLoading(false);
        }
      };

      initializeChat();
    }, []);

    if (error) {
      return (
        <div className="p-4 text-red-500">
          Error initializing chat: {error.message}
        </div>
      );
    }

    return (
      <>
        <div id="n8n-chat" />
        {isLoading && (
          <div className="fixed bottom-4 right-4 p-4 bg-white rounded shadow">
            Initializing chat...
          </div>
        )}
      </>
    );
  };

  // Main WebhookChat component with integrated error boundary
  const WebhookChat = () => {
    return (
      <ChatErrorBoundary>
        <ChatComponent />
      </ChatErrorBoundary>
    );
  };

  export default WebhookChat;
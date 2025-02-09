// client/src/components/shared/ChatWidget.tsx
import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white shadow-xl rounded-2xl p-4 w-80 h-96">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Chat Support</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <p className="text-sm text-gray-500">Scrivi il tuo messaggio...</p>
          </div>
        </div>
      )}

      <button
        className="bg-blue-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center hover:bg-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

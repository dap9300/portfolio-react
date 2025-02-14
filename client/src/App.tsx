// client/src/App.tsx
import React, { useEffect } from 'react';
import { DynamicBackground } from './DynamicBackground';
import WebhookChat from './WebhookChat';

// Stili globali necessari
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const appStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden'
};

const contentStyles: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  height: '100%'
};

const App: React.FC = () => {
  // Inietta gli stili globali
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={appStyles}>
      <DynamicBackground />
      <div style={contentStyles}>
        {/* Altri componenti dell'applicazione */}
      </div>
      <WebhookChat />
    </div>
  );
};

export default App;
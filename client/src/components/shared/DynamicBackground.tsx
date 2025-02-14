// client/src/components/shared/DynamicBackground.tsx
import React, { useEffect, useRef } from 'react';

// Stili CSS inline per garantire il corretto dimensionamento iniziale
const containerStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: '#f8f9fa',
  zIndex: 0
};

const canvasStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'block'
};

const DynamicBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const pointsRef = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    alpha: number;
  }>>([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Forza il dimensionamento iniziale del container
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Imposta le dimensioni del canvas
    const setCanvasSize = () => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Inizializza i punti con le dimensioni corrette
    const initPoints = () => {
      const points = [];
      for (let i = 0; i < 70; i++) {
        points.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
      pointsRef.current = points;
    };

    // Setup iniziale
    setCanvasSize();
    initPoints();

    // Funzione di animazione
    const animate = () => {
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      // Clear canvas
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Update and draw points
      pointsRef.current.forEach((point, i) => {
        // Aggiorna posizione
        point.x += point.vx;
        point.y += point.vy;

        // Gestione collisioni con i bordi
        if (point.x < 0 || point.x > rect.width) {
          point.vx *= -1;
          point.x = point.x < 0 ? 0 : rect.width;
        }
        if (point.y < 0 || point.y > rect.height) {
          point.vy *= -1;
          point.y = point.y < 0 ? 0 : rect.height;
        }

        // Disegna connessioni
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const otherPoint = pointsRef.current[j];
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.15 * (1 - distance / 150);
            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        }

        // Disegna punto
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(128, 128, 128, ${point.alpha})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Gestione resize
    const handleResize = () => {
      const newRect = container.getBoundingClientRect();
      rect.width = newRect.width;
      rect.height = newRect.height;
      setCanvasSize();
      initPoints();
    };

    // Avvia animazione immediatamente
    requestAnimationFrame(() => {
      setCanvasSize();
      initPoints();
      animate();
    });

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} style={containerStyles}>
      <canvas ref={canvasRef} style={canvasStyles} />
    </div>
  );
};

export { DynamicBackground };
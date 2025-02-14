import React, { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);
  const FPS = 60;
  const frameInterval = 1000 / FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Funzione per gestire il dimensionamento del canvas
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      // Imposta le dimensioni CSS del canvas immediatamente
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      // Imposta le dimensioni del buffer del canvas
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      // Scala il contesto per supportare schermi Retina
      ctx.scale(dpr, dpr);

      // Forza un render immediato dello sfondo
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, displayWidth, displayHeight);
    };

    // Esegui il dimensionamento immediatamente
    setCanvasSize();

    // Crea i punti solo dopo aver impostato le dimensioni corrette
    const points = Array.from({ length: 70 }, () => ({
      x: Math.random() * (canvas.width / window.devicePixelRatio),
      y: Math.random() * (canvas.height / window.devicePixelRatio),
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.5) * 2.5,
      alpha: Math.random() * 0.4 + 0.1
    }));

    // Gestione del resize con throttling invece di debounce
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          setCanvasSize();
          resizeTimeout = undefined;
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);

    const animate = (timestamp: number) => {
      if (timestamp - lastFrameTimeRef.current < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > displayWidth) {
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > displayHeight) {
          point.vy *= -1;
        }

        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j];
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

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(128, 128, 128, ${point.alpha})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Avvia l'animazione
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"
      style={{ position: 'fixed', width: '100%', height: '100%' }}
    />
  );
};

export { DynamicBackground };
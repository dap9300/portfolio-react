import React, { useLayoutEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const lastFrameTimeRef = useRef<number>(0);
  const FPS = 60;
  const frameInterval = 1000 / FPS;

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = document.documentElement.getBoundingClientRect();
      const vw = rect.width;
      const vh = rect.height;

      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      ctx.scale(dpr, dpr);

      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, vw, vh);
    };

    setCanvasSize();

    const points = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.5) * 2.5,
      alpha: Math.random() * 0.4 + 0.1
    }));

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const animate = (timestamp: number) => {
      if (timestamp - lastFrameTimeRef.current < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, vw, vh);

      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > vw) point.vx *= -1;
        if (point.y < 0 || point.y > vh) point.vy *= -1;

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

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#f8f9fa',
        willChange: 'transform',
        transform: 'translateZ(0)',
        opacity: 1,
        transition: 'none'
      }}
    />
  );
};

export { DynamicBackground };
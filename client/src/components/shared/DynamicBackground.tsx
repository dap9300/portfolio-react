import React, { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  // Riferimenti React per mantenere valori attraverso i re-render
  const canvasRef = useRef<HTMLCanvasElement>(null);                // Riferimento al canvas DOM element
  const animationFrameRef = useRef<number>();                       // Memorizza l'ID dell'animation frame per la cancellazione
  const lastFrameTimeRef = useRef<number>(0);                       // Tiene traccia dell'ultimo frame per il controllo FPS

  // Configurazione del frame rate
  const FPS = 60;                                                   // Target di 60 frame al secondo
  const frameInterval = 1000 / FPS;                                 // Intervallo in ms tra i frame (16.67ms)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Inizializzazione del context 2D con alpha disabilitato per migliori performance
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Creazione array di punti con proprietà casuali
    const points = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,                             // Posizione X casuale all'interno del canvas
      y: Math.random() * canvas.height,                            // Posizione Y casuale all'interno del canvas
      radius: Math.random() * 2 + 1,                              // Raggio casuale tra 1 e 3 pixels
      vx: (Math.random() - 0.5) * 2.5,                            // Velocità X casuale tra -1.25 e 1.25
      vy: (Math.random() - 0.5) * 2.5,                            // Velocità Y casuale tra -1.25 e 1.25
      alpha: Math.random() * 0.4 + 0.1                            // Opacità casuale tra 0.1 e 0.5
    }));

    // Funzione per gestire il ridimensionamento del canvas con supporto Retina
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;                    // Device Pixel Ratio per supporto Retina
      canvas.width = window.innerWidth * dpr;                      // Larghezza fisica del canvas
      canvas.height = window.innerHeight * dpr;                    // Altezza fisica del canvas
      canvas.style.width = `${window.innerWidth}px`;              // Larghezza CSS del canvas
      canvas.style.height = `${window.innerHeight}px`;            // Altezza CSS del canvas
      ctx.scale(dpr, dpr);                                        // Scala il context per supporto Retina
    };

    setCanvasSize();

    // Gestione del resize con debounce per evitare troppi ricalcoli
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);                                // Cancella il timeout precedente
      resizeTimeout = setTimeout(setCanvasSize, 200);             // Aspetta 200ms prima di ridimensionare
    };

    window.addEventListener('resize', handleResize);

    // Funzione principale di animazione
    const animate = (timestamp: number) => {
      // Controllo FPS per limitare la frequenza di aggiornamento
      if (timestamp - lastFrameTimeRef.current < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      // Pulizia del canvas ad ogni frame
      ctx.fillStyle = '#f8f9fa';                                  // Colore di sfondo
      ctx.fillRect(0, 0, canvas.width, canvas.height);            // Riempie l'intero canvas

      ctx.beginPath();
      // Iterazione su tutti i punti per aggiornamento e rendering
      points.forEach((point, i) => {
        // Aggiornamento della posizione
        point.x += point.vx;                                      // Muove il punto sull'asse X
        point.y += point.vy;                                      // Muove il punto sull'asse Y

        // Gestione delle collisioni con i bordi del canvas
        if (point.x < 0 || point.x > canvas.width / window.devicePixelRatio) {
          point.vx *= -1;                                         // Inverte la direzione X al bordo
        }
        if (point.y < 0 || point.y > canvas.height / window.devicePixelRatio) {
          point.vy *= -1;                                         // Inverte la direzione Y al bordo
        }

        // Disegno delle connessioni tra i punti
        for (let j = i + 1; j < points.length; j++) {
          const otherPoint = points[j];
          const dx = point.x - otherPoint.x;                      // Differenza X tra i punti
          const dy = point.y - otherPoint.y;                      // Differenza Y tra i punti
          const distance = Math.sqrt(dx * dx + dy * dy);          // Distanza euclidea tra i punti

          // Disegna una linea se i punti sono abbastanza vicini (< 150px)
          if (distance < 150) {
            const opacity = 0.15 * (1 - distance / 150);          // Opacità basata sulla distanza
            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity})`;  // Colore grigio con opacità variabile
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);                         // Punto di partenza della linea
            ctx.lineTo(otherPoint.x, otherPoint.y);              // Punto di arrivo della linea
            ctx.stroke();                                         // Disegna la linea
          }
        }

        // Disegno del punto
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);  // Disegna un cerchio
        ctx.fillStyle = `rgba(128, 128, 128, ${point.alpha})`;    // Colore grigio con opacità del punto
        ctx.fill();                                               // Riempie il cerchio
      });

      // Richiede il prossimo frame di animazione
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Avvia l'animazione
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup quando il componente viene smontato
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);          // Ferma l'animazione
      }
      window.removeEventListener('resize', handleResize);         // Rimuove l'event listener
      clearTimeout(resizeTimeout);                               // Pulisce il timeout del resize
    };
  }, []);                                                        // Array vuoto: effect eseguito solo al mount

  // Rendering del canvas
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"
    />
  );
};

export { DynamicBackground }; 
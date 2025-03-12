import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
import { useScrollSections } from "./lib/useScrollSections";

// Componente per il messaggio di blocco dispositivi mobili
/*
const MobileBlocker = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center relative">
      // Immagine di sfondo che copre l'intero schermo
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-55" 
        style={{ backgroundImage: 'url("/assets/workinprogress2.svg")' }}
      />

      // Contenuto in sovrapposizione all'immagine
      <div className="relative z-10 max-w-md rounded-lg border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-sm">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Coming Soon</h1>
        <p className="mb-6 text-gray-700">
          Al momento il sito è in fase di sviluppo e visualizzabile solo da desktop.
        </p>
        <div className="text-sm text-gray-600">
          <p>Grazie per la comprensione!</p>
        </div>
      </div>
    </div>
  );
};
*/

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("App Error:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-white rounded-md">
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const ScrollContext = React.createContext<{
  registerSection: (index: number) => (el: HTMLElement | null) => void;
  scrollToSection: (index: number) => void;
  activeSection: number;
  isHomePage: boolean;
}>({
  registerSection: () => () => {},
  scrollToSection: () => {},
  activeSection: 0,
  isHomePage: false
});

function Router() {
  const [location] = useLocation();
  const isProjectRoute = location.startsWith("/project/");
  const scrollControls = useScrollSections();

  return (
    <div className="w-full min-h-screen bg-[#ffffff] relative flex flex-col">
      <ScrollContext.Provider value={scrollControls}>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={location} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.2 }} 
              className="w-full flex-1"
            >
              <Switch location={location}>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/project/:id">
                  {(params) => <ProjectDetails />}
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ScrollContext.Provider>
    </div>
  );
}

export const App = () => {
  // Mantengo lo stato ma commento la funzionalità di blocco mobile
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  /*
  useEffect(() => {
    const checkDevice = () => {
      // Controllo per dispositivi mobili e tablet basato sulla larghezza dello schermo
      const isMobileOrTabletDevice = window.innerWidth < 1024;
      setIsMobileOrTablet(isMobileOrTabletDevice);
    };

    // Controlla al caricamento e ad ogni ridimensionamento
    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Mostra il blocco per dispositivi mobili e tablet
  if (isMobileOrTablet) {
    return <MobileBlocker />;
  }
  */

  // Aggiungi un effetto per impostare lo stile direttamente sul body
  useEffect(() => {
    // Salva gli stili originali
    const originalOverflowX = document.body.style.overflowX;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;

    // Imposta gli stili per prevenire lo scorrimento orizzontale
    document.body.style.overflowX = 'hidden';
    document.body.style.position = 'relative';
    document.body.style.width = '100%';

    // Ripristina gli stili originali al termine
    return () => {
      document.body.style.overflowX = originalOverflowX;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
    };
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Router />
          <Footer />
          <Toaster />
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
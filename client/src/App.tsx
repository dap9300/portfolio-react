import React, { useState, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
// Importazioni commentate temporaneamente
// import { DynamicBackground } from "@/components/shared/DynamicBackground";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { Language } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/shared/Footer";
// import WebhookChat from "@/components/WebhookChat";
// Hook personalizzato per lo scroll tra sezioni
import { useScrollSections } from "./lib/useScrollSections";

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

// Contesto per condividere funzioni di scroll tra componenti
export const ScrollContext = React.createContext<{
  registerSection: (index: number) => (el: HTMLElement | null) => void;
  scrollToSection: (index: number) => void;
  activeSection: number;
  isHomePage: boolean; // Aggiunta questa proprietà
}>({
  registerSection: () => () => {},
  scrollToSection: () => {},
  activeSection: 0,
  isHomePage: false
});

function Router() {
  const [language, setLanguage] = useState<Language>("it");
  const [location] = useLocation();
  const isProjectRoute = location.startsWith("/project/");

  // Inizializzo il sistema di scroll
  const scrollControls = useScrollSections();

  return (
    // Modificato lo stile del background da bg-background a colore bianco-crema
    <div className="w-full min-h-screen bg-[#ffffff] relative flex flex-col">
      {/* DynamicBackground temporaneamente commentato 
      {!isProjectRoute && <DynamicBackground />}
      */}
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
                  <Home language={language} onLanguageChange={setLanguage} />
                </Route>
                <Route path="/project/:id">
                  {(params) => <ProjectDetails language={language} onLanguageChange={setLanguage} />}
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </ScrollContext.Provider>
      {/* WebhookChat temporaneamente disabilitato
      <WebhookChat />
      */}
    </div>
  );
}

export const App = () => {
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
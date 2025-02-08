import React from "react";
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { DynamicBackground } from "@/components/shared/DynamicBackground";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState, Suspense } from 'react';
import { Language } from "@/types";
import { AnimatePresence, motion } from "framer-motion";

function Router() {
  const [language, setLanguage] = useState<Language>('it');
  const [location] = useLocation();

  return (
    <div className="w-full h-full min-h-screen bg-background relative">
      <DynamicBackground />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            <Switch location={location}>
              <Route path="/">
                <Home language={language} onLanguageChange={setLanguage} />
              </Route>
              <Route path="/project/:id">
                {(params) => (
                  <ProjectDetails language={language} onLanguageChange={setLanguage} />
                )}
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>© Alessandro d’Apolito – 2025 | Proudly created with React & Typescript</p>
    </footer>
  );
};

// ErrorBoundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('App Error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Separate App component
export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Footer />
        <Toaster />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Default export
export default App;
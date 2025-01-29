
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState, Suspense } from 'react';
import { AnimatePresence } from "framer-motion";
import { Language } from "@/types";

function Router() {
  const [language, setLanguage] = useState<Language>('it');
  const [location] = useLocation();

  return (
    <div className="w-full h-full">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch location={location}>
            <Route path="/">
              <Home language={language} onLanguageChange={setLanguage} />
            </Route>
            <Route path="/project/:id">
              <ProjectDetails language={language} onLanguageChange={setLanguage} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

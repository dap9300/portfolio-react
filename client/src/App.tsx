import React, { Suspense } from "react";
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
  // Temporarily commented out language state
  // const [language, setLanguage] = useState<Language>("it");
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
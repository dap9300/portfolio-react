
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
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="wait" initial={false}>
          <Switch location={location} key={location}>
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
        </AnimatePresence>
      </Suspense>
    </div>
  );
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

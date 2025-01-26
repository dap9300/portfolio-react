import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { Language } from "@/types";

function Router() {
  const [language, setLanguage] = useState<Language>('it');
  const [location] = useLocation();

  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <AnimatePresence mode="wait" initial={false}>
        <Switch location={location} key={location}>
          <Route path="/">
            {() => <Home language={language} onLanguageChange={setLanguage} />}
          </Route>
          <Route path="/project/:id">
            {(params) => (
              <ProjectDetails language={language} onLanguageChange={setLanguage} />
            )}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
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
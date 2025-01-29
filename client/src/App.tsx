import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState, Suspense } from 'react';
import { Language } from "@/types";

function Router() {
  const [language, setLanguage] = useState<Language>('it');
  const [location] = useLocation();

  return (
    <div className="w-full h-full min-h-screen bg-background">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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
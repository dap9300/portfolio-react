import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState } from 'react';

function Router() {
  const [language, setLanguage] = useState('it');
  return (
    <Switch>
      <Route path="/">
        {() => <Home language={language} onLanguageChange={setLanguage} />}
      </Route>
      <Route path="/project/:id">
        {(params) => <ProjectDetails language={language} onLanguageChange={setLanguage} />}
      </Route>
      <Route component={NotFound} />
    </Switch>
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
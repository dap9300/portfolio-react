import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { ProjectDetails } from "@/components/sections/ProjectDetails";
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

function Router() {
  const [language, setLanguage] = useState<'en' | 'it'>('it');
  const [location] = useLocation();

  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          <Switch>
            <Route path="/">
              {() => <Home language={language} onLanguageChange={setLanguage} />}
            </Route>
            <Route path="/project/:id">
              {(params) => <ProjectDetails language={language} onLanguageChange={setLanguage} />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </motion.div>
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
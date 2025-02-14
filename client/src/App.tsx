import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { DynamicBackground } from "@/components/shared/DynamicBackground";
import { WebhookChat } from "@/components/ui/WebhookChat"; // Importing WebhookChat

// Pages
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetails from "@/pages/ProjectDetails";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicBackground />
      <WebhookChat /> {/* Including WebhookChat */}
      <main className="relative z-10">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </main>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
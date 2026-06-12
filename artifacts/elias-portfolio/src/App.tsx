import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/portfolio";
import ProjectGraphicDesign from "@/pages/project-graphic-design";
import Project3DDesign from "@/pages/project-3d-design";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/projects/graphic-design" component={ProjectGraphicDesign} />
      <Route path="/projects/3d-design" component={Project3DDesign} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

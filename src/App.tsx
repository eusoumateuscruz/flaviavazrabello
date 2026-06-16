import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Areas from "./pages/Areas";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/servicos/:id" element={<ServicePage />} />
            <Route path="/areas-de-atuacao" element={<Areas />} />
            <Route path="/areas-de-atuacao/:slug" element={<ServicePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/perguntas-frequentes" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

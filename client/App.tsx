import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PowerBI from "./pages/PowerBI";
import DataVisualization from "./pages/DataVisualization";
import ExcelSheets from "./pages/ExcelSheets";
import MarketAnalysis from "./pages/MarketAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Skill Landing Pages */}
          <Route path="/skills/power-bi" element={<PowerBI />} />
          <Route
            path="/skills/data-visualization"
            element={<DataVisualization />}
          />
          <Route path="/skills/excel-sheets" element={<ExcelSheets />} />
          <Route path="/skills/market-analysis" element={<MarketAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

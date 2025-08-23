import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Dashboard } from "@/pages/Dashboard";
import { AddExpense } from "@/pages/AddExpense";
import { AITips } from "@/pages/AITips";
import { AuthPage } from "@/pages/AuthPage";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'add-expense':
        return <AddExpense />;
      case 'ai-tips':
        return <AITips />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthPage onAuthSuccess={handleAuthSuccess} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="flex h-screen bg-gradient-soft">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <main className="flex-1 overflow-auto">
            {renderCurrentPage()}
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-page" element={<MyPage />} />
              <Route path="/news" element={<News />} />
              <Route path="/messages" element={<ComingSoon page="Messages" />} />
              <Route path="/friends" element={<ComingSoon page="Friends" />} />
              <Route path="/photos" element={<ComingSoon page="Photos" />} />
              <Route path="/videos" element={<ComingSoon page="Videos" />} />
              <Route path="/blog" element={<ComingSoon page="Blog" />} />
              <Route path="/shop" element={<ComingSoon page="Shop" />} />
              <Route path="/places" element={<ComingSoon page="Places" />} />
              <Route path="/settings" element={<ComingSoon page="Settings" />} />
              <Route path="/support" element={<ComingSoon page="Support" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Placeholder component for pages not yet implemented
function ComingSoon({ page }: { page: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {page}
        </h1>
        <p className="text-xl text-muted-foreground">Coming Soon!</p>
      </div>
    </div>
  );
}

export default App;

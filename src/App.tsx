import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import News from "./pages/News";
import Messages from "./pages/Messages";
import Friends from "./pages/Friends";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Places from "./pages/Places";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
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
              <Route path="/messages" element={<Messages />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/places" element={<Places />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  MessageSquare, 
  Newspaper, 
  Users, 
  Camera, 
  Video, 
  BookOpen, 
  ShoppingBag, 
  MapPin,
  Settings,
  HelpCircle,
  PawPrint,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "My Page", path: "/my-page", icon: Home },
  { name: "Messages", path: "/messages", icon: MessageSquare },
  { name: "News", path: "/news", icon: Newspaper },
  { name: "Friends", path: "/friends", icon: Users },
  { name: "Photos", path: "/photos", icon: Camera },
  { name: "Videos", path: "/videos", icon: Video },
  { name: "My Blog", path: "/blog", icon: BookOpen },
  { name: "Shop", path: "/shop", icon: ShoppingBag },
  { name: "Places", path: "/places", icon: MapPin },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Support", path: "/support", icon: HelpCircle },
];

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-primary p-2 rounded-xl group-hover:scale-110 transition-transform">
              <PawPrint className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              IntelPet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={active ? "default" : "ghost"}
                    size="sm"
                    className={active ? "bg-gradient-primary" : ""}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant={active ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start ${active ? "bg-gradient-primary" : ""}`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

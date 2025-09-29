import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  Newspaper, 
  Calendar, 
  Info, 
  Users, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", url: createPageUrl("Home"), icon: Home },
  { name: "News", url: createPageUrl("News"), icon: Newspaper },
  { name: "Events", url: createPageUrl("Events"), icon: Calendar },
  { name: "About", url: createPageUrl("About"), icon: Info },
  { name: "Join Us", url: createPageUrl("Register"), icon: Users },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --patriot-red: #dc2626;
          --patriot-blue: #1e40af;
          --freedom-gold: #f59e0b;
        }
        
        .bg-gradient-patriot {
          background: linear-gradient(135deg, #dc2626 0%, #1e40af 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #dc2626 0%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-pattern {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
      
      {/* Top Alert Bar */}
      <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold">
        🇺🇸 Help us build the conservative movement - Every patriot matters! 
        <ChevronRight className="inline w-4 h-4 ml-1" />
      </div>
      
      {/* Navigation Header */}
      <header className="bg-white shadow-xl border-b-4 border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d9d7c0e2bcb2bb6c264928/bb9d79a58_ChatGPTImageSep28202508_49_42PM.png"
                alt="Act Up! Logo"
                className="h-14 w-auto"
              />
              <div>
                <h1 className="text-3xl font-black text-gradient">ACT UP!</h1>
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">501(c)(4) Non-Profit</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-200 transform hover:scale-105 ${
                    location.pathname === item.url
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <Button className="ml-4 bg-gradient-patriot text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                SUPPORT US
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-red-600 hover:bg-red-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 mt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-200 ${
                      location.pathname === item.url
                        ? "bg-red-600 text-white"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Button className="mt-4 bg-gradient-patriot text-white font-bold">
                  SUPPORT US
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68d9d7c0e2bcb2bb6c264928/bb9d79a58_ChatGPTImageSep28202508_49_42PM.png"
                  alt="Act Up! Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-black text-white">ACT UP!</h3>
                  <p className="text-red-400 font-bold">501(c)(4) Non-Profit Organization</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-md text-lg leading-relaxed">
                🇺🇸 Building a grassroots conservative movement to defend American values 
                and restore constitutional principles in our communities.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                <strong>Tax ID:</strong> 47-XXXXXXX | <strong>Non-Profit Status:</strong> 501(c)(4) Social Welfare
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-400 uppercase tracking-wider">Get Involved</h4>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("News")} className="text-gray-300 hover:text-white font-semibold transition-colors">Latest Updates</Link></li>
                <li><Link to={createPageUrl("Events")} className="text-gray-300 hover:text-white font-semibold transition-colors">Upcoming Events</Link></li>
                <li><Link to={createPageUrl("Register")} className="text-gray-300 hover:text-white font-semibold transition-colors">Join Our Movement</Link></li>
                <li><Link to={createPageUrl("About")} className="text-gray-300 hover:text-white font-semibold transition-colors">Our Mission</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-400 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="font-semibold">📧 info@actup.org</li>
                <li className="font-semibold">📱 (555) ACT-UP44</li>
                <li className="font-semibold">📍 PO Box 1776<br />Liberty, USA 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 font-semibold">
                © 2024 Act Up! Conservative Action Network - 501(c)(4) Non-Profit Organization
              </p>
              <p className="text-red-400 font-bold mt-2 md:mt-0">
                🇺🇸 Building the Movement 🇺🇸
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

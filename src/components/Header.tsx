import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { scrollToSection, scrollToTop } from "./utils/scroll";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    scrollToTop();
  };

  const handleGetStarted = () => {
    scrollToSection('cta');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button onClick={handleLogoClick} className="text-xl font-semibold text-primary hover:opacity-80 transition-opacity">
                EnterpriseAI
              </button>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('features')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('solutions')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavClick('enterprise')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Enterprise
              </button>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavClick('resources')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Resources
              </button>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button onClick={handleGetStarted}>Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <button 
              onClick={() => handleNavClick('features')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('solutions')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => handleNavClick('enterprise')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Enterprise
            </button>
            <button 
              onClick={() => handleNavClick('pricing')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick('resources')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start">Sign In</Button>
              <Button onClick={handleGetStarted} className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
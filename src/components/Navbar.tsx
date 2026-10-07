import React, { useState, useEffect } from "react";
import { Search, Menu, X, Compass, Award, BookOpen, Clock, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenAbout,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#171719]/95 backdrop-blur-md border-b border-[#222227] shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-[#0B0B0D]/90 to-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF] rounded"
          aria-label="The Final Whistle Homepage"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#171719] border border-[#74ACDF]/40 text-[#74ACDF] group-hover:border-[#74ACDF] transition-colors">
            <svg
              className="w-5 h-5 text-[#74ACDF] transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C6A15B] ring-2 ring-[#0B0B0D]" />
          </div>

          <div>
            <span className="block font-serif text-lg tracking-wider font-bold text-[#F5F5F5] group-hover:text-white uppercase transition-colors">
              The Final Whistle
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-[#A5A5AA] group-hover:text-[#74ACDF] transition-colors">
              Beyond the Game · Into the Legacy
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("article")}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick("timeline")}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            Timeline
          </button>
          <button
            onClick={() => handleNavClick("achievements")}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            Messi’s Legacy
          </button>
          <button
            onClick={() => handleNavClick("related")}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            Latest Stories
          </button>
          <button
            onClick={onOpenAbout}
            className="text-sm font-medium text-[#A5A5AA] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
          >
            About
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs text-[#A5A5AA] hover:text-white bg-[#171719] hover:bg-[#222227] border border-[#222227] hover:border-[#74ACDF]/50 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
            aria-label="Search stories, milestones, and statistics"
            title="Search publication (Ctrl+K or click)"
          >
            <Search className="w-4 h-4 text-[#74ACDF]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden lg:inline text-[10px] text-[#A5A5AA] bg-[#0B0B0D] px-1.5 py-0.5 rounded border border-[#222227]">
              /
            </kbd>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A5A5AA] hover:text-white bg-[#171719] border border-[#222227] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171719] border-b border-[#222227] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick("hero")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <Compass className="w-4 h-4 text-[#74ACDF]" />
              Home
            </button>
            <button
              onClick={() => handleNavClick("article")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <BookOpen className="w-4 h-4 text-[#74ACDF]" />
              Features (Main Story)
            </button>
            <button
              onClick={() => handleNavClick("timeline")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <Clock className="w-4 h-4 text-[#74ACDF]" />
              Career Timeline
            </button>
            <button
              onClick={() => handleNavClick("achievements")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <Award className="w-4 h-4 text-[#C6A15B]" />
              Messi’s Legacy & Stats
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <Compass className="w-4 h-4 text-[#74ACDF]" />
              Photo Gallery
            </button>
            <button
              onClick={() => handleNavClick("related")}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <BookOpen className="w-4 h-4 text-[#74ACDF]" />
              Latest Stories
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAbout();
              }}
              className="text-left py-2 px-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#222227] rounded flex items-center gap-3"
            >
              <ShieldCheck className="w-4 h-4 text-[#74ACDF]" />
              About Publication
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

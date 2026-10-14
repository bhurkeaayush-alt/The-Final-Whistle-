import React, { useState, useEffect } from "react";
import { Search, Menu, X, Compass, Award, BookOpen, Clock, ShieldCheck, Image as ImageIcon, ExternalLink } from "lucide-react";
import { useRouter, Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isCurrentRoute } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF] rounded"
          aria-label="The Final Whistle Homepage"
          onClick={closeMobileMenu}
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
        </Link>

        {/* Desktop Navigation Links - with target="_blank" to open in another tab */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
          <Link
            href={ROUTES.HOME}
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.HOME)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Home
            {isCurrentRoute(ROUTES.HOME) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.FEATURES}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.FEATURES)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Features
            {isCurrentRoute(ROUTES.FEATURES) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.STORY}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.STORY)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Read the Story
            {isCurrentRoute(ROUTES.STORY) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.LEGACY}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.LEGACY)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Messi's legacy
            {isCurrentRoute(ROUTES.LEGACY) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.TIMELINE}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.TIMELINE)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Timeline
            {isCurrentRoute(ROUTES.TIMELINE) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.GALLERY}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.GALLERY)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Gallery
            {isCurrentRoute(ROUTES.GALLERY) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.STORIES}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.STORIES)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            Latest stories
            {isCurrentRoute(ROUTES.STORIES) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>

          <Link
            href={ROUTES.ABOUT}
            target="_blank"
            className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              isCurrentRoute(ROUTES.ABOUT)
                ? "text-[#74ACDF] font-semibold"
                : "text-[#A5A5AA] hover:text-[#F5F5F5]"
            }`}
          >
            About
            {isCurrentRoute(ROUTES.ABOUT) && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#74ACDF] rounded-full" />
            )}
          </Link>
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
            className="lg:hidden p-2 text-[#A5A5AA] hover:text-white bg-[#171719] border border-[#222227] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with target="_blank" links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171719] border-b border-[#222227] px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            <Link
              href={ROUTES.HOME}
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.HOME)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#74ACDF]" />
                <span>Home</span>
              </div>
            </Link>

            <Link
              href={ROUTES.FEATURES}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.FEATURES)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#74ACDF]" />
                <span>Features Tab</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.STORY}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.STORY)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#C6A15B]" />
                <span>Read the Story</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.LEGACY}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.LEGACY)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#C6A15B]" />
                <span>Messi's legacy</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.TIMELINE}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.TIMELINE)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#74ACDF]" />
                <span>Timeline</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.GALLERY}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.GALLERY)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-4 h-4 text-[#74ACDF]" />
                <span>Photo Gallery</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.STORIES}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.STORIES)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#74ACDF]" />
                <span>Latest stories</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>

            <Link
              href={ROUTES.ABOUT}
              target="_blank"
              onClick={closeMobileMenu}
              className={`py-2 px-3 text-sm rounded flex items-center justify-between transition-colors ${
                isCurrentRoute(ROUTES.ABOUT)
                  ? "bg-[#222227] text-[#74ACDF] font-semibold"
                  : "text-[#F5F5F5] hover:bg-[#222227]"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#74ACDF]" />
                <span>About Publication</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

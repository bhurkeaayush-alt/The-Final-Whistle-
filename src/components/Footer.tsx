import React from "react";
import { ArrowUp, ExternalLink } from "lucide-react";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0D] text-[#A5A5AA] border-t border-[#171719] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href={ROUTES.HOME} className="flex items-center gap-3 group inline-flex">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#171719] border border-[#74ACDF]/50 text-[#74ACDF] group-hover:border-[#74ACDF] transition-colors">
                <svg
                  className="w-4 h-4 text-[#74ACDF]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C6A15B]" />
              </div>
              <span className="font-serif text-lg font-bold text-[#F5F5F5] group-hover:text-white tracking-wider uppercase transition-colors">
                The Final Whistle
              </span>
            </Link>

            <p className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-mono">
              Beyond the Game. Into the Legacy.
            </p>

            <p className="text-xs text-[#A5A5AA] leading-relaxed max-w-md">
              A premium sports journalism publication exploring the cultural, emotional, and tactical narratives of modern football and the titans who define it.
            </p>
          </div>

          {/* Quick Navigation Links opening in new tab */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
              Editorial Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={ROUTES.HOME} className="hover:text-[#74ACDF] transition-colors">
                  Home (Top)
                </Link>
              </li>
              <li>
                <Link href={ROUTES.FEATURES} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Features Tab</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORY} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Read the Story</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.LEGACY} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Messi's legacy</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TIMELINE} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Timeline</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.GALLERY} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Documentary Gallery</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.STORIES} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Latest stories</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
              Publication
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={ROUTES.ABOUT} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>About the Publication</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.PRIVACY} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Privacy Policy & Disclaimers</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href={ROUTES.COMMUNITY} target="_blank" className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1">
                  <span>Reader Community</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#74ACDF] transition-colors inline-flex items-center gap-1"
                >
                  <span>Wikimedia Commons Archive</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Independent Project Disclaimer */}
        <div className="p-4 bg-[#171719] border border-[#222227] rounded-lg mb-8 text-left">
          <p className="text-[11px] leading-relaxed text-[#A5A5AA]">
            <strong className="text-[#F5F5F5]">Disclaimer:</strong> This website is an independent editorial project and is not affiliated with Lionel Messi, the Argentine Football Association, FIFA, or any other official football organization. All trademarks and image rights remain with their respective owners.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#171719] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[11px] text-[#A5A5AA]/70">
            © {new Date().getFullYear()} The Final Whistle Editorial. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171719] hover:bg-[#222227] text-xs text-[#A5A5AA] hover:text-[#74ACDF] border border-[#222227] rounded transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

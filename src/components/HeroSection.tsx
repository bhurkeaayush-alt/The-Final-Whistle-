import React from "react";
import { ChevronDown, BookOpen, Trophy, ExternalLink } from "lucide-react";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0D]"
    >
      {/* Background Hero Image with Significantly Reduced Darkness Shade */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/smh-messi-retires.jpg"
          alt="Lionel Messi has announced his retirement from international football - The Sydney Morning Herald"
          className="w-full h-full object-cover object-center brightness-100 contrast-[1.03] transform scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith('/homepage.webp')) {
              target.src = '/images/homepage.webp';
            }
          }}
        />
        {/* Soft, light overlays replacing previous heavy dark shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/25 via-20% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Category Label */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#74ACDF] uppercase mb-6 px-4 py-1.5 rounded-full bg-[#0B0B0D]/65 backdrop-blur-sm border border-white/10 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span>Football</span>
          <span className="text-[#A5A5AA]">·</span>
          <span>Legacy</span>
          <span className="text-[#A5A5AA]">·</span>
          <span>Argentina</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#FFFFFF] leading-[1.1] max-w-5xl mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          Messi retirement: <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#74ACDF] via-[#FFFFFF] to-[#E3C67C]">Is international football witnessing the end of an era?</span>
        </h1>

        {/* Supporting Headline */}
        <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F5F5F5] max-w-3xl font-medium leading-snug mb-6 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
          When a footballing legend approaches his final chapter with Argentina, the memories matter as much as the trophies.
        </p>

        {/* Short Introductory Paragraph with Target Keywords */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#F0F0F5] max-w-3xl leading-relaxed mb-10 px-5 py-3 rounded-xl bg-[#0B0B0D]/60 backdrop-blur-md border border-white/10 shadow-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Explore messi retirement international football debates. From his past messi retirement from barcelona to 2026 World Cup questions, discover his epic legacy across two decades of heartbreaks, continental triumphs, and ultimate World Cup glory.
        </p>

        {/* Call to Action Buttons opening in another tab */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href={ROUTES.STORY}
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-bold text-sm tracking-wide rounded-md transition-all shadow-xl shadow-black/40 hover:shadow-[#74ACDF]/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read the Story</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Link>

          <Link
            href={ROUTES.LEGACY}
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171719]/90 hover:bg-[#222227] text-[#F5F5F5] border border-[#33333D] hover:border-[#74ACDF]/50 font-medium text-sm tracking-wide rounded-md transition-all shadow-xl shadow-black/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
          >
            <Trophy className="w-4 h-4 text-[#C6A15B]" />
            <span>Messi's legacy</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#A5A5AA]" />
          </Link>
        </div>

        {/* Photo Attribution Notice */}
        <div className="text-[11px] text-[#D1D1D6] flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B0B0D]/75 backdrop-blur-sm border border-white/10 shadow">
          <span>Photography: Lionel Messi has announced his retirement from international football (AP Photo / Stephanie Scarbrough via The Sydney Morning Herald)</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator linking to /story */}
      <Link
        href={ROUTES.STORY}
        target="_blank"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#E0E0E6] hover:text-[#74ACDF] transition-colors focus-visible:outline-none px-3 py-1.5 rounded-full bg-[#0B0B0D]/65 backdrop-blur-sm border border-white/10 shadow-lg"
        aria-label="Open story in new tab"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono mb-1">Open Story in New Tab</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#74ACDF]" />
      </Link>
    </section>
  );
};

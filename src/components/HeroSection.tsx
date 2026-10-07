import React from "react";
import { ChevronDown, BookOpen, Trophy } from "lucide-react";

interface HeroSectionProps {
  onReadStory: () => void;
  onExploreLegacy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReadStory,
  onExploreLegacy
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0D]"
    >
      {/* Background Hero Image with Layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/messi-hero-wc2022.jpg"
          alt="Lionel Messi in Argentina national jersey during the 2022 FIFA World Cup"
          className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/75 to-[#0B0B0D]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
        <div className="absolute inset-0 bg-[#0B0B0D]/30 mix-blend-multiply" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Category Label (Zero-Pill discipline: unboxed clean text with bullet separators) */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#74ACDF] uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span>Football</span>
          <span className="text-[#A5A5AA]">·</span>
          <span>Legacy</span>
          <span className="text-[#A5A5AA]">·</span>
          <span>Argentina</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F5F5F5] leading-[1.08] max-w-4xl mb-6 drop-shadow-md">
          Messi and the <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#74ACDF] via-[#F5F5F5] to-[#C6A15B]">End of an Era</span>
        </h1>

        {/* Supporting Headline */}
        <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[#F5F5F5]/90 max-w-3xl font-normal leading-snug mb-6 drop-shadow">
          When a footballing legend approaches his final chapter with Argentina, the memories matter as much as the trophies.
        </p>

        {/* Short Introductory Paragraph */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#A5A5AA] max-w-2xl leading-relaxed mb-10">
          From the bittersweet tears of New Jersey in 2016 to the euphoric night under Lusail’s golden arches in 2022, Lionel Messi’s international journey rewrote the psychology of an entire football nation. As the twilight of his international career arrives, the game prepares to bid farewell to an era that will never be replicated.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onReadStory}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-sm tracking-wide rounded-md transition-all shadow-lg shadow-[#74ACDF]/20 hover:shadow-[#74ACDF]/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read the Story</span>
          </button>

          <button
            onClick={onExploreLegacy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#171719]/90 hover:bg-[#222227] text-[#F5F5F5] border border-[#222227] hover:border-[#74ACDF]/50 font-medium text-sm tracking-wide rounded-md transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
          >
            <Trophy className="w-4 h-4 text-[#C6A15B]" />
            <span>Explore His Legacy</span>
          </button>
        </div>

        {/* Photo Attribution Notice */}
        <div className="text-[11px] text-[#A5A5AA]/70 flex items-center gap-2">
          <span>Photography: Qatar 2022 FIFA World Cup (CC BY 4.0 / Wikimedia Commons)</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={onReadStory}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#A5A5AA] hover:text-[#74ACDF] transition-colors focus-visible:outline-none"
        aria-label="Scroll down to read article"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono mb-1">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#74ACDF]" />
      </button>
    </section>
  );
};

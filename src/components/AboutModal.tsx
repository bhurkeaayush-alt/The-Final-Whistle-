import React, { useEffect, useCallback } from "react";
import { X, ShieldCheck, BookOpen, Award, FileText } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="About The Final Whistle"
    >
      <div className="relative max-w-2xl w-full bg-[#171719] border border-[#222227] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0B0D] text-[#A5A5AA] hover:text-white border border-[#222227]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#74ACDF] mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Editorial Masthead</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
          The Final Whistle
        </h2>
        <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-mono mb-6">
          Beyond the Game. Into the Legacy.
        </p>

        <div className="space-y-4 text-xs sm:text-sm text-[#A5A5AA] leading-relaxed border-t border-[#222227] pt-6 mb-8">
          <p>
            <strong className="text-white font-medium">The Final Whistle</strong> is a premium digital football editorial publication dedicated to deep, long-form sports journalism, photographic storytelling, and historical retrospective.
          </p>

          <p>
            Our core mission is to examine pivotal moments in sporting history with the care and depth of a traditional print magazine combined with the interactive dynamism of modern digital design.
          </p>

          <div className="p-4 bg-[#0B0B0D] rounded-lg border border-[#222227] space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#74ACDF] font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Journalistic Standards & Verification
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#A5A5AA]">
              <li>Distinguishing verified factual developments from transfer and retirement rumors.</li>
              <li>Verification of historical match records via FIFA and CONMEBOL archives.</li>
              <li>Complete photographic transparency with genuine licenses (CC BY / CC BY-SA).</li>
            </ul>
          </div>

          <p className="text-[11px] text-[#A5A5AA]/80 italic">
            Developed as an editorial showcase for college coursework, portfolio presentation, and football connoisseurs worldwide.
          </p>
        </div>

        <div className="pt-4 border-t border-[#222227] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs rounded transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};

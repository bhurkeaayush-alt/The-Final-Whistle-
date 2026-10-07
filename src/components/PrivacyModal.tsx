import React, { useEffect, useCallback } from "react";
import { X, ShieldAlert, Lock, Info } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      aria-label="Privacy Policy and Editorial Disclaimer"
    >
      <div className="relative max-w-2xl w-full bg-[#171719] border border-[#222227] rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0B0D] text-[#A5A5AA] hover:text-white border border-[#222227]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-2">
          <Lock className="w-4 h-4" />
          <span>Legal & Editorial Disclaimers</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-6">
          Privacy Policy & Disclaimers
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#A5A5AA] leading-relaxed border-t border-[#222227] pt-6 mb-8">
          <div>
            <h4 className="text-white font-medium mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#74ACDF]" />
              Mandatory Editorial Disclaimer
            </h4>
            <p className="bg-[#0B0B0D] p-3.5 rounded border border-[#222227] text-xs text-[#F5F5F5]/90 italic">
              “This website is an independent editorial project and is not affiliated with Lionel Messi, the Argentine Football Association, FIFA, or any other official football organization. All trademarks and image rights remain with their respective owners.”
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-1">Data Privacy & Local Storage</h4>
            <p>
              This publication does not sell or distribute personal data. Reader reflections and preference settings are processed entirely on the client side using your browser's local storage (Web Storage API) and may be cleared at any time by clearing your browser cache.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-1">Image Rights & Fair Use</h4>
            <p>
              All photographs featured across this publication are sourced from Wikimedia Commons and licensed under Creative Commons (CC BY 4.0, CC BY-SA 3.0, CC BY-SA 2.0) with verifiable author attribution.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#222227] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs rounded transition-colors"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

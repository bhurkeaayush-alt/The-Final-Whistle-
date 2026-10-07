import React, { useEffect, useCallback } from "react";
import { PhotoAttribution } from "../data/photoAttributions";
import { X, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from "lucide-react";

interface LightboxModalProps {
  photo: PhotoAttribution | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!photo) return;
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [photo, handleKeyDown]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${photo.title}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#171719]/80 text-[#A5A5AA] hover:text-white border border-[#222227] hover:border-[#74ACDF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
        aria-label="Close photo viewer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation - Previous */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#171719]/80 text-[#A5A5AA] hover:text-white border border-[#222227] hover:border-[#74ACDF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation - Next */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#171719]/80 text-[#A5A5AA] hover:text-white border border-[#222227] hover:border-[#74ACDF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Card Content */}
      <div className="relative max-w-5xl w-full flex flex-col items-center max-h-[90vh]">
        {/* Main Image */}
        <div className="relative max-h-[68vh] w-full flex items-center justify-center overflow-hidden rounded-lg bg-black/50">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[68vh] max-w-full object-contain rounded-md"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-4 bg-[#171719] border border-[#222227] p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-bold text-[#F5F5F5]">
                {photo.title}
              </h3>
              <span className="text-xs font-mono text-[#C6A15B]">({photo.year})</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A5A5AA] max-w-2xl leading-relaxed">
              {photo.caption}
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 text-[11px] text-[#A5A5AA] border-t sm:border-t-0 pt-3 sm:pt-0 border-[#222227]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#74ACDF]" />
              <span>Credit: {photo.credit}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#74ACDF]">{photo.license}</span>
              <span>·</span>
              <a
                href={photo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#A5A5AA] hover:text-[#74ACDF] underline transition-colors"
              >
                <span>Wikimedia Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

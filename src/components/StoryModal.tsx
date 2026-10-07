import React, { useEffect, useCallback } from "react";
import { RelatedStory } from "../data/articleData";
import { X, Clock, Tag, CheckCircle2, Share2, BookOpen } from "lucide-react";

interface StoryModalProps {
  story: RelatedStory | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!story) return;
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [story, handleKeyDown]);

  if (!story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`Article: ${story.title}`}
    >
      <div className="relative max-w-3xl w-full bg-[#171719] border border-[#222227] rounded-xl shadow-2xl my-8 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0B0B0D]/80 text-[#A5A5AA] hover:text-white border border-[#222227] hover:border-[#74ACDF] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
          aria-label="Close story modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of the story */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-black/60">
          <img
            src={story.image}
            alt={story.imageAlt}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-10">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-[#74ACDF] font-semibold mb-3">
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {story.category}
            </span>
            <span className="text-[#A5A5AA]">·</span>
            <span className="flex items-center gap-1 text-[#C6A15B]">
              <Clock className="w-3.5 h-3.5" />
              {story.readTime}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F5F5F5] mb-4 leading-tight">
            {story.title}
          </h2>

          <p className="font-serif text-base sm:text-lg text-[#A5A5AA] italic mb-8 border-b border-[#222227] pb-6 leading-relaxed">
            {story.summary}
          </p>

          {/* Full Article Content */}
          <div className="space-y-5 text-[#F5F5F5]/85 text-sm sm:text-base leading-relaxed mb-8">
            {story.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#0B0B0D] border border-[#222227] rounded-lg p-6 mb-8">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#C6A15B] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C6A15B]" />
              Key Editorial Takeaways
            </h4>
            <ul className="space-y-2.5">
              {story.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A5A5AA]">
                  <CheckCircle2 className="w-4 h-4 text-[#74ACDF] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer Controls */}
          <div className="pt-6 border-t border-[#222227] flex items-center justify-between">
            <span className="text-xs text-[#A5A5AA]">The Final Whistle Feature</span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs rounded transition-colors"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

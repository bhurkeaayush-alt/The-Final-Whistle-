import React, { useState, useEffect, useRef } from "react";
import { Search, X, BookOpen, Clock, Trophy, ChevronRight, Hash } from "lucide-react";
import { MAIN_ARTICLE_SECTIONS, RELATED_STORIES } from "../data/articleData";
import { TIMELINE_MILESTONES } from "../data/timelineData";
import { OFFICIAL_TROPHIES } from "../data/statsData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: "section" | "timeline" | "achievements" | "related", targetId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search through chapters
  const matchedSections = MAIN_ARTICLE_SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.paragraphs.some((p) => p.toLowerCase().includes(q))
  );

  // Search through related stories
  const matchedStories = RELATED_STORIES.filter(
    (st) =>
      st.title.toLowerCase().includes(q) ||
      st.summary.toLowerCase().includes(q) ||
      st.category.toLowerCase().includes(q)
  );

  // Search through timeline
  const matchedMilestones = TIMELINE_MILESTONES.filter(
    (m) =>
      m.year.includes(q) ||
      m.title.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q)
  );

  // Search through trophies
  const matchedTrophies = OFFICIAL_TROPHIES.filter(
    (t) =>
      t.label.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.yearsOrContext.toLowerCase().includes(q)
  );

  const hasResults =
    q &&
    (matchedSections.length > 0 ||
      matchedStories.length > 0 ||
      matchedMilestones.length > 0 ||
      matchedTrophies.length > 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Search publication"
    >
      <div className="relative w-full max-w-2xl bg-[#171719] border border-[#222227] rounded-xl shadow-2xl overflow-hidden animate-in fade-in duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[#222227] bg-[#0B0B0D]">
          <Search className="w-5 h-5 text-[#74ACDF] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, Qatar 2022, 2016 retirement, Maracanã, stats..."
            className="w-full bg-transparent text-sm sm:text-base text-[#F5F5F5] placeholder-[#A5A5AA] focus-visible:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#A5A5AA] hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-mono tracking-wider text-[#A5A5AA] hover:text-white px-2 py-1 bg-[#171719] rounded border border-[#222227]"
          >
            Esc
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!q && (
            <div className="text-center py-10 text-xs text-[#A5A5AA] space-y-2">
              <p>Type keywords to search across stories, career milestones, and records.</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {["2016 Retirement", "World Cup 2022", "Maracanã", "Golden Ball", "Scaloni"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 bg-[#0B0B0D] hover:bg-[#222227] text-[11px] text-[#74ACDF] border border-[#222227] rounded"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="text-center py-12 text-[#A5A5AA] text-sm">
              No matching editorial records found for <span className="text-white font-medium">"{query}"</span>.
            </div>
          )}

          {/* Section results */}
          {matchedSections.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#74ACDF] block mb-2">
                Main Story Chapters ({matchedSections.length})
              </span>
              <div className="space-y-2">
                {matchedSections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => {
                      onSelectResult("section", sec.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-[#0B0B0D] hover:bg-[#222227] border border-[#222227] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#C6A15B] font-mono">
                        <Hash className="w-3 h-3" />
                        <span>Chapter {sec.number}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#F5F5F5] group-hover:text-[#74ACDF]">
                        {sec.title}
                      </h4>
                      <p className="text-xs text-[#A5A5AA] line-clamp-1 mt-0.5">
                        {sec.subtitle}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A5A5AA] group-hover:text-[#74ACDF]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Related story results */}
          {matchedStories.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C6A15B] block mb-2">
                Related Feature Stories ({matchedStories.length})
              </span>
              <div className="space-y-2">
                {matchedStories.map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      onSelectResult("related", st.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-[#0B0B0D] hover:bg-[#222227] border border-[#222227] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#74ACDF]">
                        {st.category}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#F5F5F5] group-hover:text-[#C6A15B]">
                        {st.title}
                      </h4>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A5A5AA] group-hover:text-[#C6A15B]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Milestone results */}
          {matchedMilestones.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5A5AA] block mb-2">
                Timeline Milestones ({matchedMilestones.length})
              </span>
              <div className="space-y-2">
                {matchedMilestones.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onSelectResult("timeline");
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-[#0B0B0D] hover:bg-[#222227] border border-[#222227] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#C6A15B]">
                        {m.year}
                      </span>
                      <h4 className="text-xs font-semibold text-[#F5F5F5]">
                        {m.title}
                      </h4>
                      <p className="text-[11px] text-[#A5A5AA] line-clamp-1">
                        {m.summary}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A5A5AA]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trophy results */}
          {matchedTrophies.length > 0 && (
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#74ACDF] block mb-2">
                Honors & Trophies ({matchedTrophies.length})
              </span>
              <div className="space-y-2">
                {matchedTrophies.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectResult("achievements");
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-[#0B0B0D] hover:bg-[#222227] border border-[#222227] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-[#F5F5F5]">
                        {t.label} ({t.yearsOrContext})
                      </h4>
                      <p className="text-[11px] text-[#A5A5AA] line-clamp-1">
                        {t.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A5A5AA]" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

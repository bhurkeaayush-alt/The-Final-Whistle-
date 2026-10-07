import React, { useEffect, useState } from "react";
import { MAIN_ARTICLE_SECTIONS } from "../data/articleData";
import { ListFilter, ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  activeSectionId?: string;
  onSelectSection: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeSectionId,
  onSelectSection
}) => {
  const [currentActive, setCurrentActive] = useState<string>(activeSectionId || MAIN_ARTICLE_SECTIONS[0].id);

  useEffect(() => {
    if (activeSectionId) {
      setCurrentActive(activeSectionId);
    }
  }, [activeSectionId]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = MAIN_ARTICLE_SECTIONS.map((sec) =>
        document.getElementById(sec.id)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setCurrentActive(MAIN_ARTICLE_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="p-6 bg-[#171719]/80 border border-[#222227] rounded-lg shadow-sm"
      aria-label="Table of Contents"
    >
      <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#222227]">
        <ListFilter className="w-4 h-4 text-[#74ACDF]" />
        <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F5F5]">
          Chapter Index
        </h3>
      </div>

      <ol className="space-y-3">
        {MAIN_ARTICLE_SECTIONS.map((section) => {
          const isActive = currentActive === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => onSelectSection(section.id)}
                className={`w-full text-left group flex items-start gap-3 py-1.5 transition-all text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] rounded ${
                  isActive
                    ? "text-[#74ACDF] font-semibold"
                    : "text-[#A5A5AA] hover:text-[#F5F5F5]"
                }`}
              >
                <span
                  className={`font-mono text-[11px] mt-0.5 tracking-wider ${
                    isActive ? "text-[#C6A15B]" : "text-[#A5A5AA]/60 group-hover:text-[#74ACDF]"
                  }`}
                >
                  {section.number}
                </span>
                <span className="line-clamp-2 leading-relaxed flex-1">
                  {section.title}
                </span>
                {isActive && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#74ACDF] flex-shrink-0 mt-0.5" />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 pt-4 border-t border-[#222227] text-[11px] text-[#A5A5AA]/70 flex items-center justify-between">
        <span>7 Chapters</span>
        <span>~1,500 Words</span>
      </div>
    </nav>
  );
};

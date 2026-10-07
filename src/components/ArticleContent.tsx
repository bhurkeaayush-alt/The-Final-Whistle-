import React from "react";
import { MAIN_ARTICLE_SECTIONS } from "../data/articleData";
import { Quote, Info } from "lucide-react";

interface ArticleContentProps {
  onOpenPhotoLightbox: (photoId: string) => void;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ onOpenPhotoLightbox }) => {
  return (
    <article className="prose prose-invert prose-lg max-w-none text-[#F5F5F5]/90">
      {MAIN_ARTICLE_SECTIONS.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 mb-16 pb-12 border-b border-[#171719] last:border-b-0"
        >
          {/* Section Heading & Chapter Number */}
          <div className="mb-6">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#C6A15B] mb-2">
              <span>Chapter {section.number}</span>
              <span className="text-[#A5A5AA]/40">—</span>
              <span className="text-[#74ACDF]">Historical Analysis</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] leading-tight mb-2">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5AA] font-sans italic">
              {section.subtitle}
            </p>
          </div>

          {/* Section Paragraphs with comfortable line-height and generous spacing */}
          <div className="space-y-6 text-[#F5F5F5]/85 leading-relaxed font-sans text-base sm:text-lg">
            {section.paragraphs.map((p, pIdx) => (
              <p
                key={pIdx}
                className={
                  idx === 0 && pIdx === 0
                    ? "first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#74ACDF] first-letter:leading-none"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Inline Editorial Pull Quote if available */}
          {section.pullQuote && (
            <figure className="my-10 p-6 sm:p-8 bg-[#171719]/90 border-l-4 border-[#C6A15B] rounded-r-lg relative overflow-hidden">
              <Quote className="w-10 h-10 text-[#C6A15B]/20 absolute right-4 top-4 pointer-events-none" />
              <blockquote className="font-serif text-lg sm:text-2xl text-[#F5F5F5] italic leading-snug mb-4">
                “{section.pullQuote.quote}”
              </blockquote>
              <figcaption className="text-xs sm:text-sm text-[#A5A5AA] flex items-center gap-2 font-sans not-italic">
                <span className="w-4 h-[1px] bg-[#C6A15B]" />
                <span>{section.pullQuote.attribution}</span>
              </figcaption>
            </figure>
          )}

          {/* Inline Highlight Box / Fact Check if available */}
          {section.highlightBox && (
            <aside className="my-8 p-5 bg-[#171719] border border-[#222227] rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#74ACDF]">
                <Info className="w-4 h-4" />
                <span>{section.highlightBox.tag}</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-[#F5F5F5] mb-1">
                {section.highlightBox.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#A5A5AA] leading-relaxed">
                {section.highlightBox.text}
              </p>
            </aside>
          )}

          {/* Contextual image moments interspersed naturally */}
          {idx === 1 && (
            <div className="my-8 rounded-lg overflow-hidden border border-[#222227] bg-[#171719] group">
              <button
                onClick={() => onOpenPhotoLightbox("swiss-2014")}
                className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
                aria-label="View 2014 World Cup photo in full size"
              >
                <div className="aspect-[16/9] overflow-hidden bg-black/40">
                  <img
                    src="/images/messi-swiss-2014.jpg"
                    alt="Lionel Messi in action at the 2014 World Cup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-xs text-[#A5A5AA]">
                  <span>2014 World Cup Run: Battle at Arena Corinthians</span>
                  <span className="text-[#74ACDF] underline">Click to expand</span>
                </div>
              </button>
            </div>
          )}

          {idx === 3 && (
            <div className="my-8 rounded-lg overflow-hidden border border-[#222227] bg-[#171719] group">
              <button
                onClick={() => onOpenPhotoLightbox("wc2022-celebration")}
                className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF]"
                aria-label="View 2022 World Cup celebration photo in full size"
              >
                <div className="aspect-[16/9] overflow-hidden bg-black/40">
                  <img
                    src="/images/messi-wc2022-celebration.jpg"
                    alt="Lionel Messi celebrating the World Cup victory in Qatar 2022"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex items-center justify-between text-xs text-[#A5A5AA]">
                  <span>Lusail Immortalization: The 2022 World Cup Champions</span>
                  <span className="text-[#74ACDF] underline">Click to expand</span>
                </div>
              </button>
            </div>
          )}

          {/* Section 7 Final Closing Emphasis */}
          {idx === MAIN_ARTICLE_SECTIONS.length - 1 && (
            <div className="mt-12 pt-8 border-t border-[#222227] text-center">
              <div className="w-12 h-0.5 bg-[#C6A15B] mx-auto mb-6" />
              <p className="font-serif text-xl sm:text-2xl text-[#F5F5F5] italic font-medium leading-relaxed max-w-2xl mx-auto">
                “Legends do not disappear when the final whistle blows. They remain in the memories of everyone who believed.”
              </p>
              <span className="block mt-4 text-xs uppercase tracking-[0.25em] text-[#74ACDF] font-sans">
                The Final Whistle · Editorial Archive
              </span>
            </div>
          )}
        </section>
      ))}
    </article>
  );
};

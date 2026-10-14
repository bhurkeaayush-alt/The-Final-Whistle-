import React from "react";
import { MAIN_ARTICLE_SECTIONS, RELATED_STORIES } from "../data/articleData";
import { Breadcrumbs } from "./Breadcrumbs";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";
import { BookOpen, Clock, ArrowRight, ShieldCheck, Hash, ExternalLink } from "lucide-react";

export const FeaturesView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: "Features" }]} />

      {/* Page Header */}
      <div className="mb-14 border-b border-[#222227] pb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-3">
          <BookOpen className="w-4 h-4 text-[#74ACDF]" />
          <span>Editorial Hub</span>
          <span className="text-[#A5A5AA]">·</span>
          <span>Curated Long-Form Journalism</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] mb-4">
          Features & Chapter Index
        </h1>
        <p className="text-base sm:text-lg text-[#A5A5AA] max-w-3xl leading-relaxed">
          The definitive editorial investigation into Lionel Messi’s international odyssey. Dive into each chronological chapter or explore companion tactical retrospectives.
        </p>

        {/* Action Button to Read Complete Story in new tab */}
        <div className="mt-8">
          <Link
            href={ROUTES.STORY}
            target="_blank"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs tracking-wider uppercase rounded-md transition-all shadow-md shadow-[#74ACDF]/20 hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read Complete Cover Story (Opens in New Tab)</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 7 Chapter Cards Grid */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#222227]">
          <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">
            The 7 Investigative Chapters
          </h2>
          <span className="text-xs font-mono text-[#C6A15B]">
            ~1,500 Words Total
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAIN_ARTICLE_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#74ACDF]/5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#C6A15B] flex items-center gap-1">
                    <Hash className="w-3.5 h-3.5" />
                    Chapter {section.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#74ACDF] tracking-wider">
                    Historical Analysis
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#F5F5F5] group-hover:text-white mb-2 leading-snug">
                  {section.title}
                </h3>

                <p className="text-xs text-[#74ACDF] italic mb-3 font-sans">
                  {section.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#A5A5AA] line-clamp-3 leading-relaxed mb-6">
                  {section.paragraphs[0]}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222227]">
                <Link
                  href={`${ROUTES.STORY}#${section.id}`}
                  target="_blank"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#74ACDF] group-hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Read Chapter {section.number}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Companion Editorial Series Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#222227]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">
              Companion Editorial Series
            </h2>
            <p className="text-xs text-[#A5A5AA] mt-1">
              Detailed tactical breakdowns and future generational perspectives.
            </p>
          </div>
          <Link
            href={ROUTES.STORIES}
            target="_blank"
            className="text-xs font-semibold text-[#74ACDF] hover:underline hidden sm:inline"
          >
            Latest stories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl overflow-hidden flex flex-col justify-between group transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black/60 relative">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0B0B0D]/80 backdrop-blur-sm text-[10px] uppercase font-mono tracking-wider text-[#74ACDF] px-2 py-0.5 rounded border border-[#222227]">
                  {story.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#A5A5AA] font-mono mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#F5F5F5] group-hover:text-white mb-2 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#A5A5AA] line-clamp-2 leading-relaxed mb-4">
                    {story.summary}
                  </p>
                </div>
                <Link
                  href={`/stories/${story.id}`}
                  target="_blank"
                  className="text-xs font-semibold text-[#74ACDF] group-hover:text-white inline-flex items-center justify-between pt-3 border-t border-[#222227]"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Read Story</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Mission Badge */}
      <div className="p-6 bg-[#171719] border border-[#222227] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#74ACDF] flex-shrink-0" />
          <p className="text-xs text-[#A5A5AA] leading-relaxed">
            All feature writing adheres to strict verification principles: separating confirmed historical facts from speculation, and attributing public records via FIFA and CONMEBOL.
          </p>
        </div>
        <Link
          href={ROUTES.ABOUT}
          target="_blank"
          className="text-xs text-[#74ACDF] hover:underline font-mono whitespace-nowrap self-start sm:self-auto flex items-center gap-1"
        >
          <span>Read Editorial Masthead</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

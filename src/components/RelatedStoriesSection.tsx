import React from "react";
import { RELATED_STORIES, RelatedStory } from "../data/articleData";
import { Clock, ArrowRight, Tag } from "lucide-react";

interface RelatedStoriesSectionProps {
  onSelectStory: (story: RelatedStory) => void;
}

export const RelatedStoriesSection: React.FC<RelatedStoriesSectionProps> = ({
  onSelectStory
}) => {
  return (
    <section id="related" className="py-24 bg-[#171719]/40 border-t border-[#171719] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-3">
            <span>Editorial Series</span>
            <span className="text-[#A5A5AA]">·</span>
            <span>In-Depth Coverage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Related Stories & Analysis
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
            Expand your perspective with companion features examining tactical turning points, historical context, and the Albiceleste future.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RELATED_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-[#171719] border border-[#222227] hover:border-[#74ACDF]/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl hover:shadow-[#74ACDF]/5"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#222227] text-[10px] uppercase font-mono tracking-wider text-[#74ACDF] px-2.5 py-1 rounded">
                  {story.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A5A5AA] font-mono mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F5F5F5] group-hover:text-white mb-3 leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A5A5AA] line-clamp-3 leading-relaxed mb-6">
                    {story.summary}
                  </p>
                </div>

                {/* Read More Action Button */}
                <button
                  onClick={() => onSelectStory(story)}
                  className="w-full inline-flex items-center justify-between pt-4 border-t border-[#222227] text-xs font-semibold text-[#74ACDF] group-hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] rounded"
                  aria-label={`Read full feature: ${story.title}`}
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { TIMELINE_MILESTONES, TimelineMilestone } from "../data/timelineData";
import { Calendar, MapPin, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { useRouter } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

interface TimelineSectionProps {
  onOpenPhotoLightbox: (photoId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenPhotoLightbox }) => {
  const { currentPath } = useRouter();
  const isTimelinePage = currentPath === ROUTES.TIMELINE;
  const [selectedEra, setSelectedEra] = useState<string>("All");
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);

  const eras = ["All", "Early Years", "Heartbreak", "Redemption", "Twilight & Beyond"];

  const filteredMilestones =
    selectedEra === "All"
      ? TIMELINE_MILESTONES
      : TIMELINE_MILESTONES.filter((m) => m.era === selectedEra);

  return (
    <section id="timeline" className="py-24 bg-[#0B0B0D] border-t border-[#171719] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-3">
            <span>Career Odyssey</span>
            <span className="text-[#A5A5AA]">·</span>
            <span>2005 – 2026</span>
          </div>

          {isTimelinePage ? (
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
              messi story: How did his journey unfold from 2005 debut to Qatar glory?
            </h1>
          ) : (
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
              messi story: How did his journey unfold from 2005 debut to Qatar glory?
            </h2>
          )}

          <p className="text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
            Explore the complete Messi life story and historic messi journey from his 2005 Albiceleste debut to Olympic gold, painful heartbreaks, and World Cup glory.
          </p>

          {/* Era Filter Controls (interactive controls) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8" role="tablist" aria-label="Timeline Eras">
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => {
                  setSelectedEra(era);
                  setActiveMilestoneIndex(0);
                }}
                className={`px-4 py-2 text-xs font-medium rounded transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
                  selectedEra === era
                    ? "bg-[#74ACDF] text-[#0B0B0D] font-semibold shadow-md shadow-[#74ACDF]/20"
                    : "bg-[#171719] text-[#A5A5AA] hover:text-white hover:bg-[#222227] border border-[#222227]"
                }`}
                role="tab"
                aria-selected={selectedEra === era}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Center Track Line on Desktop, Left Track on Mobile */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gradient-to-b from-[#74ACDF] via-[#C6A15B] to-[#74ACDF]/30 -translate-x-1/2" />

          <div className="space-y-12 relative">
            {filteredMilestones.map((milestone: TimelineMilestone, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={`${milestone.year}-${idx}`}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#171719] border-2 border-[#74ACDF] flex items-center justify-center z-10 shadow-lg shadow-black group-hover:scale-110 group-hover:border-[#C6A15B] transition-transform">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#74ACDF] group-hover:bg-[#C6A15B] transition-colors" />
                  </div>

                  {/* Spacer for Desktop Alternation */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Card Content */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    } w-full`}
                  >
                    <div className="p-6 sm:p-8 bg-[#171719]/90 border border-[#222227] group-hover:border-[#74ACDF]/40 rounded-xl transition-all shadow-md group-hover:shadow-xl group-hover:shadow-[#74ACDF]/5">
                      {/* Top Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C6A15B] tracking-tight">
                          {milestone.year}
                        </span>
                        {milestone.badge && (
                          <span className="text-[11px] font-mono tracking-wider uppercase text-[#74ACDF] border border-[#74ACDF]/30 px-2 py-0.5 rounded">
                            {milestone.badge}
                          </span>
                        )}
                      </div>

                      {milestone.exactDate && (
                        <div className="flex items-center gap-1.5 text-xs text-[#A5A5AA] mb-2 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-[#74ACDF]" />
                          <span>{milestone.exactDate}</span>
                        </div>
                      )}

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2 leading-snug">
                        {milestone.title}
                      </h3>

                      <p className="text-sm font-medium text-[#74ACDF] mb-4">
                        {milestone.summary}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A5A5AA] leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {milestone.venue && (
                        <div className="flex items-center gap-1.5 text-[11px] text-[#A5A5AA]/70 pt-3 border-t border-[#222227]">
                          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>{milestone.venue}</span>
                        </div>
                      )}

                      {/* Optional Milestone Image Thumbnail */}
                      {milestone.imageSrc && (
                        <div className="mt-4 pt-4 border-t border-[#222227] overflow-hidden rounded-lg">
                          <button
                            type="button"
                            onClick={() => {
                              if (milestone.year === "2005") onOpenPhotoLightbox("messi-debut-2005");
                              else if (milestone.year === "2022") onOpenPhotoLightbox("messi-trophy-triumph");
                              else if (milestone.year === "2008") onOpenPhotoLightbox("olympics-2008");
                              else if (milestone.year === "2014") onOpenPhotoLightbox("swiss-2014");
                              else if (milestone.year === "2016") onOpenPhotoLightbox("messi-retirement-2016");
                              else if (milestone.year === "2021") onOpenPhotoLightbox("portrait-argentina");
                              else onOpenPhotoLightbox("wc2022-celebration");
                            }}
                            className="aspect-[16/9] w-full overflow-hidden bg-black/40 block text-left group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#74ACDF] rounded cursor-pointer relative"
                            aria-label={`View full photo: ${milestone.imageAlt || milestone.title}`}
                          >
                            <img
                              src={milestone.imageSrc}
                              alt={milestone.imageAlt || milestone.title}
                              className="w-full h-full object-cover filter brightness-90 group-hover/img:scale-105 transition-transform duration-500"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors pointer-events-none flex items-end p-2 opacity-0 group-hover/img:opacity-100">
                              <span className="text-[10px] bg-black/70 text-white/90 px-2 py-0.5 rounded backdrop-blur-sm">
                                Click to enlarge
                              </span>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { OFFICIAL_TROPHIES, CAREER_RECORD_STATS } from "../data/statsData";
import { Trophy, Award, Star, Flame, Shield, CheckCircle } from "lucide-react";

export const AchievementSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#171719]/40 border-t border-[#171719] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C6A15B] uppercase mb-3">
            <span>Verified Honors & Records</span>
            <span className="text-[#A5A5AA]">·</span>
            <span>Fact-Checked Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            The Trophy Cabinet & Historic Numbers
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
            Examining the honors won with the Argentine national team, clearly delineating senior major titles from youth Olympic achievements.
          </p>
        </div>

        {/* Major Honors Cards (Top Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {OFFICIAL_TROPHIES.map((trophy) => (
            <div
              key={trophy.id}
              className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                trophy.highlight
                  ? "bg-[#171719] border-[#C6A15B]/40 hover:border-[#C6A15B] shadow-lg shadow-black/60"
                  : "bg-[#171719]/80 border-[#222227] hover:border-[#74ACDF]/40"
              }`}
            >
              {trophy.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C6A15B]/15 to-transparent pointer-events-none rounded-tr-xl" />
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#0B0B0D] border border-[#222227] text-[#C6A15B]">
                    {trophy.category === "Trophy" ? (
                      <Trophy className="w-5 h-5 text-[#C6A15B]" />
                    ) : (
                      <Award className="w-5 h-5 text-[#74ACDF]" />
                    )}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A5A5AA]">
                    {trophy.category}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
                    {trophy.metric}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#F5F5F5]">
                    {trophy.label}
                  </span>
                </div>

                <p className="text-xs font-mono text-[#74ACDF] mb-3">
                  {trophy.yearsOrContext}
                </p>

                <p className="text-xs sm:text-sm text-[#A5A5AA] leading-relaxed">
                  {trophy.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222227] flex items-center justify-between text-[11px] text-[#A5A5AA]/70">
                <span>Verified Official Record</span>
                <CheckCircle className="w-3.5 h-3.5 text-[#74ACDF]" />
              </div>
            </div>
          ))}
        </div>

        {/* All-Time International Statistics (Bottom Row) */}
        <div className="bg-[#171719] border border-[#222227] rounded-xl p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-[#222227]">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-1">
                All-Time Albiceleste Statistical Milestones
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5AA]">
                Records accurate as of the 2024–2026 CONMEBOL World Cup Qualifying cycle.
              </p>
            </div>
            <div className="text-xs font-mono text-[#C6A15B] bg-[#0B0B0D] px-3 py-1.5 rounded border border-[#222227] self-start sm:self-auto">
              Updated Live Archive
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAREER_RECORD_STATS.map((stat) => (
              <div key={stat.id} className="space-y-2">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#74ACDF] tracking-tight block">
                  {stat.number}
                </span>
                <h4 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider">
                  {stat.label}
                </h4>
                <p className="text-xs text-[#A5A5AA] leading-relaxed">
                  {stat.detail}
                </p>
                <span className="text-[10px] text-[#A5A5AA]/60 block font-mono">
                  {stat.asOfDate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

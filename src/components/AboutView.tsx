import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { BookOpen, ShieldCheck, Award, Heart, Globe } from "lucide-react";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

export const AboutView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="mb-12 border-b border-[#222227] pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-3">
          <BookOpen className="w-4 h-4 text-[#74ACDF]" />
          <span>Masthead & Editorial Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
          About The Final Whistle
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-mono">
          Beyond the Game. Into the Legacy.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
        <section className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">
            Our Editorial Purpose
          </h2>
          <p>
            <strong className="text-white">The Final Whistle</strong> is an independent digital sports editorial publication created to explore modern football with the narrative depth, typographic discipline, and visual richness of traditional long-form print magazines.
          </p>
          <p>
            Rather than focusing on fleeting 24-hour rumor cycles, our editorial lens is aimed at defining generational eras, historical turning points, and the cultural resonance of iconic sporting journeys.
          </p>
        </section>

        <section className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#74ACDF] font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5" />
            <span>Journalistic Standards & Verification Code</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#F5F5F5]">
            Separating Confirmed Fact From Speculation
          </h3>
          <p>
            Football journalism frequently suffers from hyperbole and premature retirement pronouncements. Throughout our coverage of Lionel Messi and Argentine football, we strictly enforce verification rules:
          </p>
          <ul className="space-y-3 pt-2 text-xs sm:text-sm">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74ACDF] mt-2 flex-shrink-0" />
              <span>
                <strong>No Unverified Retirement Claims:</strong> We distinguish his 2016 temporary announcement from his current status as active Argentina captain in 2026 World Cup qualifiers.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74ACDF] mt-2 flex-shrink-0" />
              <span>
                <strong>Official Statistical Archives:</strong> All appearance totals, goals, assists, and trophies are verified through official FIFA and CONMEBOL match reports.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#74ACDF] mt-2 flex-shrink-0" />
              <span>
                <strong>Authentic Documentary Photography:</strong> We refuse synthetic AI images presented as news documentary, sourcing verified photographs licensed under Creative Commons.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F5F5F5] mb-1">
              Explore Our Published Works
            </h3>
            <p className="text-xs text-[#A5A5AA]">
              Begin with our 7-chapter cover story or explore career milestones.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={ROUTES.STORY}
              className="px-5 py-2.5 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs rounded transition-colors text-center w-full sm:w-auto"
            >
              Read Cover Story
            </Link>
            <Link
              href={ROUTES.LEGACY}
              className="px-5 py-2.5 bg-[#0B0B0D] hover:bg-[#222227] border border-[#222227] text-xs text-[#F5F5F5] rounded transition-colors text-center w-full sm:w-auto"
            >
              Messi's legacy
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

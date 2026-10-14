import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ShieldAlert, Lock, CheckCircle2 } from "lucide-react";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";

export const PrivacyView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "Privacy Policy & Disclaimers" }]} />

      <div className="mb-12 border-b border-[#222227] pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C6A15B] uppercase mb-3">
          <Lock className="w-4 h-4 text-[#C6A15B]" />
          <span>Legal & Transparency</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
          Privacy Policy & Disclaimers
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#A5A5AA] font-mono">
          Last Updated: October 2026
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#A5A5AA] leading-relaxed">
        {/* Mandatory Project Disclaimer */}
        <div className="p-6 bg-[#171719] border-l-4 border-[#C6A15B] rounded-r-xl space-y-3">
          <div className="flex items-center gap-2 text-[#C6A15B] font-semibold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-5 h-5" />
            <span>Independent Editorial Disclaimer</span>
          </div>
          <p className="text-[#F5F5F5] font-serif text-base italic leading-relaxed">
            “This website is an independent editorial project and is not affiliated with Lionel Messi, the Argentine Football Association, FIFA, or any other official football organization. All trademarks and image rights remain with their respective owners.”
          </p>
        </div>

        <section className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">
            1. Data Privacy & Zero Tracking
          </h2>
          <p>
            The Final Whistle operates on strict privacy-respecting architecture. We do not use third-party behavioral ad trackers, cookies that follow you across the web, or commercial data brokers.
          </p>
          <p>
            When you submit comments or reflections in our Reader Discussion section, your input is saved directly in your browser's local Web Storage API (<code className="text-[#74ACDF]">localStorage</code>). No personal data is stored on external databases or sold to third parties.
          </p>
        </section>

        <section className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#F5F5F5]">
            2. Image Copyright & Licensing Compliance
          </h2>
          <p>
            All documentary photography utilized throughout this publication is licensed under Creative Commons terms (CC BY 4.0, CC BY-SA 3.0, CC BY-SA 2.0) or hosted under editorial fair-use journalistic practices:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pt-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#74ACDF] flex-shrink-0" />
              <span>Full photographer credits and Wikimedia Commons origin links are available on every image in the gallery.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#74ACDF] flex-shrink-0" />
              <span>Photographs are presented in high fidelity without misleading digital alteration or synthetic manipulation.</span>
            </li>
          </ul>
        </section>

        <div className="pt-4 flex justify-end">
          <Link
            href={ROUTES.HOME}
            className="px-6 py-2.5 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs rounded transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

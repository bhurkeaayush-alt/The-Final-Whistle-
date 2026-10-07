import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle, ArrowRight, Shield } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address (e.g. reader@example.com).");
      return;
    }

    setStatus("loading");

    // Simulate verified subscription handling
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <section className="py-20 bg-[#0B0B0D] border-t border-[#171719] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-radial-gradient from-[#74ACDF]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#171719] border border-[#222227] rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#74ACDF] uppercase mb-4">
            <Mail className="w-4 h-4 text-[#74ACDF]" />
            <span>The Weekly Dispatch</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            Stories Worth Staying For.
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#A5A5AA] max-w-xl mx-auto leading-relaxed mb-8">
            Get thoughtful football stories, iconic moments, and the latest features delivered to your inbox. No spam, just pure football storytelling.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 bg-[#0B0B0D] border border-[#222227] focus:border-[#74ACDF] text-[#F5F5F5] text-sm rounded-md transition-colors focus-visible:outline-none"
                disabled={status === "loading"}
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#74ACDF] hover:bg-[#4B91D2] disabled:opacity-50 text-[#0B0B0D] font-semibold text-xs tracking-wider uppercase rounded-md transition-all shadow-md shadow-[#74ACDF]/10"
              >
                <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Error Message */}
            {status === "error" && (
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-rose-400">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Message */}
            {status === "success" && (
              <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-[#74ACDF]/10 border border-[#74ACDF]/40 text-[#74ACDF] text-xs rounded-md">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! Your demo subscription has been recorded in this preview environment.</span>
              </div>
            )}
          </form>

          {/* Clear Transparent Integration Note */}
          <div className="pt-6 border-t border-[#222227]/80 text-[11px] text-[#A5A5AA]/70 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>
              Integration note: This is an interactive frontend demonstration. To connect live subscriptions in production, hook this endpoint to services like Buttondown or Resend via an API route.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

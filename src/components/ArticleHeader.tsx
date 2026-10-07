import React, { useState } from "react";
import { Clock, Calendar, User, Share2, Check, MessageCircle, Copy } from "lucide-react";
import { MAIN_ARTICLE_META } from "../data/articleData";

export const ArticleHeader: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const articleUrl = typeof window !== "undefined" ? window.location.href : "https://thefinalwhistle.magazine";
  const shareText = encodeURIComponent(
    `${MAIN_ARTICLE_META.title} — via The Final Whistle`
  );

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(articleUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="border-b border-[#222227] pb-10 mb-12">
      {/* Category & Editorial Mark */}
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#74ACDF] mb-4">
        <span>{MAIN_ARTICLE_META.category}</span>
        <span className="text-[#A5A5AA]">·</span>
        <span className="text-[#C6A15B]">Long-Form Cover Story</span>
      </div>

      {/* Main Article Title */}
      <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6">
        {MAIN_ARTICLE_META.title}
      </h1>

      {/* Standfirst / Subtitle */}
      <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#A5A5AA] leading-relaxed mb-8 font-light italic">
        {MAIN_ARTICLE_META.subtitle}
      </p>

      {/* Metadata Bar & Share Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[#171719]">
        {/* Author & Timing (Zero-Pill: pure unboxed metadata) */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#A5A5AA]">
          <div className="flex items-center gap-1.5 text-[#F5F5F5] font-medium">
            <User className="w-4 h-4 text-[#74ACDF]" />
            <span>{MAIN_ARTICLE_META.author}</span>
          </div>
          <span className="text-[#222227]">|</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#A5A5AA]" />
            <span>{MAIN_ARTICLE_META.publicationDate}</span>
          </div>
          <span className="text-[#222227]">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#C6A15B]" />
            <span>{MAIN_ARTICLE_META.readingTime}</span>
          </div>
        </div>

        {/* Share Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#A5A5AA] tracking-wider uppercase mr-1 flex items-center gap-1">
            <Share2 className="w-3.5 h-3.5 text-[#74ACDF]" />
            Share:
          </span>

          {/* X / Twitter */}
          <button
            onClick={handleShareX}
            className="p-2 text-[#A5A5AA] hover:text-white bg-[#171719] hover:bg-[#222227] border border-[#222227] rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
            aria-label="Share story on X (Twitter)"
            title="Share on X"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleShareWhatsApp}
            className="p-2 text-[#A5A5AA] hover:text-[#25D366] bg-[#171719] hover:bg-[#222227] border border-[#222227] rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
            aria-label="Share story on WhatsApp"
            title="Share on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>

          {/* Facebook */}
          <button
            onClick={handleShareFacebook}
            className="p-2 text-[#A5A5AA] hover:text-[#1877F2] bg-[#171719] hover:bg-[#222227] border border-[#222227] rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF]"
            aria-label="Share story on Facebook"
            title="Share on Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#74ACDF] ${
              copied
                ? "bg-[#74ACDF]/20 text-[#74ACDF] border-[#74ACDF]/50"
                : "bg-[#171719] hover:bg-[#222227] text-[#A5A5AA] hover:text-white border-[#222227]"
            }`}
            aria-label="Copy article link to clipboard"
            title="Copy link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#74ACDF]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

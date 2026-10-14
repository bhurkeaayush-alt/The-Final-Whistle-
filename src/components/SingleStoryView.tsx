import React, { useState } from "react";
import { RELATED_STORIES, RelatedStory } from "../data/articleData";
import { Breadcrumbs } from "./Breadcrumbs";
import { Link } from "../context/RouterContext";
import { ROUTES } from "../utils/routes";
import { Clock, Tag, BookOpen, CheckCircle2, ArrowLeft, ArrowRight, Share2, Check, MessageCircle, Copy } from "lucide-react";

interface SingleStoryViewProps {
  storyId: string;
}

export const SingleStoryView: React.FC<SingleStoryViewProps> = ({ storyId }) => {
  const [copied, setCopied] = useState(false);
  const story = RELATED_STORIES.find((s) => s.id === storyId) || RELATED_STORIES[0];

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(`${story.title} — via The Final Whistle`);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(currentUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(currentUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Find next story
  const currentIndex = RELATED_STORIES.findIndex((s) => s.id === story.id);
  const nextStory = RELATED_STORIES[(currentIndex + 1) % RELATED_STORIES.length];

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Breadcrumbs
        items={[
          { label: "Latest stories", href: ROUTES.STORIES },
          { label: story.title }
        ]}
      />

      {/* Story Category & Reading Time */}
      <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#74ACDF] font-semibold mb-4">
        <span className="flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5" />
          {story.category}
        </span>
        <span className="text-[#A5A5AA]">·</span>
        <span className="flex items-center gap-1 text-[#C6A15B]">
          <Clock className="w-3.5 h-3.5" />
          {story.readTime}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight mb-6">
        {story.title}
      </h1>

      {/* Summary / Standfirst */}
      <p className="font-serif text-lg sm:text-xl text-[#A5A5AA] italic mb-8 border-b border-[#222227] pb-6 leading-relaxed">
        {story.summary}
      </p>

      {/* Share Bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#222227] text-xs text-[#A5A5AA]">
        <Link
          href={ROUTES.STORIES}
          className="inline-flex items-center gap-1.5 hover:text-[#74ACDF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Latest stories</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShareX}
            className="p-2 text-[#A5A5AA] hover:text-white bg-[#171719] hover:bg-[#222227] border border-[#222227] rounded transition-colors"
            title="Share on X"
            aria-label="Share story on X"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button
            onClick={handleShareWhatsApp}
            className="p-2 text-[#A5A5AA] hover:text-[#25D366] bg-[#171719] hover:bg-[#222227] border border-[#222227] rounded transition-colors"
            title="Share on WhatsApp"
            aria-label="Share story on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopyLink}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded transition-colors ${
              copied
                ? "bg-[#74ACDF]/20 text-[#74ACDF] border-[#74ACDF]/50"
                : "bg-[#171719] hover:bg-[#222227] text-[#A5A5AA] hover:text-white border-[#222227]"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#74ACDF]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Featured Photo */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#222227] mb-10 bg-black/60 shadow-2xl">
        <img
          src={story.image}
          alt={story.imageAlt}
          className="w-full h-full object-cover filter brightness-95"
        />
      </div>

      {/* Full Content */}
      <div className="space-y-6 text-[#F5F5F5]/85 text-base sm:text-lg leading-relaxed mb-12">
        {story.fullContent.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Editorial Key Takeaways */}
      <div className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 mb-12 shadow-lg">
        <h3 className="text-xs uppercase font-mono tracking-wider text-[#C6A15B] mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#C6A15B]" />
          Key Editorial Takeaways
        </h3>
        <ul className="space-y-3">
          {story.keyTakeaways.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A5A5AA]">
              <CheckCircle2 className="w-4 h-4 text-[#74ACDF] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Up Next Card */}
      <div className="pt-8 border-t border-[#222227] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase font-mono text-[#A5A5AA]">Next In Series</span>
          <h4 className="font-serif text-base font-bold text-[#F5F5F5]">{nextStory.title}</h4>
        </div>
        <Link
          href={`/stories/${nextStory.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171719] hover:bg-[#222227] border border-[#222227] hover:border-[#74ACDF]/50 text-xs font-semibold text-[#74ACDF] rounded transition-all"
        >
          <span>Read Next</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

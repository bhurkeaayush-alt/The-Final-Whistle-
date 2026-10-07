import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Heart, AlertCircle, CheckCircle, Share2, Info } from "lucide-react";

interface CommentItem {
  id: string;
  name: string;
  comment: string;
  timestamp: string;
  moment: string;
  likes: number;
}

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: "c-1",
    name: "Mateo Rossi",
    moment: "Qatar 2022 Final",
    comment: "The moment Gonzalo Montiel scored the penalty and Messi dropped to his knees, smiling up at his mother and family in the stands with tears in his eyes. After all the pain and finals he endured, he was finally free.",
    timestamp: "2 hours ago",
    likes: 42
  },
  {
    id: "c-2",
    name: "Elena Alvarez",
    moment: "2016 Copa América Centenario",
    comment: "I was in Buenos Aires the night he announced his retirement in 2016. The entire country felt like it had lost its soul. The rain in the streets, people gathering at the Obelisco holding 'No Te Vayas Lio' signs. His return taught us what real perseverance means.",
    timestamp: "5 hours ago",
    likes: 29
  },
  {
    id: "c-3",
    name: "David K.",
    moment: "2021 Maracanã Final",
    comment: "The final whistle against Brazil in 2021. Seeing every single teammate ignore the trophy to run and tackle Messi to the turf in a heap of joy. That was when you knew this team wasn't playing for glory—they were playing for him.",
    timestamp: "1 day ago",
    likes: 38
  }
];

export const ReaderDiscussion: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const stored = localStorage.getItem("final_whistle_comments");
      return stored ? JSON.parse(stored) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  const [name, setName] = useState("");
  const [moment, setMoment] = useState("2022 World Cup Triumph");
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem("final_whistle_comments", JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const trimmedName = name.trim();
    const trimmedComment = commentText.trim();

    if (!trimmedName) {
      setError("Please provide your name or nickname.");
      return;
    }

    if (trimmedName.length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    if (!trimmedComment) {
      setError("Please share your memory or reflection.");
      return;
    }

    if (trimmedComment.length < 10) {
      setError("Reflection must be at least 10 characters long.");
      return;
    }

    const newComment: CommentItem = {
      id: `c-${Date.now()}`,
      name: trimmedName,
      moment: moment,
      comment: trimmedComment,
      timestamp: "Just now",
      likes: 1
    };

    setComments([newComment, ...comments]);
    setName("");
    setCommentText("");
    setSuccess("Your reflection has been submitted and saved to your local session preview.");

    setTimeout(() => {
      setSuccess(null);
    }, 4500);
  };

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap((prev) => ({ ...prev, [id]: true }));
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section id="discussion" className="py-20 bg-[#0B0B0D] border-t border-[#171719] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C6A15B] uppercase mb-3">
            <span>Reader Community</span>
            <span className="text-[#A5A5AA]">·</span>
            <span>Voices & Memories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
            What Will Messi’s Legacy Mean to You?
          </h2>
          <p className="text-sm sm:text-base text-[#A5A5AA] leading-relaxed max-w-2xl mx-auto">
            From the heartbreak of 2014 to the glory of Qatar, which Messi moment will you remember forever? Join football readers worldwide in sharing your story.
          </p>
        </div>

        {/* Comment Submission Form */}
        <div className="bg-[#171719] border border-[#222227] rounded-xl p-6 sm:p-8 mb-12 shadow-xl">
          <h3 className="font-serif text-lg font-bold text-[#F5F5F5] mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#74ACDF]" />
            Leave Your Reflection
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="reader-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A5A5AA] mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="reader-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sofia Martinez"
                  maxLength={50}
                  className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#222227] focus:border-[#74ACDF] text-[#F5F5F5] text-sm rounded-md transition-colors focus-visible:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="reader-moment"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#A5A5AA] mb-1.5"
                >
                  Defining Moment
                </label>
                <select
                  id="reader-moment"
                  value={moment}
                  onChange={(e) => setMoment(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#222227] focus:border-[#74ACDF] text-[#F5F5F5] text-sm rounded-md transition-colors focus-visible:outline-none"
                >
                  <option value="2022 World Cup Triumph (Qatar)">2022 World Cup Triumph (Qatar)</option>
                  <option value="2021 Copa América Glory (Maracanã)">2021 Copa América Glory (Maracanã)</option>
                  <option value="2016 Heartbreak & Return">2016 Heartbreak & Return (USA)</option>
                  <option value="2014 Maracanã Final">2014 Maracanã Final (Brazil)</option>
                  <option value="2008 Olympic Gold (Beijing)">2008 Olympic Gold (Beijing)</option>
                  <option value="General Leadership & Impact">General Leadership & Impact</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="reader-comment"
                className="block text-xs font-semibold uppercase tracking-wider text-[#A5A5AA] mb-1.5"
              >
                Your Personal Reflection *
              </label>
              <textarea
                id="reader-comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Where were you when the final whistle blew? What does Lionel Messi’s journey mean to you personally?"
                rows={4}
                maxLength={800}
                className="w-full px-4 py-2.5 bg-[#0B0B0D] border border-[#222227] focus:border-[#74ACDF] text-[#F5F5F5] text-sm rounded-md transition-colors focus-visible:outline-none resize-y"
              />
            </div>

            {/* Error and Success banners */}
            {error && (
              <div className="flex items-center gap-2 p-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-900 rounded-md">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-3 text-xs text-[#74ACDF] bg-[#74ACDF]/10 border border-[#74ACDF]/40 rounded-md">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>{success}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              {/* Honest client-side demonstration disclaimer */}
              <div className="flex items-center gap-1.5 text-[11px] text-[#A5A5AA]">
                <Info className="w-3.5 h-3.5 text-[#74ACDF] flex-shrink-0" />
                <span>
                  Demo notice: Reflections are displayed in this browser session via local storage.
                </span>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#74ACDF] hover:bg-[#4B91D2] text-[#0B0B0D] font-semibold text-xs tracking-wide rounded-md transition-all self-end sm:self-auto"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Share Reflection</span>
              </button>
            </div>
          </form>
        </div>

        {/* Existing Comments List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#222227]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5A5AA]">
              Community Reflections ({comments.length})
            </h4>
            <span className="text-xs text-[#C6A15B] font-mono">Latest Submissions</span>
          </div>

          {comments.map((c) => (
            <div
              key={c.id}
              className="p-5 bg-[#171719] border border-[#222227] rounded-lg transition-colors hover:border-[#74ACDF]/30"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-serif text-sm font-bold text-[#F5F5F5] mr-2">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-[#74ACDF] font-mono">
                    · {c.moment}
                  </span>
                </div>
                <span className="text-[11px] text-[#A5A5AA] font-mono">
                  {c.timestamp}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#A5A5AA] leading-relaxed mb-4">
                {c.comment}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#222227]/60 text-xs text-[#A5A5AA]">
                <button
                  onClick={() => handleLike(c.id)}
                  className={`flex items-center gap-1.5 transition-colors ${
                    likedMap[c.id]
                      ? "text-rose-400"
                      : "hover:text-rose-400 text-[#A5A5AA]"
                  }`}
                  aria-label={`Like reflection by ${c.name}`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      likedMap[c.id] ? "fill-current" : ""
                    }`}
                  />
                  <span>{c.likes}</span>
                </button>

                <span className="text-[11px] text-[#A5A5AA]/60">Verified Reader</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
